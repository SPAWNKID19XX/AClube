import './NavBar.css';
import { Nav } from 'react-bootstrap';
import LanguageSwitcher from '../LanguageSelector/LanguageSelector';
import { useState } from 'react';
import Hamburger from 'hamburger-react'
import { useTranslation } from "react-i18next";
import logo from "/src/assets/img/logo.png"
import { Link } from 'react-router-dom';





function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const {t} = useTranslation()
  return (
    <>
    
      <Nav className='main_navbar'>
        {/* Desctop version */}
        <div className="logo_section">
          <img className="size-24 object-top-left" src={logo}/>
        </div>
        
        <div className={`links_menu ${isOpen ? 'links_menu--open' : ''}`}>
          <ul>
            <li className="link_nav"><a href='#'>{t("navbar.about")}</a></li>
            <li className="link_nav"><a href='#'>{t("navbar.membership")}</a></li>
            <li className="link_nav"><a href='#'>{t("navbar.parties")}</a></li>
            <li className="link_nav"><a href='#'>{t("navbar.contacts")}</a></li>
          </ul>
        </div>
        <div className="right_column">
          <div className="lang_select">
            <LanguageSwitcher />
          </div>
          <div className="reg_log">
              <Link to="/signup">SignUP</Link>
              <Link to="/login">Login</Link>
            </div>
          <div className="burger_section">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>        
      </Nav>
    
    </>
  )
}


export default Navbar;
