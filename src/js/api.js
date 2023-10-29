import axios from 'axios';
import Notiflix from 'notiflix';

const topBooks = 'top-books';
const categoryList = 'category-list';
//let bookID; // ID książki
//let category; // nazwa kategorii
//const categorySelected = `category?category=${category}`; zmienna do wywołania konkretnej kategorii

const getBooksApi = async value => {
  try {
    const respons = await axios.get(`https://books-backend.p.goit.global/books/${value}`);
    return respons;
  } catch (error) {
    Notiflix.Notify.warning('Ooops... Something went wrong! Please, try again.');
  }
};

export { getBooksApi, topBooks, categoryList };

//-------------poniżej przykład wywołania funkcji pobierającej dane z api-------------//

// getBooksApi(categoryList)
//     .then (api => {
//         return showMyCategory(api.data[0].list_name)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// const showMyCategory = (myCategoryName) => {
//     console.log(myCategoryName, " <-- Przykład pobrania danych z API")
// }
