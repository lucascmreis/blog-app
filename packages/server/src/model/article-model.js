const {Schema, model} = require('mongoose')

const ArticleSchema = Schema({
  title: {
    type: String,
    required: true
  },
  slug:{
    type: String,
    required: true,
    unique: true
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
  updatedBy: {
    type: String,
  },
},
{
  collection: 'articles',
  timestamps: true,
  autoIndex: false,
}
)

module.exports = model('article', ArticleSchema)


