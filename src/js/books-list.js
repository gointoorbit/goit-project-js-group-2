import { getBooksApi, categoryList, topBooks } from './api.js';
import throttle from 'lodash.throttle';

const boxCategories = document.querySelector('.books__categories ul');
const categoryTitle = document.querySelector('.books__header');
const booksSection = document.querySelector('.books__list');
let lastCategory;
let categorySelected;
let categoryData;

const changeCategoryColor = category => {
  if (lastCategory) {
    lastCategory.classList.remove('change-category-color');
  }
  category.classList.add('change-category-color');
  lastCategory = category;
};

const changeTitleColor = element => {
  const title = element.split(' ');
  const lastElement = title.pop();
  const titleShort = title.join(' ');
  categoryTitle.innerHTML = `${titleShort} 
        <span class="books__header--color">

        ${lastElement}</span>`;
};

const fetchCategories = async () => {
  const categories = await getBooksApi(categoryList);
  return allCategory(categories.data);
};

fetchCategories();

const allCategory = categoryName => {
  categoryName.forEach(element => {
    const category = document.createElement('li');
    boxCategories.append(category);
    category.classList.add('books__categories--item');
    category.innerHTML = `${element.list_name}`;
  });

  boxCategories.addEventListener('click', () => sendCategory(event.target));
};

const sendCategory = categoryName => {
  changeCategoryColor(categoryName);
  if (categoryName.innerHTML === 'All categories') {
    pageTopBooks();
    window.addEventListener('resize', throttle(adjustBooksList, 250));
  } else {
    window.removeEventListener('resize', throttle(adjustBooksList, 250));
    pageCategory(categoryName.innerHTML);
  }
};

const pageCategory = async categoryName => {
  for (const element of boxCategories.children) {
    if (element.innerHTML === categoryName) {
      changeCategoryColor(element);
    }
  }
  categorySelected = `category?category=${categoryName}`;
  const category = await getBooksApi(categorySelected);
  return showCategory(category);
};

const showCategory = category => {
  changeTitleColor(category.data[0].list_name);
  booksSection.innerHTML = '';
  category.data.forEach(element => {
    const book = document.createElement('li');
    booksSection.append(book);
    book.innerHTML = `
        <div class="books__list--card"><div class='books__list--box'><div class='books__list--overlay'><span class='books__list--overlay-text'>quick view</span></div><img data-mainId="${element._id}" src="${element.book_image}" class="books__list--image"/></div>
        <div class="books__list--description">
        <span data-mainId="${element._id}" class="books__list--title">${element.title}</span>
        <br/>
        <span class="books__list--author">${element.author}</span>
        </div>
        </div>`;
  });
};

const pageTopBooks = async () => {
  changeCategoryColor(boxCategories.firstElementChild);
  const category = await getBooksApi(topBooks);
  categoryData = category.data;
  adjustBooksList(categoryData);
  return categoryData;
};

const showTopBooks = (topBooks, itemNumbers) => {
  changeTitleColor('Best Sellers Books');
  booksSection.innerHTML = '';
  for (const category of topBooks) {
    const categoryCard = document.createElement('div');
    booksSection.append(categoryCard);
    categoryCard.classList.add('books__list--category');
    categoryCard.insertAdjacentHTML(
      'beforeend',
      `<span class="books__list--category-name">${category.list_name}</span><ul class="books__list--category-set"></ul><div class='books__list--category-see-more'><button class='see-more-btn'>see more</button></div>`,
    );
    let booksArray = category.books;
    let adjustedBooksArray = booksArray.slice(0, itemNumbers);

    for (const book of adjustedBooksArray) {
      let booksOfCategory = document.querySelectorAll('.books__list--category-set');
      booksOfCategory[booksOfCategory.length - 1].insertAdjacentHTML(
        'beforeend',
        `<li class="books__list--element-info"><div class='books__list--box'><div class='books__list--overlay'><span class='books__list--overlay-text'>quick view</span></div><img data-mainId="${book._id}" class="books__list--image" src="${book.book_image}"/></div><div class="books__list--element-description"><span data-mainId="${book._id}" class="books__list--title">${book.title}</span><br/><span class="books__list--author">${book.author}</span></div></li>`,
      );
    }
  }
};

const adjustBooksList = () => {
  if (window.screen.width <= 768) {
    return showTopBooks(categoryData, 1);
  } else if (window.screen.width <= 1440) {
    return showTopBooks(categoryData, 3);
  } else {
    return showTopBooks(categoryData, 5);
  }
};

sendCategory(boxCategories.firstElementChild);

document.addEventListener('click', function (e) {
  const target = e.target.closest('.see-more-btn');
  if (target) {
    const myCategory = target.parentNode.parentNode.firstElementChild.innerHTML;
    window.removeEventListener('resize', throttle(adjustBooksList, 250));
    pageCategory(myCategory);
  }
});
