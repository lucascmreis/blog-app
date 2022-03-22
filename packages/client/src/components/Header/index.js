import {Link} from 'react-router-dom'
import './styles.scss'

export const Header = () => {
  return(
    <header className="header-container" >
    <div className="header-wrapper" >
      <nav>
        <span  >
          <Link to="/">Home</Link>
        </span>
        <span >
          <Link to="/docs">Artigos</Link>
        </span>
      </nav>
    </div>
  </header>
  )
}
