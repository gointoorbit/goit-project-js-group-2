const currentSubpage = window.location.pathname;

const nav = document.querySelectorAll('.navigation--header__link');
const navMobile = document.querySelectorAll('.navigation--mobile-menu__link');

if (currentSubpage === '/') {
  nav[0].classList.add('navigation__link--current');
  navMobile[0].classList.add('navigation__link--current');
} else {
  let linksPath = [];

  for (const link of nav) {
    linksPath.push(link.getAttribute('href'));
  }

  let linksPathMobile = [];

  for (const link of navMobile) {
    linksPathMobile.push(link.getAttribute('href'));
  }

  const currentIndex = linksPath.indexOf(currentSubpage);

  const currentIndexMobile = linksPathMobile.indexOf(currentSubpage);

  nav[currentIndex].classList.add('navigation__link--current');
  navMobile[currentIndexMobile].classList.add('navigation__link--current');
}
