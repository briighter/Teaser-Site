/* Intersection Observer scroll reveals */
(function () {
  if (!('IntersectionObserver' in window)) {
    /* Fallback: show everything immediately */
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -32px 0px'
    }
  );

  /* Observe all .reveal elements */
  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  /* Stagger children of .reveal-stagger */
  document.querySelectorAll('.reveal-stagger > *').forEach(function (child) {
    child.classList.add('reveal');
    observer.observe(child);
  });
})();
