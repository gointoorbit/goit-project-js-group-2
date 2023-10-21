import * as localStorage from './local-storage.js';
import { getBooksApi } from './api.js';

const booksIDList = [
  '643282b1e85766588626a0dc',
  '643282b1e85766588626a0ba',
  '643282b1e85766588626a0b8',
  '643282b1e85766588626a0c2',
  '643282b1e85766588626a0be',
  '643282b2e85766588626a110',
];
//let bookID = booksIDList[5];

const showMyBook = myBook => {
  console.log(myBook);
};
for (const bookID of booksIDList) {
  getBooksApi(bookID)
    .then(book => {
      return showMyBook(book.data.title);
    })
    .catch(error => {
      console.log(error);
    });
}
