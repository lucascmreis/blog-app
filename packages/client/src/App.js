import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Header} from './components/Header'
import {Home} from './pages/Home'
import {ArticlePage} from './pages/ArticlePage'
import { Article } from './pages/ArticlePage/article'

import './styles/global.scss'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/docs' element={<ArticlePage />}/>
          <Route path='/docs/:slug' element={<Article />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
