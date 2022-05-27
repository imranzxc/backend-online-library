const Genre = require("../models/Genre.model");

module.exports.genreController = {
  //creating new genre
  postGenre: async (req, res) => {
    try {
      await Genre.create(req.body);
      res.json("New genre created");
    } catch (err) {
      res.json(err);
    }
  },

  //getting all genres

  getGenre: async (req, res) => {
    try {
      const genre = await Genre.find({});
      res.json(genre);
    } catch (err) {
      res.json(err);
    }
  },

  //getting genre by id

  getGenreById: async (req, res) => {
    try {
      const genreId = await Genre.findById(req.params.id);
      res.json(genreId);
    } catch (err) {
      res.json(err);
    }
  },

  //genre removing

  removeGenreById: async (req, res) => {
    try {
      await Genre.findByIdAndRemove(req.params.id);
      res.json("Genre was deleted");
    } catch (err) {
      res.json(err);
    }
  },

  //genre changing

  patchGenreById: async (req, res) => {
    try {
      await Genre.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
      });
      res.json("Genre was changed");
    } catch (err) {
      res.json(err);
    }
  },
};
