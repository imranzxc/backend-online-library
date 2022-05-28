const Book = require("../models/Book.model");
const Client = require("../models/Client.model");
const Review = require("../models/Review.model");

module.exports.clientController = {
  //Client adding
  postClient: async (req, res) => {
    try {
      await Client.create({
        name: req.body.name,
      });
      res.json("client added");
    } catch (err) {
      res.json(err);
    }
  },

  //Getting books for client
  getBooks: async (req, res) => {
    try {
      const allBooks = await Book.find({}).populate("Client genre");
      res.json(allBooks);
    } catch (err) {
      res.json(err);
    }
  },

  //Getting all books sorted by genre

  getBooksByGenreId: async (req, res) => {
    try {
      const allBooksGen = await Book.find({ genre: req.params.id }).populate(
        "Sorted by genre"
      );
      res.json(allBooksGen);
    } catch (err) {
      res.json(err);
    }
  },

  //Getting book by id 4client

  getBookById: async (req, res) => {
    try {
      const bookId = await Book.findById(req.params.id).populate(
        "Client genre"
      );
      res.json(bookId);
    } catch (err) {
      res.json(err);
    }
  },

  //Adding review for book
  postBookReview: async (req, res) => {
    try {
      await Review.create({
        name: req.params.id,
        text: req.body.text,
        book: req.params.bookId,
      });
      res.json("Review added");
    } catch (err) {
      res.json(err);
    }
  },

  //* Getting book 4rent
  patchRentBook: async (req, res) => {
    try {
      //?getting client id
      const client = await Client.findById(req.params.id);

      //?if client blocked
      if (client.isBlocked === true) {
        return res.json(
          "We apologize for the inconvenience. You are blocked:("
        );
      }

      //?if book is already rented by some1
      const book = await Book.findById(req.params.bookId);
      if (book.isRented === true) {
        return res.json("This book already rented");
      }

      //?if book rented too many times
      if (client.bookIsRented.length >= 3) {
        return res.json("You cant rent more than 3 books at the same time");
      }

      //?adding book into array of books
      await Client.findByIdAndUpdate(req.params.id, {
        $push: { bookIsRented: req.params.bookId },
      });

      //?changing book boolean status

      await Book.findByIdAndUpdate(req.params.bookId, {
        client: req.params.id,
        isRented: true,
      });

      //?giving response info
      res.json("Book is successfully added");
    } catch (err) {
      res.json(err);
    }
  },

  //book returning
  patchBookReturn: async (req, res) => {
    try {
      await Client.findByIdAndUpdate(req.params.id, {
        $pull: { bookIsRented: req.params.bookId },
      });
      await Book.findByIdAndUpdate(req.params.bookId, {
        client: 0,
        isRented: false,
      });
      res.json("Book is returned to library");
    } catch (err) {
      res.json(err);
    }
  },

  //taking the book and block the client

  takeBookBack: async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);
      if (client.bookIsRented.includes(req.params.bookId)) {
        const client = await Client.findByIdAndUpdate(req.params.id, {
          $pull: { bookIsRented: req.params.bookId },
          isBlocked: true,
        });
        await Book.findByIdAndUpdate(req.body.id, {
          rent: false,
        });
        res.json("The client is blocked");
      } else {
        res.json(err);
      }
    } catch (err) {
      res.json(err);
    }
  },

  getClients: async (req, res) => {
    try {
      const allClients = await Client.find({}).populate("bookIsRented");
      res.json(allClients);
    } catch (err) {
      res.json(err);
    }
  },

  getClientById: async (req, res) => {
    try {
      const clientId = await Client.findById(req.params.id);
      res.json(clientId);
    } catch (err) {
      res.json(err);
    }
  },

  patchClient: async (req, res) => {
    try {
      await Client.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        bookIsRented: req.body.bookIsRented,
        isBlocked: req.body.isBlocked,
      })
      res.json("Client has been changed");
    } catch (err) {
      res.json(err);
    }
  },
};
