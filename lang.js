// Remembers the language picked with the EN / PL switch, so the next visit opens in it.
// English pages read it back in an inline script in <head>.
document.querySelectorAll('[data-lang]').forEach((link) => {
  link.addEventListener('click', () => {
    try {
      localStorage.setItem('lang', link.dataset.lang);
    } catch (e) {
      // Storage can be blocked; the link still works, it just isn't remembered.
    }
  });
});
