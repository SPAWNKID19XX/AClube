import './NavBar.css';
import { Nav } from 'react-bootstrap';
import LanguageSwitcher from '../LanguageSelector/LanguageSelector';
import { useState } from 'react';
import Hamburger from 'hamburger-react'





function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Nav className='main_navbar'>
        {/* Desctop version */}
        <div className="logo_section">
          <img className="size-24 object-top-left" src="/src/assets/img/logo.png" />
        </div>
        
        <div className={`links_menu ${isOpen ? 'links_menu--open' : ''}`}>
          <ul>
            <li className="link_nav"><a href='#'>About</a></li>
            <li className="link_nav"><a href='#'>Membership</a></li>
            <li className="link_nav"><a href='#'>Parties</a></li>
            <li className="link_nav"><a href='#'>Contacts</a></li>
          </ul>
        </div>
        <div className="right_column">
          <div className="lang_select">
            <LanguageSwitcher />
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
