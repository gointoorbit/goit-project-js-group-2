import axios from "axios";

const getApi = (value) => {
    return axios
    .get(`https://books-backend.p.goit.global/books/${value}`)
    .then(respons => {
        console.log(respons)
        return respons
    })
}

const value = "top-books"

getApi(value)