/* Keep atlas focus separate from hover, and movement playback separate from navigation. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const {muscles, exercises, sources} = window.AnatomyLessons;
  const muscleIds = Object.keys(muscles), exerciseIds = Object.keys(exercises);
  const focusY = {pectoralis:24,deltoid:21,biceps:30,triceps:30,trapezius:22,latissimus:31,rectus:39,obliques:39,gluteus:50,quadriceps:63,hamstrings:64,gastrocnemius:81};
  let pinned='pectoralis', displayed='', view='front', exercise='bench', mode='', plate, mini, demo, zoomed=false, manualPause=false, framePhase=-1;
  function make(tag, txt, cls) {
    const el=document.createElement(tag);
    if (txt!==undefined) el.textContent=txt;
    if (cls) el.className=cls;
    return el;
  }
  function btn(txt,fn) { const b=make('button',txt); b.type='button'; b.onclick=fn; return b }
  function link(txt, url) { const a=make('a',txt); a.href=url; return a }
  function press(el,on) { el.setAttribute('aria-pressed',String(on)) }
  function renderRelation(id, rel) {
    const name=rel.target?btn(rel.label,()=>pin(rel.target,true)):make('strong',rel.label);
    $(id).replaceChildren(name,make('p',rel.explanation));
  }
  function paint(id) {
    const m=muscles[id]; if (!m) return;
    plate?.update({view,selected:id,primary:[],secondary:[],stabilizer:[]});
    document.querySelectorAll('[data-view]').forEach(b=>press(b,b.dataset.view===view));
    if(displayed===id) return;
    displayed=id;
    $('note-region').textContent=String(muscleIds.indexOf(id)+1).padStart(2,'0')+' / '+m.group;
    $('name').textContent=$('plate-en').textContent=m.en;
    $('cn').textContent=$('plate-zh').textContent=m.zh;
    $('fn').textContent=m.fn; $('clue').textContent=m.clue;
    renderRelation('synergy',m.synergy); renderRelation('antagonist',m.antagonist);
    const related=exerciseIds.filter(key=>exercises[key].primary.includes(id)||exercises[key].secondary.includes(id)||exercises[key].stabilizer.includes(id));
    const direct=related.find(key=>exercises[key].primary.includes(id))||related[0];
    const choices=direct?[direct,...related.filter(key=>key!==direct)]:[];
    $('see-moves').replaceChildren(...(choices.length?[make('span','See it in motion'),...choices.map((key,i)=>{
      const button=btn(exercises[key].zh,()=>go('motion',key));if(i===0){const pic=make('img');pic.src='assets/anatomy/motions/'+key+'-start.webp';pic.alt='';button.prepend(pic);button.className='move-preview'}return button;
    })]:[]));
    document.querySelectorAll('[data-muscle-index]').forEach(b=>press(b,b.dataset.muscleIndex===id));
    $('muscle-select').value=id;
  }
  function pin(id,changeView) {
    if(!muscles[id])return;
    pinned=id;
    if(changeView)view=muscles[id].view;
    $('plate-host').style.setProperty('--focus-y',(focusY[id]||45)+'%');
    paint(id);
  }
  function chooseView(v) {
    if(view===v)return;
    view=v; pin(v==='front'?'pectoralis':'trapezius',false);
  }
  function initAtlas() {
    for (const [i,id] of muscleIds.entries()) {
      const m=muscles[id], b=btn(m.en,()=>pin(id,true)); b.prepend(make('span',String(i+1).padStart(2,'0'))); b.dataset.muscleIndex=id;
      $('directory-list').append(b);
      const option=make('option',m.en); option.value=id; $('muscle-select').append(option);
    }
    $('muscle-select').onchange=e=>pin(e.target.value,true);
    plate=window.MovementAtlas.mount($('plate-host'),{
      onSelect:id=>pin(id,false),
      onPreview:id=>{ if(mode!=='motion')paint(muscles[id]?id:pinned) }
    });
    $('plate-host').addEventListener('pointerleave',()=>paint(pinned));
    document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>chooseView(b.dataset.view));
    $('zoom').onclick=()=>{zoomed=!zoomed;press($('zoom'),zoomed);$('zoom').textContent=zoomed?'Full figure':'Enlarge';document.querySelector('.plate').classList.toggle('is-zoomed',zoomed)};
    if('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window){
      $('say').hidden=false; $('say').onclick=()=>{const u=new SpeechSynthesisUtterance(muscles[displayed].en);u.lang='en-US';u.rate=.83;window.speechSynthesis.cancel();window.speechSynthesis.speak(u)};
    }
    pin(pinned,true);
  }
  function syncPlay() { const running=!!demo?.playing, button=$('play'), label=running?'Pause':'Play'; if(button.textContent!==label||!button.hasAttribute('aria-label')){button.textContent=label;button.setAttribute('aria-label',label+' movement')} }
  function onFrame(progress) {
    const i=progress<.5?0:1;
    $('timeline').value=Math.round(progress*1000);
    if(i!==framePhase){
      framePhase=i; const p=exercises[exercise].phases[i];
      $('phase').textContent=p.en;
      $('timeline').setAttribute('aria-valuetext',p.zh);
      [...$('phase-notes').children].forEach((el,j)=>el.classList.toggle('current',j===i));
    }
    syncPlay();
  }
  function buildMotion(id) {
    exercise=id; const ex=exercises[id]; framePhase=-1;
    $('move-en').textContent=ex.en; $('move-zh').textContent=({bench:'Horizontal push',pullup:'Vertical pull',squat:'Squat pattern',rdl:'Hip hinge',ohp:'Vertical push',row:'Horizontal pull'})[id]; $('move-note').textContent=ex.note;
    $('film-index').textContent='STUDY '+String(exerciseIds.indexOf(id)+1).padStart(2,'0')+' / 06';
    $('phase-notes').replaceChildren(...ex.phases.map(p=>{const div=make('div',undefined,'phase-row'),label=make('b',p.zh);label.prepend(make('i',p.kind+' phase'));div.append(label,make('p',p.text));return div}));
    $('roles-list').replaceChildren(...[['primary','Prime movers'],['secondary','Synergists'],['stabilizer','Stabilisers']].filter(([role])=>ex[role].length).map(([role,label])=>{
      const entry=make('div'), list=make('div',undefined,'role-chips');entry.dataset.role=role;entry.append(make('b',label,'role-label'),list);
      ex[role].forEach(key=>list.append(btn(muscles[key].zh,()=>go('atlas',key))));return entry;
    }));
    if(!mini)mini=['front','back'].map(v=>window.MovementAtlas.mount($('mini-'+v),{onSelect:key=>go('atlas',key)}));
    mini.forEach((p,i)=>p.update({view:i?'back':'front',selected:null,primary:ex.primary,secondary:ex.secondary,stabilizer:ex.stabilizer}));
    document.querySelectorAll('[data-ex]').forEach(b=>press(b,b.dataset.ex===id));
    if(!demo)demo=window.MovementMotion.mount($('motion-host'),{onFrame});
    demo.select(id);demo.seek(0);
    if(manualPause||window.matchMedia('(prefers-reduced-motion: reduce)').matches)demo.pause();
    else if(!document.hidden)demo.play();
    onFrame(0);
  }
  function go(next,id) {
    const target='#'+next+'/'+id;
    if(next!==mode)document.querySelector('.chapters').scrollIntoView({block:'start'});
    if(location.hash===target)applyRoute();else location.hash=target;
  }
  function applyRoute() {
    const [key,id]=location.hash.slice(1).split('/');
    if(key==='colophon'){$('sources-disclosure').open=true;if(mode)return}
    const next=key==='motion'?'motion':'atlas';
    $('atlas-panel').hidden=next!=='atlas';$('motion-panel').hidden=next!=='motion';
    [[$('atlas-link'),'atlas'],[$('motion-link'),'motion']].forEach(([el,x])=>{if(x===next)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current')});
    mode=next;
    if(mode==='motion')buildMotion(Object.hasOwn(exercises,id)?id:exercise);
    else{demo?.pause();pin(Object.hasOwn(muscles,id)?id:pinned,true)}
  }
  exerciseIds.forEach(id=>{const b=btn(exercises[id].zh,()=>go('motion',id)),img=make('img');img.src='assets/anatomy/motions/'+id+'-start.webp';img.alt='';b.prepend(img);b.dataset.ex=id;$('ex-list').append(b)});
  $('play').onclick=()=>{if(demo.playing){manualPause=true;demo.pause()}else{manualPause=false;demo.play()}syncPlay()};
  $('timeline').oninput=e=>{manualPause=true;demo.pause();demo.seek(Number(e.target.value)/1000);syncPlay()};
  document.addEventListener('visibilitychange',()=>{if(!demo||mode!=='motion')return;if(document.hidden)demo.pause();else if(!manualPause&&!matchMedia('(prefers-reduced-motion: reduce)').matches)demo.play();syncPlay()});
  for(const s of sources){const li=make('li');li.append(link(s.name,s.url));$('references').append(li)}
  const credits=$('art-credits');credits.append(make('h3','Making the plates'));
  const credit=(...items)=>{const p=make('p');p.append(...items);credits.append(p)};
  credit('The anatomical plates were rendered from ',link('Z-Anatomy / BodyParts3D','https://github.com/Z-Anatomy/Models-of-human-anatomy'),' geometry distributed by ',link('free-muscles','https://github.com/tiralonghipol/free-muscles'),'. Plates and region contours: ',link('CC BY-SA 4.0','https://creativecommons.org/licenses/by-sa/4.0/'),'. ',link('Full credits and modifications','https://github.com/maotianyi12138-eng/-/blob/main/assets/anatomy/plates/CREDITS.md'),'.');
  credit('Movement sequences use a ',link('CC0 MakeHuman figure','https://github.com/blwsk/exercise-animations/blob/be16cb22c4ceb4ad134894250062fd0782410233/THIRD_PARTY_ASSETS.md'),'. Shading is illustrative; it does not represent electrical muscle activity. ',link('Animation production notes','https://github.com/maotianyi12138-eng/-/blob/main/assets/anatomy/motions/README.md'),'.');
  credit('Reading inspiration: ',link('Science of Strength Training','https://penguinrandomhousehighereducation.com/2021/09/27/qa-with-science-of-strength-training-author-austin-current/'),'. No illustrations from the book are reproduced here.');
  credit('Typeset in ',link('Source Serif 4','https://github.com/adobe-fonts/source-serif'),'. Layout reference: ',link('Editorial Design System','https://github.com/bergside/awesome-design-skills/tree/main/skills/editorial'),'.');
  initAtlas();window.addEventListener('hashchange',applyRoute);applyRoute();
})();
