(function () {
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
