/* The scrolling portfolio shares the archive's existing routes and players. */
window.Portfolio = (() => {
    let dataPromise;
    let data;
    let renderId = 0;
    let revealObserver;
    let pendingAnchor = '';
    let pendingPhoto = '';
    let pendingWorks = null;
    const e = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const load = () => dataPromise ||= fetch('data/portfolio.json?v=20260914').then(response => {
        if (!response.ok) throw new Error('作品暂时未能加载');
        return response.json();
    }).then(value => data = value).catch(error => { dataPromise = null; throw error; });
    const routeLink = (section, label, extra = '') => `<a href="?section=${section}" data-section="${section}" ${extra}>${label}</a>`;
    const image = (src, alt, eager = false) => `<img src="${e(src)}" alt="${e(alt)}" loading="${eager?'eager':'lazy'}" decoding="async" ${eager?'fetchpriority="high"':''}>`;
    const arrow = '<span class="folio-arrow" aria-hidden="true">↗</span>';
    const sectionHead = (number,title,zh,link) => `<div class="folio-section-head"><h2><span class="folio-number">${number}</span>${title}<small>${zh}</small></h2>${link}</div>`;
    const footer = () => `<footer class="folio-footer"><span>Tianyi Mao <small>毛天艺</small></span><a href="#top" data-jump="top">Back to top ↑</a><small>© ${new Date().getFullYear()}</small></footer>`;
    function card(project, eager = false) {
        return `<a class="folio-card" href="?section=project&project=${encodeURIComponent(project.id)}" data-project="${e(project.id)}"><div class="folio-card-image">${image(project.images[0],project.title,eager)}${arrow}</div><div class="folio-card-caption"><h3>${e(project.title)}</h3><span>${e(project.category)} · ${e(project.year)}</span></div></a>`;
    }
    function graphicCard(name,src,index) {
        return `<a class="folio-card folio-graphic" href="?section=works" data-graphic="${e(name)}"><div class="folio-card-image">${image(src,name,index===0)}${arrow}</div><div class="folio-card-caption"><h3>${e(name)}</h3><span>Graphic / 批判设计</span></div></a>`;
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
            const featured = ['lysa','wander','monevo','straydog','nike-x-alpinestars','slaace','gatelace','tailfed'].map(id => d.brands.find(p=>p.id===id)).filter(Boolean);
            const photoCategories = ['商业摄影','模特','情绪摄影','自媒体摄影'];
            app.innerHTML = `<div class="folio-shell" id="top">
                <section class="folio-hero" aria-labelledby="folio-title">
                    <div class="folio-eyebrow">TIANYI MAO <span>毛天艺 · 作品集</span></div>
                    <h1 id="folio-title">Graphic design.<br>Brand &amp; photography<span class="folio-period">.</span></h1>
                    <div class="folio-hero-bottom"><p>平面设计、品牌视觉与摄影作品。</p><a class="folio-primary" href="#graphic" data-jump="graphic">View work <span aria-hidden="true">↓</span></a></div>
                </section>
                <nav class="folio-index" aria-label="作品类别"><a href="#graphic" data-jump="graphic"><span>01</span> Graphic design</a><a href="#brand" data-jump="brand"><span>02</span> Brand design</a><a href="#photography" data-jump="photography"><span>03</span> Photography</a></nav>
                <section class="folio-section" id="graphic" aria-label="平面设计">
                    ${sectionHead('01','Graphic design','平面设计',routeLink('works','全部平面作品 ↗'))}
                    <div class="folio-grid">${graphicNames.map((name,i)=>graphicCard(name,`平面设计/批判设计/${name}1.png`,i)).join('')}</div>
                    <div class="folio-archive-links"><a href="?section=works" data-works-category="工作实践">工作实践 / Work practice</a><a href="?section=works" data-works-category="批判设计">批判设计 / Critical design</a><a href="?section=works" data-works-category="个人创意">个人创意 / Personal creation</a></div>
                </section>
                <section class="folio-section" id="brand" aria-label="品牌设计">
                    ${sectionHead('02','Brand design','品牌设计',routeLink('brand',`全部 ${d.brands.length} 个项目 ↗`))}
                    <div class="folio-grid">${featured.map(p=>card(p)).join('')}</div>
                    <div class="folio-section-end">${routeLink('brand','Explore all brand projects <span aria-hidden="true">↗</span>','class="folio-outline"')}</div>
                </section>
                <section class="folio-section" id="photography" aria-label="摄影作品">
                    ${sectionHead('03','Photography','摄影作品',routeLink('photo','完整摄影档案 ↗'))}
                    <div class="folio-grid folio-photo-grid">${photoCategories.map((name,i)=>`<a class="folio-card" href="?section=photo" data-photo="${e(name)}"><div class="folio-card-image">${image(d.photos[name][0],name)}${arrow}</div><div class="folio-card-caption"><h3>${['Commercial','Portrait','Mood','Social'][i]}</h3><span>${e(name)} · ${d.photos[name].length} 张</span></div></a>`).join('')}</div>
                    <div class="folio-film-link"><span>Moving image <small>视听影像</small></span><a href="?section=photo" data-photo="video">浏览全部 ${d.videos.length} 段影像 ↗</a></div>
                </section>
                ${footer()}
            </div>`;
            reveal();
            const target = pendingAnchor || decodeURIComponent(location.hash.slice(1));
            pendingAnchor = '';
            if (target) requestAnimationFrame(()=>document.getElementById(target)?.scrollIntoView({behavior:'instant',block:'start'}));
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
    function openGraphic(name) {
        pendingWorks = {category:'批判设计',project:name};
        go('works');
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
            area.innerHTML=(d.photos[category]||[]).map(src=>`<button class="photo-item" type="button" data-photo-image="${e(src)}" aria-label="放大${e(category)}作品">${image(src,category)}</button>`).join('');
        }
    }
    document.addEventListener('click',event=>{
        const link=event.target.closest('[data-section],[data-jump],[data-project],[data-graphic],[data-works-category],[data-photo],[data-project-image],[data-photo-image],[data-retry]');
        if(link && !event.metaKey && !event.ctrlKey && !event.shiftKey && event.button===0) {
            event.preventDefault();
            if(link.hasAttribute('data-section')) go(link.dataset.section);
            else if(link.hasAttribute('data-jump')) jump(link.dataset.jump);
            else if(link.hasAttribute('data-project')) openProject(link.dataset.project);
            else if(link.hasAttribute('data-graphic')) openGraphic(link.dataset.graphic);
            else if(link.hasAttribute('data-works-category')) {pendingWorks={category:link.dataset.worksCategory};go('works');}
            else if(link.hasAttribute('data-photo')) {pendingPhoto=link.dataset.photo;go('photo');}
            else if(link.hasAttribute('data-project-image')) viewImages(link.dataset.imageProject,Number(link.dataset.projectImage));
            else if(link.hasAttribute('data-photo-image')) openViewerSingle(link.dataset.photoImage);
            else if(link.hasAttribute('data-retry')) switchPage(link.dataset.retry,{updateHistory:false});
        }
        if(!event.target.closest('#folio-more')) document.getElementById('folio-more')?.removeAttribute('open');
    });
    document.addEventListener('keydown',event=>{
        if(event.key==='Escape') {document.getElementById('folio-more')?.removeAttribute('open');closeViewer();}
        if(document.getElementById('viewer')?.style.display==='flex') {
            if(event.key==='ArrowRight') nextImg();
            if(event.key==='ArrowLeft') prevImg();
        }
    });
    return {load,renderHome,renderBrands,renderProject,renderPhotoFiles,go,jump,takePhotoCategory(){const category=pendingPhoto||'商业摄影';pendingPhoto='';return category;},takeWorksCategory(){const target=pendingWorks||{category:'工作实践'};pendingWorks=null;return target;}};
})();
