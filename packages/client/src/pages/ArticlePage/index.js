/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState} from 'react'
import { fetchArticles} from '../../services/api'

import './styles.scss'

export const ArticlePage = () => {
  const [articles, setArticles] = useState([])
  const getArticles = async () => {
    const {data} = await fetchArticles()
    console.log(data)
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
          <button>
            <a href='/docs/new'>
              Criar novo
            </a>
          </button>
          <div className='article-list' >
            {articles.lenght !== 0 ?
             articles.map(article=>(
              <a key={article.slug} href={`/docs/${article.slug}`}>
                <time>
                  { new Date(article.updatedAt).toLocaleString('pt-br', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                  </time>
                <strong>{article.title}</strong>
              </a>
            ))
          : <span>Nenhum artigo por enquanto </span>
          }
          </div>


        </div>
      </div>
    </>
  )
}
