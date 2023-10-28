const currentSubpage = window.location.pathname;

const nav = document.querySelectorAll('.navigation--header__link');
const navMobile = document.querySelectorAll('.navigation--mobile-menu__link');

let linksPath = [];

for (const link of nav) {
  linksPath.push(link.getAttribute('href'));
}

let linksPathMobile = [];

for (const link of navMobile) {
  linksPathMobile.push(link.getAttribute('href'));
}

console.log(linksPath);

const currentIndex = linksPath.indexOf(currentSubpage);
console.log(currentIndex);

const currentIndexMobile = linksPathMobile.indexOf(currentSubpage);

nav[currentIndex].classList.add('navigation__link--current');
navMobile[currentIndexMobile].classList.add('navigation__link--current');
