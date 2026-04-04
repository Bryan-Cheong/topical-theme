(function () {
    pagination(true);
})();

(function () {
    if (!document.body.classList.contains('post-template')) return;

    const cover = document.querySelector('.gh-cover');
    if (!cover) return;

    const image = cover.querySelector('.gh-cover-image');

    window.addEventListener('load', function () {
        cover.style.setProperty('--cover-height', image.clientWidth * image.naturalHeight / image.naturalWidth + 'px');
        cover.classList.remove('loading');
    });
})();

(function () {
    const menu = document.querySelector('.gh-head-menu');
    if (!menu) return;

    menu.addEventListener('click', function (e) {
        const a = e.target.closest('a');
        if (!a || !a.href) return;

        let url;
        try {
            url = new URL(a.getAttribute('href'), window.location.href);
        } catch {
            return;
        }

        if (url.origin !== window.location.origin) return;
        if (url.pathname !== window.location.pathname || !url.hash) return;

        document.body.classList.remove('is-head-open');
    });
})();
