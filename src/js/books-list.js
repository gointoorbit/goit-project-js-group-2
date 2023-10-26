import { getBooksApi, categoryList, topBooks } from './api.js';
const boxCategories = document.querySelector('.books__categories ul');
const categoryTitle = document.querySelector('.books__header');
const booksList = document.querySelector('.books__list');
let lastCategory;
let categorySelected;

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

const sendCategory = categoryName => {
  changeCategoryColor(categoryName);

  if (categoryName.innerHTML === 'All categories') {
    categorySelected = topBooks;
    getBooksApi(categorySelected).then(category => {
      console.log(category.data);
      console.log(window.screen.width);
      if (window.screen.width <= 768) {
        showTopBooks(category.data, 1);
      } else if (window.screen.width <= 1440) {
        showTopBooks(category.data, 3);
      } else {
        showTopBooks(category.data, 5);
      }
    });
  } else {
    pageCategory(categoryName.innerHTML);
  }
};

boxCategories.addEventListener('click', () => sendCategory(event.target));

getBooksApi(categoryList)
  .then(categories => {
    return allCategory(categories.data);
  })
  .catch(error => {
    console.log(error);
  });

const allCategory = categoryName => {
  categoryName.forEach(element => {
    const category = document.createElement('li');
    boxCategories.append(category);
    category.classList.add('books__categories--item');
    category.innerHTML = `${element.list_name}`;
  });

  boxCategories.addEventListener('click', () => sendCategory(event.target));
};
const pageCategory = categoryName => {
  categorySelected = `category?category=${categoryName}`;
  getBooksApi(categorySelected).then(category => {
    return showCategory(category);
  });
};

const showCategory = category => {
  changeTitleColor(category.data[0].list_name);

  booksList.innerHTML = '';
  category.data.forEach(element => {
    const book = document.createElement('li');
    booksList.append(book);
    book.innerHTML = `
        <div class='books__list--card'><img src="${element.book_image}" class='books__list--image'/>
        <div class='books__list--description'>
        <span class='books__list--title'>${element.title}</span>
        <br/>
        <span class='books__list--author'>${element.author}</span>
        </div>
        </div>`;
  });
};

sendCategory(boxCategories.firstElementChild);

const showTopBooks = (topBooks, itemNumbers) => {
  changeTitleColor('Best Sellers Books');

  booksList.innerHTML = '';
  for (const category of topBooks) {
    const categoryCard = document.createElement('div');

    booksList.append(categoryCard);
    categoryCard.classList.add('books__list--category');
    categoryCard.insertAdjacentHTML(
      'beforeend',
      `<span class="books__list--category-name">${category.list_name}</span><ul class="books__list--category-set"></ul><div class='books__list--category-see-more'><button class='see-more-btn'>see more</button></div>`,
    );
    console.log(category.list_name);
    let booksArray = category.books;
    let adjustedBooksArray = booksArray.slice(0, itemNumbers);
    console.log(itemNumbers);
    console.log(adjustedBooksArray);
    for (const book of adjustedBooksArray) {
      let booksOfCategory = document.querySelectorAll('.books__list--category-set');
      booksOfCategory[booksOfCategory.length - 1].insertAdjacentHTML(
        'beforeend',
        `<li class="books__list--element-info"><img data-mainId='${book._id}' class='books__list--image' src="${book.book_image}"/><div class="books__list--element-description"><span data-mainId='${book._id}' class="books__list--title">${book.title}</span><br/><span class="books__list--author">${book.author}</span></div></li>`,
      );
    }
  }
};

document.addEventListener('click', function (e) {
  const target = e.target.closest('.see-more-btn');
  if (target) {
    const myCategory = target.parentNode.parentNode.firstElementChild.innerHTML;
    pageCategory(myCategory);
  }
});
