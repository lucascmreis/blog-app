import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import slugify from 'react-slugify'
import {createReactEditorJS} from 'react-editor-js'

import {createArticle, getArticle} from '../../services/api'

import './styles.scss'
import Editor from '../../components/Editor';
import { ContentRender } from '../../components/ContentRender'

export const Article = () => {
  const {slug} = useParams()
  const isNewArticle = slug === 'new'

  const [editMode, setEditMode] = useState(false)
  const [article, setArticle] = useState({})
  const [blocks, setBlocks] = useState([])

  const handleSaveArticle = async(content, title) => {
    const newArticle ={
      title: title,
      slug: slugify(title),
      updatedBy: 'username',
      content: content,
      category: 'Sobre'
    }
    console.log('save', content)

    const response =  await createArticle(newArticle)
    console.log('response', response)

    setEditMode(!editMode)
  }

  const fetchArticleData = async() => {
      const {data} = await getArticle(slug)
      const articleData = Object.values(data)
      const article = articleData[0][0]

      console.log('article fetched', article)
      setArticle(article || {})
      setBlocks(article.content.blocks)
  }

  useEffect(()=>{
    if(!isNewArticle){
      fetchArticleData()
    }
  }, [])


  return(
    <>
          {editMode && (
            <Editor
              article={article}
              editMode={editMode}
              handleSaveArticle={handleSaveArticle}
            />
          )}

          {(!editMode && blocks.length !== 0) && (
            <ContentRender
              article={article}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          )}
    </>
  )
}
