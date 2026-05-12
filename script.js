window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.style.background = 'rgba(5, 8, 22, 0.98)';
  } else {
    header.style.background = 'rgba(5, 8, 22, 0.9)';
  }
});
