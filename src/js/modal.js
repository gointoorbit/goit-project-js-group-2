(() => {
    const refs = {
      openModalBtn: document.querySelector("[btn-modal-open]"),
      closeModalBtn: document.querySelector("[close-btn]"),
      modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();




  
const randomBookContainer = document.querySelector('.random-book');
const titleElement = randomBookContainer.querySelector('#title');
const authorElement = randomBookContainer.querySelector('#author');
const descriptionElement = randomBookContainer.querySelector('#description')
const coverElement = randomBookContainer.querySelector('#cover');
const buyLinkElement = randomBookContainer.querySelector('#buy-link');

async function getRandomBook() {
  try {
    const response = await fetch('https://books-backend.p.goit.global/books/top-books');
    if (response.ok) {
      const data = await response.json();

      // Losowy wybór kategorii i książki
      const randomCategory = data[Math.floor(Math.random() * data.length)];
      const randomBook = randomCategory.books[Math.floor(Math.random() * randomCategory.books.length)];
     
      coverElement.src = randomBook.book_image;  
      titleElement.textContent = 'Tytuł: ' + randomBook.title;
      authorElement.textContent = 'Autor: ' + randomBook.author;
      descriptionElement.textContent = 'Opis: ' + randomBook.description;  
      buyLinkElement.href = randomBook.amazon_product_url;
      buyLinkElement.textContent = 'Kup teraz';
    } else {
      console.error('Wystąpił błąd podczas pobierania danych z API.');
    }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  }
}

getRandomBook();




const randomBookElement = document.querySelector('.random-book');
const bookElement = document.querySelector('.book');

// Funkcja do kopiowania zawartości
function copyRandomBookToBook() {
  bookElement.innerHTML = randomBookElement.innerHTML;
}

// Obsługa przycisku "Open Modal"
const modalButton = document.querySelector('[btn-modal-open]');
modalButton.addEventListener('click', function () {
  // Wywołaj funkcję, aby skopiować zawartość ".random-book" do ".book"
  copyRandomBookToBook()
});