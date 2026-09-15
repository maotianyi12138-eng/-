/* The scrolling portfolio shares the archive's existing routes and players. */
window.Portfolio = (() => {
    let dataPromise;
    let data;
    let renderId = 0;
    let revealObserver;
    let pendingAnchor = '';
    let pendingPhoto = '';
    let pendingWorks = null;
    let graphicDialog;
    let graphicTrigger;
    let graphicLanguage = 'en';
    let activeGraphic;
    let graphicCloseTimer;
    let graphicScrollY = 0;
    let previousScrollRestoration = 'auto';
    const e = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const load = () => dataPromise ||= Promise.all(['portfolio','graphic-projects','photo-assets'].map(name => fetch(`data/${name}.json?v=20260915-opera`).then(response => {
        if (!response.ok) throw new Error('作品暂时未能加载');
        return response.json();
    }))).then(([value,graphics,photos]) => {
        value.photoAssets=photos;
        value.graphics = graphics.map(p => ({...p, images:value.works['批判设计'].filter(src=>src.split('/').pop().startsWith(p.name)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}))}));
        return data = value;
    }).catch(error => { dataPromise = null; throw error; });
    const routeLink = (section, label, extra = '') => `<a href="?section=${section}" data-section="${section}" ${extra}>${label}</a>`;
    const image = (src, alt, eager = false) => `<img src="${e(src)}" alt="${e(alt)}" loading="${eager?'eager':'lazy'}" decoding="async" ${eager?'fetchpriority="high"':''}>`;
    const photoImage = (src,alt,eager=false) => {
        const p=data.photoAssets[src];
        return `<img src="${e(p?.thumb||src)}" data-original="${e(src)}" alt="${e(alt)}" width="${p?.width||900}" height="${p?.height||1200}" loading="${eager?'eager':'lazy'}" decoding="async">`;
    };
    function wirePhotoFallback(scope) {
        scope.querySelectorAll('img[data-original]').forEach(img=>img.addEventListener('error',()=>{
            if(!img.dataset.retried) {img.dataset.retried='true';img.src=img.dataset.original;}
            else {img.classList.add('photo-unavailable');img.alt='图片加载失败，点击重试';}
        }));
    }
    function photoStream(d) {
        // Homepage selection only; the full archive still includes every category.
        const pattern=['商业摄影','自媒体摄影','情绪摄影','自媒体摄影','商业摄影','商业摄影','自媒体摄影','商业摄影','自媒体摄影','商业摄影','情绪摄影','自媒体摄影'];
        const categories=[...pattern,...pattern];
        const counts={};
        const selected=categories.map(category=>{
            const index=counts[category]||0;
            counts[category]=index+1;
            const total=categories.filter(c=>c===category).length;
            return {category,src:d.photos[category][Math.floor(index*d.photos[category].length/total)]};
        });
        return `<div class="photo-stream" aria-label="摄影作品预览">${[0,1,2,3,4,5].map(col=>`<div class="photo-stream-column">${selected.filter((_,i)=>i%6===col).map(p=>`<a href="?section=photo&category=${encodeURIComponent(p.category)}" data-photo="${e(p.category)}" aria-label="查看${e(p.category)}">${photoImage(p.src,p.category)}${arrow}</a>`).join('')}</div>`).join('')}</div>`;
    }
    const arrow = '<span class="folio-arrow" aria-hidden="true">↗</span>';
    const sectionHead = (number,title,zh,link) => `<div class="folio-section-head"><h2><span class="folio-number">${number}</span>${title}<small>${zh}</small></h2>${link}</div>`;
    const footer = () => `<footer class="folio-footer"><span>Tianyi Mao <small>毛天艺</small></span><a href="#top" data-jump="top">Back to top ↑</a><small>© ${new Date().getFullYear()}</small></footer>`;
    function card(project, eager = false) {
        return `<a class="folio-card" href="?section=project&project=${encodeURIComponent(project.id)}" data-project="${e(project.id)}"><div class="folio-card-image">${image(project.images[0],project.title,eager)}${arrow}</div><div class="folio-card-caption"><h3>${e(project.title)}</h3><span>${e(project.category)} · ${e(project.year)}</span></div></a>`;
    }
    function graphicCard(name,src,index) {
        const project=data.graphics.find(p=>p.name===name);
        return `<a class="folio-card folio-graphic" href="?graphic=${encodeURIComponent(project.id)}#graphic" data-graphic="${e(name)}"><div class="folio-card-image">${image(src,name)}${arrow}</div><div class="folio-card-caption"><h3>${e(name)}</h3><span>Graphic / 批判设计</span></div></a>`;
    }
    function reveal() {
        revealObserver?.disconnect();
        if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('folio-visible');
            revealObserver.unobserve(entry.target);
        }), { threshold:0.05 });
        document.querySelectorAll('.folio-card').forEach(card => {
            // Only animate cards below the viewport; content stays visible without JS.
            if (card.getBoundingClientRect().top > innerHeight) {
                card.classList.add('folio-reveal');
                revealObserver.observe(card);
            }
        });
    }
    function activate() {
        document.body.classList.add('portfolio-page');
        document.body.style.backgroundImage = 'none';
    }
    function loading() {
        activate();
        app.innerHTML = '<div class="folio-shell folio-loading" role="status">Loading work…</div>';
    }
    function errorState(error, section) {
        if (sectionFromUrl() !== section) return;
        app.innerHTML = `<div class="folio-shell folio-loading"><p>${e(error.message)}</p><button type="button" data-retry="${section}">重新加载</button></div>`;
    }
    async function renderHome() {
        const id = ++renderId;
        loading();
        try {
            const d = await load();
            if (id !== renderId || sectionFromUrl() !== 'home') return;
            const graphicNames = ['健身工厂','离不了','新保龄运动','血液涅槃'];
            const featured = ['lysa','wander','monevo','straydog','slaace','gatelace','tailfed','kindred','bitwoo'].map(id => d.brands.find(p=>p.id===id)).filter(Boolean);
            app.innerHTML = `<div class="folio-shell" id="top">
                <section class="folio-hero" aria-labelledby="folio-title">
                    <h1 id="folio-title">Brand &amp; photography.<br>Graphic design<span class="folio-period">.</span></h1>
                </section>
                <section class="folio-section" id="brand" aria-label="品牌设计">
                    ${sectionHead('01','Brand design','品牌设计',routeLink('brand',`全部 ${d.brands.length} 个项目 ↗`))}
                    <div class="folio-grid folio-brand-preview">${featured.map((p,i)=>card(p,i<3)).join('')}</div>
                    <div class="folio-section-end">${routeLink('brand','Explore all brand projects <span aria-hidden="true">↗</span>','class="folio-outline"')}</div>
                </section>
                <section class="folio-section cinema-section" id="video" aria-label="视频作品">
                    ${sectionHead('02','Moving image','视频作品','<a href="?section=photo&category=video" data-photo="video">全部影像 ↗</a>')}
                    ${CinemaStage.markup(d.videos)}
                </section>
                <section class="folio-section" id="photography" aria-label="摄影作品">
                    ${sectionHead('03','Photography','摄影作品',routeLink('photo','完整摄影档案 ↗'))}
                    ${photoStream(d)}
                    <div class="folio-section-end">${routeLink('photo','点击访问完整摄影案例 <span aria-hidden="true">↗</span>','class="folio-outline"')}</div>
                </section>
                <section class="folio-section" id="graphic" aria-label="平面设计">
                    ${sectionHead('04','Graphic design','平面设计',routeLink('works','全部平面作品 ↗'))}
                    <div class="folio-grid">${graphicNames.map((name,i)=>graphicCard(name,`平面设计/批判设计/${name}1.png`,i)).join('')}</div>
                    <div class="folio-archive-links"><a href="?section=works" data-works-category="工作实践">工作实践 / Work practice</a><a href="?section=works" data-works-category="批判设计">批判设计 / Critical design</a><a href="?section=works" data-works-category="个人创意">个人创意 / Personal creation</a></div>
                </section>
                ${footer()}
            </div>`;
            reveal();
            wirePhotoFallback(app);
            CinemaStage.init(d.videos);
            const graphicId = new URL(location.href).searchParams.get('graphic');
            const target = pendingAnchor || decodeURIComponent(location.hash.slice(1)) || (graphicId ? 'graphic' : '');
            pendingAnchor = '';
            if (target) requestAnimationFrame(()=>{
                document.getElementById(target)?.scrollIntoView({behavior:'instant',block:'start'});
                if (graphicId) openGraphic(graphicId, false);
            });
        } catch(error) { errorState(error,'home'); }
    }
    async function renderBrands() {
        const id=++renderId;
        loading();
        try {
            const d=await load();
            if (id!==renderId || sectionFromUrl()!=='brand') return;
            app.innerHTML=`<div class="folio-shell" id="top"><header class="folio-collection-head"><a href="?section=home#brand" data-jump="brand">← Selected work</a><h1>Brand design<span class="folio-period">.</span></h1><p>品牌、包装与数字视觉 <span>${d.brands.length} PROJECTS</span></p></header><div class="folio-grid folio-brand-collection">${d.brands.map((p,i)=>card(p,i<2)).join('')}</div>${footer()}</div>`;
            reveal();
        } catch(error) { errorState(error,'brand'); }
    }
    async function renderProject() {
        const id=++renderId;
        const projectId=new URL(location.href).searchParams.get('project');
        loading();
        try {
            const d=await load();
            if (id!==renderId || sectionFromUrl()!=='project') return;
            const p=d.brands.find(p=>p.id===projectId);
            if (!p) {app.innerHTML=`<div class="folio-shell folio-loading"><p>没有找到这个项目</p>${routeLink('brand','返回品牌作品')}</div>`;return;}
            const next=d.brands[(d.brands.indexOf(p)+1)%d.brands.length];
            app.innerHTML=`<article class="folio-shell" id="top"><header class="folio-project-head">${routeLink('brand','← All brand projects')}<h1>${e(p.title)}</h1><div class="folio-project-meta"><span>${e(p.category)}</span><time>${e(p.year)}</time>${p.description?`<p>${e(p.description)}</p>`:''}</div></header><div class="folio-project-images">${p.images.map((src,i)=>`<button type="button" data-project-image="${i}" data-image-project="${e(p.id)}" aria-label="放大 ${e(p.title)} 第 ${i+1} 张作品">${image(src,`${p.title} — ${i+1}`,i===0)}<span>${String(i+1).padStart(2,'0')} / ${String(p.images.length).padStart(2,'0')} <span aria-hidden="true">↗</span></span></button>`).join('')}</div><a class="folio-next" href="?section=project&project=${e(next.id)}" data-project="${e(next.id)}"><small>NEXT PROJECT</small><span>${e(next.title)} ↗</span></a>${footer()}</article>`;
        } catch(error) { errorState(error,'project'); }
    }
    function go(section) {
        document.getElementById('folio-more')?.removeAttribute('open');
        switchPage(section);
    }
    function jump(target) {
        document.getElementById('folio-more')?.removeAttribute('open');
        if (target === 'top') { window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}); return; }
        if (sectionFromUrl() !== 'home') { pendingAnchor=target; go('home'); }
        else document.getElementById(target)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
    }
    function openProject(id) {
        const url=new URL(location.href);
        url.searchParams.set('section','project');url.searchParams.set('project',id);url.hash='';
        history.pushState({page:'project'},'',url);
        switchPage('project',{updateHistory:false});
    }
    function graphicCopy(p) {
        const zh=graphicLanguage==='zh';
        return `<h1 id="graphic-title">${e(zh?p.name:p.title)}</h1><p class="graphic-subtitle">${e(zh?p.title:p.name)}</p><p class="graphic-summary">${e(p.summary)}</p><dl class="graphic-meta"><div><dt>Discipline</dt><dd>Graphic / Critical design</dd></div><div><dt>Format</dt><dd>${e(p.format)}</dd></div></dl>${p.sections.map(s=>`<section><h2>${e(zh?s.zhTitle:s.title)}</h2><p>${e(zh?s.zh:s.text)}</p></section>`).join('')}${p.thanks?`<section class="graphic-thanks"><h2>${zh?'致谢':'Acknowledgements'}</h2><p>${e(p.thanks[graphicLanguage])}</p></section>`:''}`;
    }
    function openGraphic(idOrName, push = true) {
        const p=data?.graphics.find(p=>p.id===idOrName || p.name===idOrName);
        if (!p) return false;
        clearTimeout(graphicCloseTimer);
        if (!graphicDialog?.open) {
            graphicTrigger=document.activeElement;
            graphicScrollY=window.scrollY;
            previousScrollRestoration=history.scrollRestoration;
            history.scrollRestoration='manual';
        }
        activeGraphic=p;
        if (!graphicDialog) {
            graphicDialog=document.createElement('dialog');
            graphicDialog.id='graphic-dialog';
            graphicDialog.className='graphic-dialog';
            graphicDialog.setAttribute('aria-labelledby','graphic-title');
            document.body.append(graphicDialog);
            graphicDialog.addEventListener('cancel',event=>{event.preventDefault();closeGraphic();});
            graphicDialog.addEventListener('click',event=>{if(event.target===graphicDialog)closeGraphic();});
        }
        graphicDialog.classList.remove('is-closing');
        graphicDialog.innerHTML=`<div class="graphic-sheet"><button type="button" class="graphic-close" data-close-graphic aria-label="关闭项目">×</button><div class="graphic-layout"><div class="graphic-images">${p.images.map((src,i)=>`<button type="button" data-graphic-image="${i}" aria-label="放大 ${e(p.name)} 第 ${i+1} 张">${image(src,`${p.name} — ${i+1}`,i===0)}</button>`).join('')}</div><aside class="graphic-info"><div class="graphic-language" aria-label="简介语言"><button type="button" data-graphic-language="en" aria-pressed="${graphicLanguage==='en'}">EN</button><button type="button" data-graphic-language="zh" aria-pressed="${graphicLanguage==='zh'}">中文</button></div><div id="graphic-copy">${graphicCopy(p)}</div></aside></div><a class="graphic-next" data-graphic="${e(data.graphics[(data.graphics.indexOf(p)+1)%data.graphics.length].name)}" href="?graphic=${e(data.graphics[(data.graphics.indexOf(p)+1)%data.graphics.length].id)}">Next project <span>${e(data.graphics[(data.graphics.indexOf(p)+1)%data.graphics.length].name)} ↗</span></a></div>`;
        if(push) {
            const url=new URL(location.href);url.searchParams.set('graphic',p.id);
            // Next project replaces the current panel so Close always returns to the archive.
            history[graphicDialog.open?'replaceState':'pushState']({page:sectionFromUrl(),graphicPanel:true},'',url);
        }
        document.body.classList.add('graphic-open');
        if (!graphicDialog.open) graphicDialog.showModal();
        graphicDialog.scrollTop=0;
        graphicDialog.querySelector('.graphic-close').focus({preventScroll:true});
        return true;
    }
    function dismissGraphic(immediate = true) {
        if (!graphicDialog?.open) return;
        const finish=()=>{
            graphicDialog.close();graphicDialog.classList.remove('is-closing');
            document.body.classList.remove('graphic-open');
            if(graphicTrigger?.isConnected)graphicTrigger.focus({preventScroll:true});
            window.scrollTo({top:graphicScrollY,behavior:'instant'});
            history.scrollRestoration=previousScrollRestoration;
        };
        clearTimeout(graphicCloseTimer);
        if(immediate || matchMedia('(prefers-reduced-motion: reduce)').matches) finish();
        else {graphicDialog.classList.add('is-closing');graphicCloseTimer=setTimeout(finish,280);}
    }
    function closeGraphic() {
        if(history.state?.graphicPanel) history.back();
        else {
            const url=new URL(location.href);url.searchParams.delete('graphic');history.replaceState({page:sectionFromUrl()},'',url);
            dismissGraphic(false);
        }
    }
    function syncGraphicHistory() {
        if (document.body.dataset.section!==sectionFromUrl()) return false;
        const id=new URL(location.href).searchParams.get('graphic');
        if(id) return openGraphic(id,false);
        if(graphicDialog?.open) {dismissGraphic(false);return true;}
        return false;
    }
    function graphicZoom(index) {
        const zoom=document.createElement('dialog');zoom.className='graphic-zoom';zoom.setAttribute('aria-label','放大作品');
        let current=index;
        const render=()=>{zoom.querySelector('img').src=activeGraphic.images[current];zoom.querySelector('img').alt=`${activeGraphic.name} — ${current+1}`;zoom.querySelector('output').textContent=`${current+1} / ${activeGraphic.images.length}`;};
        zoom.innerHTML='<button type="button" class="zoom-close" aria-label="关闭大图">×</button><button type="button" class="zoom-prev" aria-label="上一张">‹</button><img alt=""><button type="button" class="zoom-next" aria-label="下一张">›</button><output></output>';
        zoom.querySelector('.zoom-close').onclick=()=>zoom.close();
        const change=delta=>{current=(current+delta+activeGraphic.images.length)%activeGraphic.images.length;render();};
        zoom.querySelector('.zoom-prev').onclick=()=>change(-1);zoom.querySelector('.zoom-next').onclick=()=>change(1);
        zoom.addEventListener('keydown',event=>{event.stopPropagation();if(event.key==='ArrowRight')change(1);if(event.key==='ArrowLeft')change(-1);});
        zoom.addEventListener('close',()=>zoom.remove());
        let start=0;zoom.addEventListener('touchstart',ev=>{start=ev.changedTouches[0].screenX;},{passive:true});zoom.addEventListener('touchend',ev=>{const delta=ev.changedTouches[0].screenX-start;if(Math.abs(delta)>50)change(delta<0?1:-1);},{passive:true});
        document.body.append(zoom);render();zoom.showModal();
    }
    function viewImages(projectId,index) {
        const p=data?.brands.find(p=>p.id===projectId);if(!p)return;
        currentImgList=p.images;currentIndex=index;updateViewer();
        document.getElementById('viewer').style.display='flex';
        document.querySelector('#viewer button').focus();
    }
    async function renderPhotoFiles(category,area) {
        const d=await load();
        if(!area.isConnected || area.dataset.category!==category) return;
        if(category==='video') {
            area.className='folio-video-grid';
            area.innerHTML=d.videos.map(v=>`<figure><video controls playsinline preload="metadata" aria-label="${e(v.title)}"><source src="${e(v.src)}" type="video/mp4"></video><figcaption>${e(v.title)}</figcaption><a href="${e(v.src)}" target="_blank" rel="noopener">单独打开 ↗</a></figure>`).join('');
            area.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>{
                area.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();});
                audio.pause();updateMusicIcon();
            }));
        } else {
            area.className='tight-photo-grid';
            area.innerHTML=(d.photos[category]||[]).map((src,i)=>`<button class="photo-item" type="button" data-photo-image="${e(src)}" aria-label="放大${e(category)}作品">${photoImage(src,category,i<12)}</button>`).join('');
            wirePhotoFallback(area);
        }
    }
    document.addEventListener('click',event=>{
        const link=event.target.closest('a[data-section],[data-jump],[data-project],[data-graphic],[data-works-category],[data-photo],[data-project-image],[data-photo-image],[data-retry],[data-close-graphic],[data-graphic-language],[data-graphic-image]');
        if(link && !event.metaKey && !event.ctrlKey && !event.shiftKey && event.button===0) {
            event.preventDefault();
            if(link.hasAttribute('data-section')) go(link.dataset.section);
            else if(link.hasAttribute('data-jump')) jump(link.dataset.jump);
            else if(link.hasAttribute('data-project')) openProject(link.dataset.project);
            else if(link.hasAttribute('data-graphic')) openGraphic(link.dataset.graphic);
            else if(link.hasAttribute('data-close-graphic')) closeGraphic();
            else if(link.hasAttribute('data-graphic-language')) {
                graphicLanguage=link.dataset.graphicLanguage;
                graphicDialog.querySelector('#graphic-copy').innerHTML=graphicCopy(activeGraphic);
                graphicDialog.querySelectorAll('[data-graphic-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.graphicLanguage===graphicLanguage)));
            }
            else if(link.hasAttribute('data-graphic-image')) graphicZoom(Number(link.dataset.graphicImage));
            else if(link.hasAttribute('data-works-category')) {pendingWorks={category:link.dataset.worksCategory};go('works');}
            else if(link.hasAttribute('data-photo')) {pendingPhoto=link.dataset.photo;go('photo');}
            else if(link.hasAttribute('data-project-image')) viewImages(link.dataset.imageProject,Number(link.dataset.projectImage));
            else if(link.hasAttribute('data-photo-image')) {
                const img=link.querySelector('img');
                if(img?.classList.contains('photo-unavailable')) {img.classList.remove('photo-unavailable');img.src=img.dataset.original+'?retry='+Date.now();}
                else {currentImgList=data.photos[link.closest('[data-category]').dataset.category];currentIndex=currentImgList.indexOf(link.dataset.photoImage);updateViewer();document.getElementById('viewer').style.display='flex';}
            }
            else if(link.hasAttribute('data-retry')) switchPage(link.dataset.retry,{updateHistory:false});
        }
        if(!event.target.closest('#folio-more')) document.getElementById('folio-more')?.removeAttribute('open');
    });
    document.addEventListener('keydown',event=>{
        if(graphicDialog?.open) return;
        if(event.key==='Escape') {document.getElementById('folio-more')?.removeAttribute('open');closeViewer();}
        if(document.getElementById('viewer')?.style.display==='flex') {
            if(event.key==='ArrowRight') nextImg();
            if(event.key==='ArrowLeft') prevImg();
        }
    });
    return {load,renderHome,renderBrands,renderProject,renderPhotoFiles,go,jump,openGraphicByName:openGraphic,dismissGraphic,syncGraphicHistory,takePhotoCategory(){const category=pendingPhoto||new URL(location.href).searchParams.get('category')||'商业摄影';pendingPhoto='';return category;},takeWorksCategory(){const target=pendingWorks||{category:'工作实践'};pendingWorks=null;return target;}};
})();
