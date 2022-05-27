const mongoose = require('mongoose')
const clientShema = mongoose.Schema({
name: String,
bookIsRented: [
  {
    ref: 'Book',
    type: mongoose.SchemaTypes.ObjectId
  }
],
isBlocked: {
  type: Boolean,
  default: false
}


})

const Client = mongoose.model("Client", clientShema)
module.exports = Client