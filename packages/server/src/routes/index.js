const express = require('express')
const articlesRoute = require('./article')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Works')
})

router.use('/articles', articlesRoute )

module.exports = router
