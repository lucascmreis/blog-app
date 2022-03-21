import { useEffect} from 'react'
import { fetchArticles} from '../../services/api'

export const Article = () => {
  const getArticles = async () => {
    const {data} = await fetchArticles()
    console.log('articles', data)
  }

  useEffect(()=>{
    getArticles()
  },[])
  return(
    <>
      <div className="home-container">
        <div className="home-wrapper">
          <span>👋🏼 Oie Docs!</span>
          <h1>To na pagina do artigo</h1>
        </div>
      </div>
    </>
  )
}
