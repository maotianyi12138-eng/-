/* Interactive orthographic atlas. Artwork: see plates/CREDITS.md, CC BY-SA 4.0. */
(() => {
  'use strict';
  const base = new URL('plates/', document.currentScript.src);
  const ns = 'http://www.w3.org/2000/svg';
  const make = (tag, attrs = {}) => {
    const node = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };
  const names = {
    pectoralis: 'Pectoralis major', deltoid: 'Deltoid',
    biceps: 'Biceps brachii', rectus: 'Rectus abdominis',
    obliques: 'External oblique', quadriceps: 'Quadriceps femoris',
    trapezius: 'Trapezius', latissimus: 'Latissimus dorsi',
    triceps: 'Triceps brachii', gluteus: 'Gluteus maximus',
    hamstrings: 'Hamstrings', gastrocnemius: 'Gastrocnemius'
  };
  let geometry;
  function getGeometry() {
    if (!geometry) geometry = fetch(new URL('regions.json', base)).then(response => {
      if (!response.ok) throw Error('Atlas regions not available');
      return response.json();
    }).catch(error => { geometry = null; throw error; });
    return geometry;
  }
  function mount(container, callbacks = {}) {
    const svg = make('svg', {viewBox: '0 0 618 1512', width: '100%', height: '100%', role: 'group'});
    svg.style.cssText = 'display:block;overflow:visible;isolation:isolate;';
    const img = make('image', {x:0, y:0, width:618, height:1512, 'aria-hidden': 'true','pointer-events':'none'});
    const outlines = make('g');
    const marker = make('g', {'pointer-events': 'none', 'aria-hidden': 'true'});
    marker.append(make('circle', {r: 10, fill:'none', stroke:'#fff9ed','stroke-width':3}), make('circle',{r:5,fill:'#762c1e',stroke:'#fff9ed','stroke-width':2}));
    svg.append(img, outlines, marker);
    container.replaceChildren(svg);
    let state = {view:'front', selected:null, primary:[], secondary:[], stabilizer:[]}, data, drawnView, imageView;
    function render() {
      const v = state.view === 'back' ? 'back' : 'front', plate = data?.[v];
      if (imageView !== v) {
        svg.setAttribute('aria-label', v === 'back' ? 'Posterior view. Select a muscle.' : 'Anterior view. Select a muscle.');
        img.setAttribute('href', new URL(v + '.webp', base).href); imageView = v;
      }
      if (plate && drawnView !== v) {
        const nodes = [];
        for (const [id, d] of Object.entries(plate.parts)) {
          const node = make('path', {d, role:'button', tabindex:'0', 'data-muscle':id,
            'aria-label':names[id], 'fill-rule':'evenodd', 'pointer-events':'visibleFill', 'stroke-linejoin':'round',
            'vector-effect':'non-scaling-stroke'});
          const title = make('title'); title.textContent = names[id]; node.append(title);
          node.style.cursor = 'pointer';
          node.addEventListener('pointerenter', e => { if(e.pointerType !== 'touch') callbacks.onPreview?.(id); });
          node.addEventListener('pointerleave', e => { if(e.pointerType !== 'touch') callbacks.onPreview?.(null); });
          node.addEventListener('focus', () => callbacks.onPreview?.(id));
          node.addEventListener('blur', () => callbacks.onPreview?.(null));
          node.addEventListener('click', () => callbacks.onSelect?.(id));
          node.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); callbacks.onSelect?.(id);} });
          nodes.push(node);
        }
        outlines.replaceChildren(...nodes); drawnView = v;
      }
      for (const node of outlines.children) {
        const id = node.dataset.muscle, active = id === state.selected;
        const color = state.primary?.includes(id) ? '#c15138' : state.secondary?.includes(id) ? '#b78325' : state.stabilizer?.includes(id) ? '#468982' : active ? '#c15138' : null;
        node.setAttribute('fill', color || 'transparent'); node.setAttribute('fill-opacity',color ? '.78' : 0);
        node.style.mixBlendMode = 'multiply';
        node.setAttribute('stroke',color || 'none'); node.setAttribute('stroke-width',active ? '.9' : '.4');
        node.setAttribute('aria-pressed',String(active));
      }
      const anchor = plate?.anchors[state.selected];
      marker.setAttribute('visibility',anchor?'visible':'hidden');
      if(anchor) marker.setAttribute('transform','translate('+anchor.join(' ')+')');
    }
    render();
    const ready = getGeometry().then(plates => {data=plates;render();return true;}).catch(() => {
      const notice = document.createElement('small');
      notice.textContent = 'The interactive outlines could not load. Choose a muscle from the index instead.';notice.style.cssText='position:absolute;bottom:0;inset-inline:0;text-align:center;color:#672c20;background:#fff9ed';
      container.append(notice);return false;
    });
    return {ready, update(next){ state = {...state, ...next}; render(); }};
  }
  window.MovementAtlas = {mount};
})();
