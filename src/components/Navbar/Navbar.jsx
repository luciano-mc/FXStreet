import './Navbar.css';
import FXLogoDesktop from '../../assets/logo-desktop.svg';
import FXLogoMobile from '../../assets/logo-mobile.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={FXLogoMobile} alt="FXStreet Logo mobile" />
        <img src={FXLogoDesktop} alt="FXStreet Logo desktop" />
      </div>
      <ul className="nav__items-container">
        <li className="nav__item"><a href="#" className="nav__item-icon-mock desktop"></a></li>
        <li className="nav__item"><a href="#" className="nav__item-icon-mock desktop"></a></li>
        <li className="nav__item"><a href="#" className="nav__item-icon-mock desktop"></a></li>
        <li className="nav__item"><a href="#" className="nav__item-icon-mock"></a></li>
        <li className="nav__item"><a href="#" className="nav__item-icon-mock"></a></li>
      </ul> 
    </nav>
  )
}

export default Navbar;