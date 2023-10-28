import {load} from "./local-storage";

// Funkcja: Zlicz książki i wyświetl liczbę w elemencie HTML
function updateBookCount() {
    const booksIdList = load('myBooksId') || [];
    const bookCountElement = document.getElementById("bookCount");
  
    if (booksIdList.length === 0) {
      bookCountElement.style.display = 'none';
    } else {
      bookCountElement.style.display = 'inline'; // Włącz wyświetlanie, jeśli liczba > 0
      bookCountElement.textContent = "" + booksIdList.length;
    }
  }
  
  // Dodaj nasłuchiwanie na kliknięcia w przyciski "Add" i "Remove"
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("button-shopping__content") || event.target.classList.contains("remove-button__box")) {
      updateBookCount();
    }
  });
  
  // Wywołaj funkcję, aby zainicjować liczbę książek
  updateBookCount();

  export {updateBookCount};  
  