const mongoose = require('mongoose')
const reviewShema = mongoose.Schema({
text: String,
name: {
  ref: 'Client',
  type: mongoose.SchemaTypes.ObjectId
},
book: {
  ref: 'Book',
  type: mongoose.SchemaTypes.ObjectId
}
})

const Review = mongoose.model("Review", reviewShema)
module.exports = Review