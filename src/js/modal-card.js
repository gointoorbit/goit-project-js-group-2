import * as localStorage from './local-storage.js';
import { getBooksApi } from './api.js';
import amazonIcon from '/src/images/amazon-light-mode.svg';
import appleBooksIcon from '/src/images/apple-books.svg';

const modalSection = document.querySelector('.modal-card');
const booksSection = document.querySelector('.books__list');

const showModalCard = myBook => {
  const { _id, book_image, title, description, author, buy_links } = myBook;
  const markup = `<div class="modal-card__backdrop">
    <div class="modal-card__box">
      <div class="modal-card__close">
        <button type="button" class="modal-card__close-box"></button>
      </div>
      <div class="modal-card__img-box">
        <img
          src="${book_image}"
          alt="Book
        cover"
          class="modal-card__img"
        />
      </div>
      <div class="modal-card__info">
        <div class="modal-card__info-body">
          <h2 class="modal-card__title">${title}</h2>
          <h3 class="modal-card__author">${author}</h3>
          <p class="modal-card__description">${description}</p>
        </div>
        <div class="modal-card__shops">
          <ul class="shops-list modal">
            <li class="shops-list__item modal">
              <a
                href="${buy_links[0].url}"
                target="_blank"
                rel="nofollow noopener noreferrer"
                class="shops-list__link modal"
                ><div class="shops-list__icon-box shops-list__icon-box--amazon modal">
                  <img
                    src="${amazonIcon}"
                    alt="Amazon logo"
                    class="shops-list__icon-img-amazon modal"
                  /></div
              ></a>
            </li>
            <li class="shops-list__item modal">
              <a
                href="${buy_links[1].url}"
                target="_blank"
                rel="nofollow noopener noreferrer"
                class="shops-list__link modal"
                ><div class="shops-list__icon-box shops-list__icon-box--apple modal">
                  <img
                    src="${appleBooksIcon}"
                    alt="Apple Books logo"
                    class="shops-list__icon-img-apple modal"
                  /></div
              ></a>
            </li>
          </ul>
        </div>
        <div class="button-shopping">
          <button class="button-shopping__content" data-modalid="${_id}">add to shopping list</button>
        </div>
        <div class="modal-card__congrats">
          <p class="modal-card__congrats-text">
            Congratulations! You have added the book to the shopping list. To delete, press the
            button "Remove from the shopping list".
          </p>
        </div>
      </div>
    </div>
  </div>`;
  modalSection.insertAdjacentHTML('beforeend', markup);
  const modalCloseButton = document.querySelector('.modal-card__close-box');
  modalCloseButton.addEventListener('click', () => {
    modalSection.innerHTML = '';
  });
};

const renderModalCard = bookID => {
  getBooksApi(bookID)
    .then(book => {
      return showModalCard(book.data);
    })
    .catch(error => {
      console.log(error);
    });
};

booksSection.addEventListener('click', event => {
  if (
    event.target.classList.contains('books__list--image') ||
    event.target.classList.contains('books__list--title')
  ) {
    const selectedId = event.target.dataset.mainid;
    console.log(selectedId);
    //Tutaj dodać funkcje pobierania danych z api i tworzenia modala
    renderModalCard(selectedId);
  }
});
