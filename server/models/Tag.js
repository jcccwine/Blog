const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  num: {
    type: Number
  }
})

module.exports = mongoose.model('Tag',schema)
