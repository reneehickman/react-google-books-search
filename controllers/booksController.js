const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .then((books) => res.json(books))
      .catch((err) => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then((book) => res.json(book))
      .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then((book) => book.remove())
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  }
};
