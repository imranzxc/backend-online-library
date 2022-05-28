const mongoose = require('mongoose')
const genreSсhema = mongoose.Schema({
name: String,
description: String
})

const Genre = mongoose.model("Genre", genreSсhema)
module.exports = Genre