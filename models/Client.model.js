const mongoose = require('mongoose')
const clientSсhema = mongoose.Schema({
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

const Client = mongoose.model("Client", clientSсhema)
module.exports = Client