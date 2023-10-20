import {getBooksApi, categoryList, topBooks} from "./api.js"
const boxCategories = document.querySelector(".books__categories ul")
const itemCategory = document.querySelector(".books__list ul")

const sendCategory = (categoryName) => {
    let categorySelected;
    if (categoryName === "All categories") {
        categorySelected = topBooks
        getBooksApi(categorySelected)
        .then (category => {
            return showTopBooks(category.data)
        })
    } else {
        categorySelected = `category?category=${categoryName}`;
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
    
    boxCategories.addEventListener("click", () => sendCategory(event.target.innerHTML))
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

sendCategory("All categories")

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
