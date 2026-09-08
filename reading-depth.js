/* Pointer-driven perspective only runs on desktop while the pointer moves. */
(() => {
    const scene = document.querySelector('.scene');
    if (!scene) return;
    const enabled = matchMedia('(min-width: 761px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let horizontal = 0;
    let vertical = 0;
    function paint() {
        frame = 0;
        scene.style.setProperty('--look-x', `${(horizontal * 1.3).toFixed(3)}deg`);
        scene.style.setProperty('--look-y', `${(-vertical * 1.1).toFixed(3)}deg`);
        scene.style.setProperty('--light-x', `${(22 + horizontal * 3).toFixed(2)}%`);
    }
    function reset() {
        cancelAnimationFrame(frame);
        frame = 0;
        horizontal = vertical = 0;
        paint();
    }
    scene.addEventListener('pointermove', event => {
        if (!enabled.matches || event.pointerType === 'touch' || document.body.classList.contains('modal-open')) return;
        horizontal = Math.max(-1, Math.min(1, event.clientX / innerWidth * 2 - 1));
        vertical = Math.max(-1, Math.min(1, event.clientY / innerHeight * 2 - 1));
        if (!frame) frame = requestAnimationFrame(paint);
    }, { passive: true });
    scene.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    window.addEventListener('pagehide', reset);
    document.addEventListener('visibilitychange', () => { if (document.hidden) reset(); });
    enabled.addEventListener('change', reset);
})();
