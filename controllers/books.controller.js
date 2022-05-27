const Book = require("../models/Book.model");

module.exports.bookController = {
  // Book adding
  postBook: async (req, res) => {
    try {
      await Book.create(req.body);
      res.json("book added");
    } catch (err) {
      res.json(err);
    }
  },
  // Book getting
  getBooks: async (req, res) => {
    try {
      const book = await Book.find({}).populate("client genre");
      res.json(book);
    } catch (err) {
      res.json(err);
    }
  },

  // Book deleting
  deleteBookById: async (req, res) => {
    try {
      await Book.findByIdAndRemove(req.params.id);
      res.json("book removed");
    } catch (err) {
      res.json(err);
    }
  },

  // Book changing
  patchBookById: async (req, res) => {
    try {
      await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        genre: req.body.genre,
        client: req.body.client,
        isRented: req.body.isRented,
      });
      res.json("book changed");
    } catch (err) {
      res.json(err);
    }
  },

  
};
