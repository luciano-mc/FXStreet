import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__link-container">
        <a href="#" className="blue-circle"></a>
        <a href="#" className="link-mock link-mock--blue"></a>
      </div>
      <div className="header__link-container">
        <a href="#" className="link-mock link-mock--orange"></a>
        <div className="separator"></div>
        <a href="#" className="grey-circle"></a>
        <div className="separator"></div>
        <a href="#" className="grey-circle"></a>
        <div className="separator"></div>
        <a href="#" className="grey-circle"></a>
        <a href="#" className="link-mock link-mock--grey"></a>
      </div>
    </header>
  )
}

export default Header;