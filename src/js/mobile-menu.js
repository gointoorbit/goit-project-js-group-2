import { updateBookCount } from './book-count.js';


const mobileMenu = document.querySelector('#mobile-menu');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-open');
  openMenuBtn.classList.toggle('hidden');
  closeMenuBtn.classList.toggle('hidden');
  if (mobileMenu.classList.contains('is-open')) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
  // book counting function
updateBookCount();
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

