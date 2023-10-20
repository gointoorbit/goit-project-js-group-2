import {getBooksApi, categoryList, topBooks} from "./api.js"
const boxCategories = document.querySelector(".list ul")
const itemCategory = document.querySelector(".category ul")

const sendCategory = (categoryName) => {
    let categorySelected;
    if (categoryName === "All categories") {
        categorySelected = topBooks
    } else {
        categorySelected = `category?category=${categoryName}`;
    }
    getBooksApi(categorySelected)
    .then (category => {
        return showCategory(category)
    })
    .catch(error => {

        console.log(error)
    })
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
        category.classList.add("list__categories")
        category.innerHTML = `${element.list_name}`
    });
    
    boxCategories.addEventListener("click", () => sendCategory(event.target.innerHTML))
}

const showCategory = (category) => {
    itemCategory.innerHTML = ""
    category.data.forEach(element => {
        console.log(element)
        const book = document.createElement("li")
        itemCategory.append(book)
        book.innerHTML = `
            <img src="${element.book_image}">
            ${element.title}
            `
    })
}
