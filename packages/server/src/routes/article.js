const express = require('express');
const {getArticles, postArticles, findArticle} = require('../controllers/article-controller')

const router = express.Router()

router
  .get('/', getArticles)
  .get('/:id', findArticle)
  .post('/new', postArticles)

module.exports = router
