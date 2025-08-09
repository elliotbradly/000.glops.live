// src/scripts/theme.js
(function() {
  // If a theme is stored in localStorage, use it.
  // Otherwise, default to dark mode.
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
})();
