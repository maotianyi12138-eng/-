/* Locally rendered teaching plates. No WebGL, third-party runtime or remote media. */
(() => {
  'use strict';
  const mediaBase = new URL('motions/', document.currentScript.src);
  const labels = {
    bench: ['仰卧杠铃卧推', '推起 · 向心', '下放 · 离心'],
    pullup: ['正握引体向上', '上拉 · 向心', '下降 · 离心'],
    squat: ['杠铃背蹲', '下蹲 · 离心', '起身 · 向心'],
    rdl: ['罗马尼亚硬拉', '髋向后 · 离心', '伸髋 · 向心'],
    ohp: ['站姿杠铃推举', '推起 · 向心', '下放 · 离心'],
    row: ['俯身杠铃划船', '上拉 · 向心', '下放 · 离心']
  };
  const clamp = n => Math.max(0, Math.min(1, n));
  function mount(host, {onFrame = () => {}} = {}) {
    const wrap = document.createElement('div'), img = document.createElement('img'), canvas = document.createElement('canvas');
    wrap.style.cssText = 'position:relative;display:grid;width:100%;aspect-ratio:3/2;background:#242a2b;overflow:hidden';
    img.style.cssText = 'display:block;width:100%;height:100%;object-fit:contain';
    img.width=600; img.height=400; img.decoding='async';
    canvas.width=600;canvas.height=400;canvas.setAttribute('aria-hidden','true');
    canvas.style.cssText='position:absolute;inset:0;display:block;width:100%;height:100%;pointer-events:none;opacity:0';
    wrap.append(img,canvas); host.replaceChildren(wrap);
    const ctx=canvas.getContext('2d',{alpha:false});
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    let id='', manual=null, run=!reduced.matches, pos=0, sprite, raf=0, previous=0, disposed=false, visible=true, ticket=0;
    function phase(){return labels[id][pos<.5?1:2];}
    function paint(){
      if(!id || disposed) return;
      if(sprite && ctx){
        const t=(1-Math.cos(pos*2*Math.PI))*.5;
        const tile=Math.round(t*35), sx=(tile%6)*600, sy=Math.floor(tile/6)*400;
        ctx.drawImage(sprite,sx,sy,600,400,0,0,600,400);
        canvas.style.opacity='1';
      }
      onFrame(pos,phase());
    }
    function stop(){if(raf)cancelAnimationFrame(raf);raf=0;previous=0;}
    function schedule(){
      if(disposed||!id||!run||!sprite||!visible||document.hidden){stop();return;}
      if(!raf)raf=requestAnimationFrame(tick);
    }
    function tick(now){
      raf=0;if(previous)pos=(pos+Math.min(100,now-previous)/4200)%1;
      previous=now;paint();schedule();
    }
    const observer=typeof IntersectionObserver==='function' ? new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;schedule();}):null;
    observer?.observe(host);
    function onReduced(){if(manual===null)run=!reduced.matches;schedule();if(id)paint();}
    reduced.addEventListener?.('change',onReduced);document.addEventListener('visibilitychange',schedule);
    function select(key){
      if(!Object.hasOwn(labels,key)||disposed)return;
      if(key===id)return;
      stop();id=key;pos=0;sprite=null;const version=++ticket;
      canvas.style.opacity='0';img.alt=labels[key][0]+'，红色标记主要发力区域。';img.src=new URL(key+'-start.webp',mediaBase).href;
      const next=new Image();
      next.onload=()=>{if(version!==ticket||disposed)return;sprite=next;wrap.removeAttribute('data-error');paint();schedule();};
      next.onerror=()=>{if(version!==ticket||disposed)return;run=false;wrap.dataset.error='animation-unavailable';img.alt=labels[key][0]+'的起始姿势（动画资源未载入）';paint();};
      next.src=new URL(key+'.webp',mediaBase).href;paint();
    }
    const api={
      select,
      play(){if(disposed)return;manual=true;run=true;paint();schedule();},
      pause(){manual=false;run=false;stop();paint();},
      seek(v){if(!Number.isFinite(+v)||disposed)return;pos=clamp(+v);previous=0;paint();},
      get playing(){return run;},
      destroy(){disposed=true;ticket++;stop();observer?.disconnect();reduced.removeEventListener?.('change',onReduced);document.removeEventListener('visibilitychange',schedule);sprite=null;host.replaceChildren();}
    };
    // Defer initial callback until the caller has stored the controller.
    queueMicrotask(()=>{if(!id&&!disposed)select('bench');});return api;
  }
  window.MovementMotion={mount};
})();
