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
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: support2,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: support3,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: support4,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: support5,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: support6,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: support7,
  },
  {
    title: 'Medecins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: support8,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: support9,
  },
];

const supportList = document.querySelector('.js-support');
const markup = createImageCardMarkup(supportArray);

supportList.insertAdjacentHTML('beforeend', markup);
supportList.addEventListener('click', onClick);

function createImageCardMarkup(supportArray) {
  return supportArray
    .map(({ title, url, img }) => {
      return `<li class="support__link js-support">
          <a class="js-target" href="${url}" target="_blank">
            <span class="support__number">
            <img class="support__img"
            src="${img}" alt="${title}"/></span>
          </a>
        </li>`;
    })
    .join('');
}

function onClick(evt) {
  if (!evt.target.classList.contains('js-support')) {
    return;
  }
}

let position = 0;
let slidesToShow = 6;
let slidesToScroll = 1;

const container = document.querySelector('.slider__container');
const list = document.querySelector('.support__list');
const sliderButton = document.querySelector('.slider__button');
const itemsSupport = document.querySelectorAll('.support__link');
let itemsCount = itemsSupport.length;
const sliderItemHeight = 32;
const movePosition = slidesToScroll * sliderItemHeight;

itemsSupport.forEach(item => {
  item.style.minHeight = `${sliderItemHeight}px`;
});

sliderButton.addEventListener('click', () => {
  const itemsBottom = getItemsBottom();

  if (itemsBottom >= slidesToScroll) {
    position -= movePosition;
  } else {
    position = 0;
  }

  list.style.transition = 'transform 0.3s ease-out';
  setPosition();

  setTimeout(() => {
    list.style.transition = '';
  }, 300);
});

window.addEventListener('resize', () => {
  itemsCount = itemsSupport.length;
  setPosition();
});

const setPosition = () => {
  list.style.transform = `translateY(${position}px)`;
};

function getItemsBottom() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1440) {
    return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 39;
  } else if (windowWidth >= 768) {
    return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 40;
  } else {
    return itemsCount - (Math.abs(position) + slidesToShow * sliderItemHeight) / 55;
  }
}
