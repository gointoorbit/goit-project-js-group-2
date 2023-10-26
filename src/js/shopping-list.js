import * as localStorage from './local-storage.js';
import { getBooksApi } from './api.js';
import amazonIcon from '/src/images/amazon-light-mode.svg';
import appleBooksIcon from '/src/images/apple-books.svg';

let booksIdList = localStorage.load('myBooksId') || [];
const cardsList = document.querySelector('.cards-list');
const shoppingEmpty = document.querySelector('.shopping-empty');
shoppingEmpty.style.display = 'none';

// Function: Creating book-card markup and adding to DOM //
const showMyBook = myBook => {
  const { _id, book_image, title, list_name, description, author, buy_links } = myBook;
  const markup = `<li class="card-item">
        <div class="card-item__box">
          <div class="remove-button">
            <button type="button" class="remove-button__box" data-id="${_id}">
            </button>
          </div>
          <div class="card-item__img-box">
            <img
              src="${book_image}"
              alt="Book cover"
              class="card-item__img"
            />
          </div>
          <div class="card-item__info">
            <div class="card-item__info-body">
              <h2 class="card-item__title">${title}</h2>
              <h3 class="card-item__category">${list_name}</h3>
              <p class="card-item__description">
              ${description}
              </p>
            </div>
            <div class="card-item__info-footer">
              <div class="card-item__author-box">
                <p class="card-item__author">${author}</p>
              </div>
              <div class="card-item__shops">
                <ul class="shops-list">
                  <li class="shops-list__item">
                    <a
                      href="${buy_links[0].url}"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      class="shops-list__link"
                      ><div class="shops-list__icon-box shops-list__icon-box--amazon">
                        <img
                          src="${amazonIcon}"
                          alt="Amazon logo"
                          class="shops-list__icon-img-amazon"
                        /></div
                    ></a>
                  </li>
                  <li class="shops-list__item">
                    <a
                      href="${buy_links[1].url}"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      class="shops-list__link"
                      ><div class="shops-list__icon-box shops-list__icon-box--apple">
                        <img
                          src="${appleBooksIcon}"
                          alt="Apple Books logo"
                          class="shops-list__icon-img-apple"
                        /></div
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>`;
  cardsList.insertAdjacentHTML('beforeend', markup);
};

// Fetch books by IDs from array and render list //
const renderList = array => {
  array.forEach(bookID => {
    getBooksApi(bookID)
      .then(book => {
        return showMyBook(book.data);
      })
      .catch(error => {
        console.log(error);
      });
  });
};

// Load / refresh page event listener //
window.addEventListener('load', () => {
  cardsList.innerHTML = '';
  booksIdList = localStorage.load('myBooksId'); // <--- "key"
  if (booksIdList.length === 0) {
    shoppingEmpty.style.display = 'flex';
    cardsList.removeEventListener('click', removeCardHandler);
    return;
  }
  renderList(booksIdList);
  cardsList.addEventListener('click', removeCardHandler);
});

// Function: remove card by book ID //
const removeCard = cardId => {
  const indexToRemove = booksIdList.indexOf(cardId);
  booksIdList.splice(indexToRemove, 1);
  localStorage.save('myBooksId', booksIdList); // <--- "key"
  cardsList.innerHTML = '';

  if (booksIdList.length === 0) {
    shoppingEmpty.style.display = 'flex';
    cardsList.removeEventListener('click', removeCardHandler);
    return;
  }
  renderList(booksIdList);
};

// Event handler: remove button "click" //
const removeCardHandler = event => {
  if (!event.target.classList.contains('remove-button__box')) {
    return;
  }
  const removeCardId = event.target.dataset.id;
  removeCard(removeCardId);
};
