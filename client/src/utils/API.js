import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

const json = axios.create({
  headers: {
    'Content-type': 'application/json'
  }
});


export default {
  searchBooks: function(query) {
    return json.get(URL + query);
  },
  getBooks: function() {
    return json.get("/api/books");
  },
  saveBook: function(bookData) {
    return json.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return json.delete("api/books/" + id)
  }
};