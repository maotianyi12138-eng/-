import { mkdir, readFile, writeFile } from 'node:fs/promises';

const trainingKey = process.env.SYNFIT_TRAINING_API_KEY;
const bodyKey = process.env.SYNFIT_BODY_API_KEY;
const outputPath = new URL('../data/synfit.json', import.meta.url);

if (!trainingKey || !bodyKey) {
  throw new Error('SynFit repository secrets are not configured.');
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const number = value => {
  const parsed = Number.parseFloat(String(value ?? '').replace(/[^0-9.-]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
};
const round = (value, digits = 1) => Number(Number(value || 0).toFixed(digits));
const isoDate = date => date.toISOString().slice(0, 10);

async function requestJson(url, key, body, retry = true) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip'
    },
    body: JSON.stringify(body)
  });
  const payload = await response.json().catch(() => ({}));
  const message = String(payload?.message || payload?.msg || payload?.error || '');
  if ((!response.ok || /too frequent/i.test(message)) && retry && payload?.retry_after_ms) {
    await sleep(Math.min(60000, Math.max(500, Number(payload.retry_after_ms))));
    return requestJson(url, key, body, false);
  }
  if (!response.ok) throw new Error(`SynFit request failed (${response.status}).`);
  if (/apikey missing|apikey invalid|仅VIP可用/i.test(message)) throw new Error(`SynFit rejected the request: ${message}`);
  return payload;
}

function setStats(set = {}) {
  if (set.done === false || set.done === 0) return { sets: 0, volume: 0, seconds: 0 };
  let sets = 1;
  let volume = number(set.weight_kg ?? set.weight) * number(set.reps);
  let seconds = number(set.duration_s ?? set.time ?? set.metrics?.workoutTime ?? set.metrics?.duration_s);
  for (const child of set.items || []) {
    const stats = setStats(child.set || child);
    sets += stats.sets;
    volume += stats.volume;
    seconds += stats.seconds;
  }
  for (const child of set.dropSets || []) {
    const stats = setStats(child.set || child);
    sets += stats.sets;
    volume += stats.volume;
    seconds += stats.seconds;
  }
  return { sets, volume, seconds };
}

function normalizeSession(train = {}, fallbackDate = '') {
  let setCount = 0;
  let volumeKg = 0;
  let setSeconds = 0;
  let calories = 0;
  let distance = 0;
  const movements = (Array.isArray(train.movements) ? train.movements : []).map(move => {
    let movementSets = 0;
    for (const set of move.sets || []) {
      const stats = setStats(set);
      movementSets += stats.sets;
      setCount += stats.sets;
      volumeKg += stats.volume;
      setSeconds += stats.seconds;
      calories += number(set.metrics?.kcal ?? set.metrics?.calories);
      distance += number(set.metrics?.distance);
    }
    calories += number(move.metrics?.kcal ?? move.metrics?.calories);
    distance += number(move.metrics?.distance);
    setSeconds += number(move.metrics?.workoutTime ?? move.metrics?.duration_s);
    return {
      name: String(move.name || '未命名动作').slice(0, 80),
      setCount: movementSets
    };
  });
  const start = number(train.start);
  const end = number(train.end);
  const elapsedSeconds = start && end && end > start ? (end - start) / (end > 1e12 ? 1000 : 1) : 0;
  const date = String(train.datestr || fallbackDate).slice(0, 10);
  return {
    date,
    title: String(train.title || train.name || '训练').slice(0, 100),
    start: start || 0,
    durationMinutes: round(Math.max(elapsedSeconds, setSeconds) / 60, 0),
    setCount,
    volumeKg: round(volumeKg, 1),
    calories: round(calories, 0),
    distance: round(distance, 2),
    movements
  };
}

async function readExisting() {
  try {
    return JSON.parse(await readFile(outputPath, 'utf8'));
  } catch {
    return { status: 'pending', training: { sessions: [] }, body: { records: [] } };
  }
}

const existing = await readExisting();
const today = new Date();
today.setUTCHours(12, 0, 0, 0);
const firstSync = existing.status !== 'ready' || !(existing.training?.sessions || []).length;
const lookbackDays = firstSync ? 365 : 28;
const dates = Array.from({ length: lookbackDays }, (_, index) => {
  const date = new Date(today);
  date.setUTCDate(today.getUTCDate() - index);
  return isoDate(date);
});

const refreshedDates = new Set();
const freshSessions = [];
for (const datestr of dates) {
  const payload = await requestJson('https://trains.xunjiapp.cn/api_trains_for_llm_v2', trainingKey, {
    schema_version: 'train_open_api_v2',
    datestr,
    include_full_data: false
  });
  const trains = Array.isArray(payload?.res?.trains) ? payload.res.trains : [];
  refreshedDates.add(datestr);
  freshSessions.push(...trains.map(train => normalizeSession(train, datestr)));
}

const oldSessions = Array.isArray(existing.training?.sessions) ? existing.training.sessions : [];
const sessions = [...oldSessions.filter(session => !refreshedDates.has(session.date)), ...freshSessions]
  .filter(session => session.date)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)) || Number(b.start || 0) - Number(a.start || 0));

const bodyPayload = await requestJson('https://api.xunjiapp.cn/open/body/query_gzip', bodyKey, {
  start_date: '2024-01-01',
  end_date: isoDate(today),
  types: ['weight', 'bodyfat'],
  include_latest: true,
  include_records: true,
  limit: 500,
  offset: 0
});
if (bodyPayload?.success !== true) throw new Error('SynFit body query did not succeed.');
const bodyRecords = (Array.isArray(bodyPayload?.res?.records) ? bodyPayload.res.records : [])
  .filter(record => record?.datestr && ['weight', 'bodyfat'].includes(record.type))
  .map(record => ({
    date: String(record.datestr).slice(0, 10),
    type: record.type,
    value: round(number(record.value), 2),
    unit: String(record.unit || (record.type === 'weight' ? 'kg' : '%')).slice(0, 8)
  }))
  .sort((a, b) => a.date.localeCompare(b.date));

const latest = {};
for (const record of bodyRecords) latest[record.type] = record;

const publicData = {
  status: 'ready',
  updatedAt: new Date().toISOString(),
  privacy: 'Public summary only. API keys, notes, heart-rate data and source identifiers are excluded.',
  training: {
    sessions,
    range: { from: sessions.at(-1)?.date || null, to: sessions[0]?.date || null }
  },
  body: { records: bodyRecords, latest }
};

await mkdir(new URL('../data/', import.meta.url), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(publicData, null, 2)}\n`, 'utf8');
console.log(`SynFit showcase updated: ${sessions.length} sessions, ${bodyRecords.length} body records.`);
