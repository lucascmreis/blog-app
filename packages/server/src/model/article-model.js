const {Schema, model} = require('mongoose')

const ArticleSchema = Schema({
  title: {
    type: String,
    required: true
  },
  slug:{
    type: String,
    required: true
  },
  category: {
    type: String,
  },
  tags:{
    type: Array
  },
  content: {
    type: Object,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String,
  }

})

module.exports = model('article', ArticleSchema)


