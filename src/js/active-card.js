const logo = document.querySelector('header__logo-link');
const brandName = document.querySelector('.header__brand-name-link');
const home = document.querySelector('navigation__link-home');
const shoppingList = document.querySelector('navigation__link-shopping-list');

console.log(window.location.pathname);
console.log(window.location.href);
let pathToCompare;
const currentSubpage = window.location.pathname;
const currentPath = currentSubpage => {
  const pathArray = currentSubpage.split('');
  pathArray.unshift('.');
  pathToCompare = pathArray.join('');
  console.log(pathToCompare);
  return pathToCompare;
};
currentPath(currentSubpage);
console.log(pathToCompare);
const nav = document.querySelectorAll('.navigation__link');
console.log(nav);

const linksPath = nav => {
  nav.map(link => link.href);
};
console.log(linksPath);

const all = document.querySelector('nav a');
console.log(all);
console.log(all.href);
