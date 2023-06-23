let header = document.querySelector('.header');
let body = document.querySelector('body');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 180);
});