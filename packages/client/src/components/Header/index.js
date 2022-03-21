import './styles.scss'

export const Header = () => {
  return(
    <header className="header-container" >
    <div className="header-wrapper" >
      <nav>
        <span  >
          <a href="/">Home</a>
        </span>
        <span >
          <a href="/articles">Artigos</a>
        </span>
      </nav>
    </div>
  </header>
  )
}
