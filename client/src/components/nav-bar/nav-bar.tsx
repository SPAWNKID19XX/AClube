import './nav-bar.css';
import { Nav } from 'react-bootstrap';
import LanguageSwitcher from '../language-selector/language-selector';
import { useState } from 'react';
import Hamburger from 'hamburger-react'
import { useTranslation } from "react-i18next";
import logo from "/src/assets/img/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import api from '../../api/exios';






function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const {t} = useTranslation()
  const { user, setUser, setAccessToken } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
        try {
            await api.post('users/api/v1/auth/logout/');
        } catch (err) {
            console.error("Logout servers error", err);
        } finally {
            setAccessToken(null);
            setUser(null);
            
            //Redirect to login
            navigate('/login');
        }
      };
  return (
    <>
    
      <Nav className='main_navbar'>
        {/* DesKtop version */}
        <div className="logo_section">
          <Link to="/">
            <img className="size-24 object-top-left" src={logo}/>
          </Link>
        </div>
        
        <div className={`links_menu ${isOpen ? 'links_menu--open' : ''}`}>
          <ul>
            <li className="link_nav"><a href='/'>{t("navbar.home")}</a></li>
            <li className="link_nav"><a href='#'>{t("navbar.about")}</a></li>
            <li className="link_nav"><a href='#'>{t("navbar.membership")}</a></li>
            <li className="link_nav"><a href='/parties'>{t("navbar.parties")}</a></li>
            <li className="link_nav"><a href='#'>{t("navbar.contacts")}</a></li>
          </ul>
        </div>
        <div className="right_column">
          <div className="lang_select">
            <LanguageSwitcher />
          </div>
          <div className="reg_log">
            {user ? (
                    // Вид для залогиненного пользователя
                    <div className="user-profile">
                        <span className="welcome-text">
                            {t("navbar.gratting")}, <strong>{user.username}</strong>!
                        </span>
                        <button onClick={handleLogout} className="logout-btn">
                            {t("navbar.logout")}
                        </button>
                    </div>
                ) : (
                    <div className="auth-buttons">
                        <Link to="/login" className="login-link">{t("navbar.login")}</Link>
                        <Link to="/signup" className="signup-btn">{t("navbar.signup")}</Link>
                    </div>
                )}
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
