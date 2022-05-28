const mongoose = require('mongoose')
const booksSсhema = mongoose.Schema({
  name: String,
  genre: {
    ref: "Genre",
    type: mongoose.SchemaTypes.ObjectId
  },
  client: {
    ref: "Client",
    type: mongoose.SchemaTypes.ObjectId
  }, 
  isRented: {
    default: false,
    type: Boolean
  }
})

const Book = mongoose.model("Book", booksSсhema)
module.exports = Book