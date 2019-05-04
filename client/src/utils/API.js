import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

const axiosAjax = axios.create({
  headers: {
    'Content-type': 'application/json'
  }
});

export default {
  searchBooks: function(query) {
    return axiosAjax.get(URL + query);
  },
  getBooks: function() {
    return axiosAjax.get("/api/books");
  },
  saveBook: function(bookData) {
    return axiosAjax.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axiosAjax.delete(`/api/books/${id}`)
  }
};