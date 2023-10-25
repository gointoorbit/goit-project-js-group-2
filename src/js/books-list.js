import { getBooksApi, categoryList, topBooks } from './api.js';
const boxCategories = document.querySelector('.books__categories ul');
const itemCategory = document.querySelector('.books__list ul');
const categoryTitle = document.querySelector('.books__header');
let lastCategory;

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

  let categorySelected;
  if (categoryName.innerHTML === 'All categories') {
    categorySelected = topBooks;
    getBooksApi(categorySelected).then(category => {
      console.log(category.data);
      return showTopBooks(category.data);
    });
  } else {
    return pageCategory(categoryName.innerHTML);
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

  itemCategory.innerHTML = '';
  category.data.forEach(element => {
    const book = document.createElement('li');
    itemCategory.append(book);
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

const showTopBooks = topBooks => {
  changeTitleColor('Best Sellers Books');

  itemCategory.innerHTML = '';
  for (const category of topBooks) {
    const categoryCard = document.createElement('div');
    const booksList = document.querySelector('.books__list');
    booksList.append(categoryCard);
    categoryCard.classList.add('books__list--category');
    categoryCard.insertAdjacentHTML(
      'beforeend',
      `<span class="books__list--category-name">${category.list_name}</span><ul class="books__list--category-set"></ul><div class'books__list--category-see-more'><button class='see-more-btn'>see more</button></div>`,
    );
    console.log(categoryCard);

    console.log(category.list_name);
    for (const book of category.books) {
      let booksOfCategory = document.querySelectorAll('.books__list--category-set');
      console.log(book);
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

const booksSection = document.querySelector('.books__list');

booksSection.addEventListener('click', event => {
  if (
    event.target.classList.contains('books__list--image') ||
    event.target.classList.contains('books__list--title')
  ) {
    const selectedId = event.target.dataset.mainid;
    console.log(selectedId);
    //Tutaj dodać funkcje pobierania danych z api i tworzenia modala
  }
});
