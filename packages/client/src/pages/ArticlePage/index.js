/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState} from 'react'
import { fetchArticles} from '../../services/api'

import './styles.scss'

export const ArticlePage = () => {
  const [articles, setArticles] = useState([])
  const getArticles = async () => {
    const {data} = await fetchArticles()
    setArticles(data.articles)
  }

  useEffect(()=>{
    getArticles()
  },[])
  return(
    <>
      <div className="home-container">
        <div className="home-wrapper">
          <span>👋🏼 Oie Docs!</span>
          <h1>Ultimos artigos</h1>

          <div className='article-list' >
            {articles.map(article=>(
              <a key={article.slug} href={`/docs/${article.slug}`}>
                <time>{article.createdAt || 'time'}</time>
                <strong>{article.title}</strong>
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
