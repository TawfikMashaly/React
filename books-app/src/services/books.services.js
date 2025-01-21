import axios from "axios";

const url = "http://localhost:8000/books";
export async function getBooks() {
    try {
        return await axios.get(url);
    }catch(err) {
        console.log(err.message);
    }
}
export async function addBook(book) {

    try {
        return await axios.post(url, book);
    }catch(err) {
        console.log(err.message)
    }
}

// Show Book
export async function getBook(id) {
    try {
        return await axios.get(`${url}/${id}`);
    }catch(err) {
        console.log(err.message)
    }
}

//Delete Book
export async function deleteBook(id) {
    try {
        return await axios.delete(`${url}/${id}`);
    }catch(err) {
        console.log(err.message)
    }
}

// Update Book
export async function editBook(id , book) {
    try {
        return await axios.put(`${url}/${id}` , book);
    }catch(err) {
        console.log(err.message)
    }
}


