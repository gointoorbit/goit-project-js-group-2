import {getBooksApi, categoryList, topBooks} from "./api.js"
const boxCategories = document.querySelector(".books__categories ul")
const itemCategory = document.querySelector(".books__list ul")
let lastCategory;

const changeCategoryColor = (category) => {
    if (lastCategory) {
        lastCategory.classList.remove("change-category-color")
    }
    category.classList.add("change-category-color")
    lastCategory = category
}

const sendCategory = (categoryName) => {

    changeCategoryColor(categoryName)

    let categorySelected;
    if (categoryName.innerHTML === "All categories") {
        categorySelected = topBooks
        getBooksApi(categorySelected)
        .then (category => {
            return showTopBooks(category.data)
        })
    } else {
        categorySelected = `category?category=${categoryName.innerHTML}`;
        getBooksApi(categorySelected)
        .then (category => {
            return showCategory(category)
        })
    }
}

getBooksApi(categoryList)
    .then (categories => {
        return allCategory(categories.data)
    })
    .catch(error => {
        console.log(error)
    })

const allCategory = (categoryName) => {
    categoryName.forEach(element => {
        const category = document.createElement("li")
        boxCategories.append(category)
        category.classList.add("books__categories--item")
        category.innerHTML = `${element.list_name}`
    });
    
    boxCategories.addEventListener("click", () => sendCategory(event.target))
}

const showCategory = (category) => {
    itemCategory.innerHTML = ""
    category.data.forEach(element => {
        const book = document.createElement("li")
        itemCategory.append(book)
        book.innerHTML = `
            <img src="${element.book_image}">
            ${element.title}
            `
    })
}

sendCategory(boxCategories.firstElementChild)


const showTopBooks = TopBooks => {
    itemCategory.innerHTML = ""
    TopBooks.map(book => {
        itemCategory.insertAdjacentHTML(
        'beforeend',`
            <div class='books__list--card'>
                <span class='books__list--category'>${book.list_name}</span>
                <img src='${book.books[0].book_image}' class='books-list--image'/>
                <div class='books__list--description'>
                    <span class='books__list--title'>${book.books[0].title}</span>
                    <br/>
                    <span class='books__list--author'>${book.books[0].author}</span>
                </div>
                <div class='books__list--see-more'>
                    <button>see more</button> 
                </div>
            </div>`,
        );
    });
};
