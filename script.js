const menuToggle = document.querySelector('.menu-toggle');
const navWrap = document.querySelector('.nav-wrap');

if (menuToggle && navWrap) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navWrap.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
