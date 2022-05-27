const Review = require("../models/Review.model");

module.exports.reviewController = {
  // review adding
  postReview: async (req, res) => {
    try {
      await Review.create(req.body);
      res.json("Review was created");
    } catch (err) {
      res.json(err);
    }
  },

  // getting all reviews for some book
  getRevBookId: async (req, res) => {
    try {
      const review = await Review.find({ book: req.params.id }).populate(
        "book name"
      );
      res.json(review);
    } catch (err) {
      res.json(err);
    }
  },

  // review changing

  patchRevById: async (req, res) => {
    try {
      await Review.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
      });
      res.json("Review was changed");
    } catch (err) {
      res.json(err);
    }
  },

  // review removing

  deleteRevById: async (req, res) => {
    try {
      await Review.findByIdAndDelete(req.params.id);
      res.json("Review was removed");
    } catch (err) {
      res.json(err);
    }
  },
};
