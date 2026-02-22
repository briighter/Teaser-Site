/* Navigation scroll behavior */
(function () {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 48) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mark active nav link based on current page */
  var links = document.querySelectorAll('.nav-links a');
  var path = window.location.pathname;

  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && (path.endsWith(href) || (path === '/' && href === '/') || (path.endsWith('/index.html') && href === '/'))) {
      link.classList.add('active');
    }
  });
})();
