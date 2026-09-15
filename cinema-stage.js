/* Scroll-operated curtains and one shared player for the complete film selection. */
window.CinemaStage = (() => {
    let state;
    const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const clamp=n=>Math.max(0,Math.min(1,n));
    function markup(videos) {
        return `<div class="cinema-track"><div class="cinema-sticky"><div class="cinema-arch" style="--curtain-open:0">
            <div class="cinema-lights" aria-hidden="true"></div><div class="cinema-floor" aria-hidden="true"></div>
            <div class="cinema-screen"><video id="stage-player" muted playsinline controls preload="none" poster="${esc(videos[0].poster||'')}" aria-label="视频舞台"></video><div class="cinema-feedback" role="status">向下滚动，幕布开启</div><button class="cinema-start" type="button" hidden>播放影片</button></div>
            <div class="curtain curtain-left" aria-hidden="true"></div><div class="curtain curtain-right" aria-hidden="true"></div>
            <button type="button" class="curtain-invite">Enter cinema <span>↓</span></button>
            </div><div class="cinema-caption"><div><small>NOW SHOWING</small><span id="stage-title">${esc(videos[0].title)}</span></div><button type="button" class="cinema-sound" aria-pressed="false">开启声音</button></div>
            <div class="cinema-reels" aria-label="选择视频">${videos.map((v,i)=>`<button type="button" class="cinema-reel" data-reel="${i}" aria-pressed="${i===0}" aria-label="播放 ${esc(v.title)}"><span class="cinema-reel-window"><img src="${esc(v.poster||'')}" loading="lazy" decoding="async" width="480" height="270" alt=""><b>${String(i+1).padStart(2,'0')}</b></span><span>${esc(v.title)}</span></button>`).join('')}</div>
            <p class="cinema-scroll-note">Scroll to open · Scroll back to close</p></div></div>`;
    }
    function init(videos) {
        destroy();
        const track=document.querySelector('.cinema-track');if(!track)return;
        const controller=new AbortController();
        const s=state={track,player:track.querySelector('#stage-player'),arch:track.querySelector('.cinema-arch'),videos,index:0,active:false,loaded:false,lastY:scrollY,direction:1,progress:0,frame:0,controller,manualPause:false,switching:false};
        const on=(el,event,handler)=>el.addEventListener(event,handler,{signal:controller.signal});
        const feedback=track.querySelector('.cinema-feedback');
        const start=track.querySelector('.cinema-start');
        function message(text) {feedback.textContent=text;feedback.hidden=!text;}
        function prepare() {
            if(s.loaded)return;
            s.loaded=true;s.player.preload='auto';s.player.src=videos[s.index].src;
            s.player.poster=videos[s.index].poster||'';s.player.load();
        }
        function play() {
            prepare();
            if(s.manualPause)return;
            const promise=s.player.play();
            if(promise)promise.catch(()=>{if(s.active){start.hidden=false;message('点击播放影片');}});
        }
        function open(progress) {
            s.progress=progress;s.arch.style.setProperty('--curtain-open',String(progress));
            s.arch.classList.toggle('curtains-open',progress>.7);
            const active=progress>.7 && !document.hidden;
            if(active===s.active)return;
            s.active=active;
            if(active)play();
            else s.player.pause();
        }
        s.open=open;
        function tick() {
            s.frame=0;
            const rect=track.getBoundingClientRect();
            const dy=scrollY-s.lastY;s.lastY=scrollY;
            if(Math.abs(dy)>3)s.direction=Math.sign(dy);
            const inside=rect.top<innerHeight*.7 && rect.bottom>innerHeight*.3;
            const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
            if(!inside)open(0);
            else if(reduced)open(1);
            else if(dy < -3)open(Math.max(0,s.progress+dy/(innerHeight*.24)));
            else if(s.direction>0)open(clamp((innerHeight*.75-rect.top)/(innerHeight*.5)));
            const stream=document.querySelector('.photo-stream');
            if(stream && !reduced){const r=stream.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)stream.style.setProperty('--photo-shift',`${Math.max(-50,Math.min(50,(innerHeight/2-r.top)*.08))}px`);}
        }
        const schedule=()=>{if(!s.frame)s.frame=requestAnimationFrame(tick);};
        on(window,'scroll',schedule);on(window,'resize',schedule);
        on(document,'visibilitychange',()=>{if(document.hidden){s.player.pause();}else if(s.active&&!s.manualPause)play();});
        on(s.player,'waiting',()=>message('正在加载影片…'));
        on(s.player,'loadstart',()=>{if(s.active)message('正在加载影片…');});
        on(s.player,'playing',()=>{s.switching=false;message('');start.hidden=true;});
        on(s.player,'error',()=>{message('影片暂时无法加载，请重试或选择下方影片');start.textContent='重试播放';start.hidden=false;});
        on(s.player,'pause',()=>{if(s.active && s.progress>.7 && !s.switching && !document.hidden && s.player.paused && !s.player.ended)s.manualPause=true;});
        on(s.player,'play',()=>{s.manualPause=false;});
        on(s.player,'ended',()=>select((s.index+1)%videos.length,true));
        on(start,'click',()=>{s.manualPause=false;if(s.player.error){s.loaded=false;s.player.load();}play();});
        on(track.querySelector('.curtain-invite'),'click',()=>{s.manualPause=false;open(1);});
        on(track.querySelector('.cinema-sound'),'click',()=>{
            s.player.muted=!s.player.muted;
            updateSound();
        });
        function updateSound(){const button=track.querySelector('.cinema-sound');button.textContent=s.player.muted?'开启声音':'静音';button.setAttribute('aria-pressed',String(!s.player.muted));}
        on(s.player,'volumechange',updateSound);
        function select(index,user=false) {
            s.switching=true;s.index=index;s.loaded=false;s.manualPause=false;s.player.pause();
            track.querySelector('#stage-title').textContent=videos[index].title;
            s.player.setAttribute('aria-label',videos[index].title);
            track.querySelectorAll('[data-reel]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.reel)===index)));
            if(user){open(1);if(s.active)play();}
        }
        on(track.querySelector('.cinema-reels'),'click',event=>{const button=event.target.closest('[data-reel]');if(button)select(Number(button.dataset.reel),true);});
        // Buffer just the selected film before the curtain enters view. Thumbnails
        // are still images, so nine competing video downloads are never started.
        const observer=new IntersectionObserver(entries=>{
            if(entries.some(entry=>entry.isIntersecting)){prepare();observer.disconnect();}
        },{rootMargin:'600px'});
        observer.observe(s.arch);s.observer=observer;
        tick();
    }
    function destroy(){
        if(!state)return;
        const s=state;state=null;s.controller.abort();s.observer?.disconnect();cancelAnimationFrame(s.frame);s.player.pause();s.player.removeAttribute('src');s.player.load();
    }
    return {markup,init,destroy};
})();
