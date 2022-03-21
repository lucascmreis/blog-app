const express = require('express');
const {getArticles, postArticles} = require('../controllers/article-controller')

const router = express.Router()

router
  .get('/', getArticles)
  .post('/', postArticles)

module.exports = router
