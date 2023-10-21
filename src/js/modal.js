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
const randomCoverElement = randomBookContainer.querySelector('#ran-cover');
const randomTitleElement = randomBookContainer.querySelector('#ran-title');
const randomAuthorElement = randomBookContainer.querySelector('#ran-author');
const randomBoookDescriptionElement = randomBookContainer.querySelector('#ran-book-description');
// const randomBookBuyLink = bookElement.querySelector('#ran-book-buy-link');

async function getRandomBook() {
  try {
    const response = await fetch('https://books-backend.p.goit.global/books/top-books');
    if (response.ok) {
      const data = await response.json();

      // Losowy wybór kategorii i książki
      const randomCategory = data[Math.floor(Math.random() * data.length)];
      const randomBook = randomCategory.books[Math.floor(Math.random() * randomCategory.books.length)];
     
      randomCoverElement.src = randomBook.book_image;  
      randomTitleElement.textContent = 'Tytuł: ' + randomBook.title;
      randomAuthorElement.textContent = 'Autor: ' + randomBook.author;
      console.log(randomBook);
 
    } else {
      console.error('Wystąpił błąd podczas pobierania danych z API.');
    }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  }
}

getRandomBook();


// Funkcja do tworzenia nowego diva .book z danymi z API
function createBookDiv(selectedBook) {
  const bookElement = document.getElementById('book');
  const bookCover = bookElement.querySelector('#book-cover');
  const bookTitleElement = bookElement.querySelector('#book-title');
  const bookAuthorElement = bookElement.querySelector('#book-author');
  const bookDescriptionElement = bookElement.querySelector('#book-description');
  const bookBuyLink = bookElement.querySelector('#book-buy-link');

  bookCover.src = selectedBook.book_image;
  bookTitleElement.textContent = 'Tytuł: ' + selectedBook.title;
  bookAuthorElement.textContent = 'Autor: ' + selectedBook.author;
  bookDescriptionElement.textContent = 'Opis: ' + selectedBook.description;
  bookBuyLink.href = selectedBook.amazon_product_url;
  bookBuyLink.textContent = 'Kup teraz';
}

// Pobierz dane z API i wyświetl w divie .book
async function fetchAndDisplayBook() {
  try {
    const response = await fetch('https://books-backend.p.goit.global/books/top-books');
    if (response.ok) {
      const data = await response.json();

      // Losowy wybór kategorii i książki
      const randomCategory = data[Math.floor(Math.random() * data.length)];
      const randomBook = randomCategory.books[Math.floor(Math.random() * randomCategory.books.length)];

      createBookDiv(randomBook); // Użyj danych z API do utworzenia diva .book
    } else {
      console.error('Wystąpił błąd podczas pobierania danych z API.');
    }
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  }
}

// Obsługa kliknięcia na książkę
const bookList = document.querySelectorAll('.random-book');
bookList.forEach(book => {
  book.addEventListener('click', function () {
    fetchAndDisplayBook(); // Pobierz i wyświetl dane z API po kliknięciu w div .random-book
  });
});




