document.addEventListener('DOMContentLoaded', function () {
  var carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach(function (root) {
    var track = root.querySelector('.carousel-track');
    var slides = Array.from(root.querySelectorAll('.carousel-slide'));
    var prev = root.querySelector('.carousel-prev');
    var next = root.querySelector('.carousel-next');
    var dotsWrap = root.querySelector('.carousel-dots');
    if (!track || slides.length === 0) return;

    var current = 0;

    function update() {
      track.style.transform = 'translateX(' + (-current * 100) + '%)';
      Array.from(dotsWrap.children).forEach(function (b, i) {
        b.setAttribute('aria-selected', i === current ? 'true' : 'false');
        b.setAttribute('tabindex', i === current ? '0' : '-1');
      });
    }

    // build dots
    slides.forEach(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'carousel-dot';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      b.addEventListener('click', function () { current = i; update(); });
      dotsWrap.appendChild(b);
    });

    prev.addEventListener('click', function () { current = (current - 1 + slides.length) % slides.length; update(); });
    next.addEventListener('click', function () { current = (current + 1) % slides.length; update(); });

    // keyboard support
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { prev.click(); }
      if (e.key === 'ArrowRight') { next.click(); }
    });

    // simple swipe support
    var startX = null;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; });
    track.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (dx > 40) { prev.click(); }
      else if (dx < -40) { next.click(); }
      startX = null;
    });

    // expose go-to via dots already created
    update();
  });
});
