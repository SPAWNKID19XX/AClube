import './NavBar.css';
import { Nav } from 'react-bootstrap';
import LanguageSwitcher from '../LanguageSelector/LanguageSelector';


function Navbar() {
  return (
    <>
      <Nav className='main_navbar'>
        {/* Desctop version */}
        <div className="logo_section">
          <img className="size-24 object-top-left" src="/src/assets/img/logo.png" />
        </div>
        
        <div className='links_menu'>
          <ul>
            <li className="link_nav"><a href='#'>About</a></li>
            <li className="link_nav"><a href='#'>Membership</a></li>
            <li className="link_nav"><a href='#'>Parties</a></li>
            <li className="link_nav"><a href='#'>Contacts</a></li>
          </ul>
        </div>
        <div className="lang_select">
          <LanguageSwitcher />
        </div>
      </Nav>
    </>
  )
}


export default Navbar;
