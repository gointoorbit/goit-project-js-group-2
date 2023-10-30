import support1 from '/src/images/images-support/support1.svg';
import support2 from '/src/images/images-support/support2.svg';
import support3 from '/src/images/images-support/support3.svg';
import support4 from '/src/images/images-support/support4.svg';
import support5 from '/src/images/images-support/support5.svg';
import support6 from '/src/images/images-support/support6.svg';
import support7 from '/src/images/images-support/support7.svg';
import support8 from '/src/images/images-support/support8.svg';
import support9 from '/src/images/images-support/support9.svg';

const supportArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: support1,
    id: 1,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: support2,
    id: 2,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: support3,
    id: 3,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: support4,
    id: 4,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: support5,
    id: 5,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: support6,
    id: 6,
  },
  {
    title: 'Medecins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: support7,
    id: 7,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: support8,
    id: 8,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: support9,
    id: 9,
  },
];

const supportList = document.querySelector('.js-support');
const markup = createImageCardMarkup(supportArray);

supportList.insertAdjacentHTML('beforeend', markup);

function createImageCardMarkup(supportArray) {
  return supportArray
    .map(({ title, url, img, id }) => {
      return `<li class="support__link js-support">
          <a class="js-target" href="${url}" target="_blank" id="${id}">

            <span class="support__number">
            <img class="support__img"
            src="${img}" alt="${title}" /></span>
          </a>
        </li>`;
    })
    .join('');
}

let position = 0;
let slidesToShow = 5;
let slidesToScroll = 1;

const list = document.querySelector('.support__list');
const sliderButton = document.querySelector('.slider__button');
const itemsSupport = document.querySelectorAll('.support__link');
let itemsCount = itemsSupport.length;
const sliderItemHeight = 31;
const movePosition = slidesToShow * sliderItemHeight;

itemsSupport.forEach(item => {
  item.style.minHeight = `${sliderItemHeight}px`;
});

sliderButton.addEventListener('click', () => {
  const itemsBottom = getItemsBottom();

  if (itemsBottom >= slidesToScroll + 1) {
    position -= movePosition;
    sliderButton.classList.add('rotate');
  } else {
    position = 0;
    sliderButton.classList.remove('rotate');
  }
  list.style.transition = 'transform 0.3s ease-out';
  setPosition();

  setTimeout(() => {
    list.style.transition = '';
  }, 300);
});

const setPosition = () => {
  list.style.transform = `translateY(${position}px)`;
};

function getItemsBottom() {
  return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 40;
}
