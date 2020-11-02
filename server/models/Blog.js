const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  time: {
    type: Date
  },
  tags: {
    type: String
  }
})

module.exports = mongoose.model('Blog',schema)
