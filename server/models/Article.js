const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String
  },
  pic: {
    type: String
  },
  tags: [{
    type: mongoose.SchemaTypes.ObjectId, ref: 'Tag',
  }],
  body: {
    type: String
  }
})

module.exports = mongoose.model('Article',schema)
