const Article = require('../model/article-model')

const getArticles = async (req, res) =>{
  try{
    const articles = await Article.find({})
    res.status(200).json({articles: articles})
  } catch(error){
    res.status(400).json({message: error.message})

  }
}

const postArticles = async (req, res) =>{
  try{
    const newArticle = req.body
    const articleCreated = await Article.create(newArticle)
    console.log('created', articleCreated)

    res.status(200).json({articles: 'ok'})
  } catch(error){
    res.status(400).json({message: error.message})

  }
}

module.exports = {getArticles, postArticles}
