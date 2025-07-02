const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

function closeMenu() {
  burger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('active');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

// Открыть меню
burger.addEventListener('click', () => {
  const isExpanded = burger.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    closeMenu();
  } else {
    burger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('active');
    mobileMenu.setAttribute('aria-hidden', 'false');
  }
});

// Закрыть меню крестиком
closeBtn.addEventListener('click', closeMenu);

// Закрыть меню при клике на ссылку
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});