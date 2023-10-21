import * as localStorage from './local-storage.js';
import { getBooksApi } from './api.js';

const booksIdToLocalStorage = [
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a0ba',
  '643282b1e85766588626a0b8',
  '643282b1e85766588626a0c2',
  '643282b1e85766588626a0be',
  '643282b2e85766588626a110',
];

const cardsList = document.querySelector('.cards-list');
localStorage.save('test-Ids', booksIdToLocalStorage);

const booksIDList = localStorage.load('test-Ids');

const showMyBook = myBook => {
  const { _id, book_image, title, list_name, description, author, buy_links } = myBook;
  //console.log(_id);
  const markup = `<li class="card-item">
        <div class="card-item__box">
          <div class="remove-button">
            <button type="button" class="remove-button__box" data-id="${_id}">
              <svg class="remove-button__icon">
                <use href="./images/icons.svg#icon-trash"></use>
              </svg>
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
                          src="./images/amazon-light-mode.svg"
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
                          src="./images/apple-books.svg"
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
for (const bookID of booksIDList) {
  getBooksApi(bookID)
    .then(book => {
      return showMyBook(book.data);
    })
    .catch(error => {
      console.log(error);
    });
}
