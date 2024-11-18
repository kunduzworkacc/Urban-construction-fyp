import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import '../styles/Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false); // State to handle mobile menu toggle

  // Switch between languages
  const switchLanguage = () => {
    if (i18n.language === 'en') i18n.changeLanguage('ru'); // English to Russian
    else if (i18n.language === 'ru') i18n.changeLanguage('kg'); // Russian to Kyrgyz
    else i18n.changeLanguage('en'); // Kyrgyz to English
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Company Logo" />
          </Link>
        </div>
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        {/* Navbar Links */}
        <div className={`navbar-right ${isMobile ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={() => setIsMobile(false)} // Close menu on link click
              >
                {t('navbar.home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={() => setIsMobile(false)}
              >
                {t('navbar.about')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={() => setIsMobile(false)}
              >
                {t('navbar.projects')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={() => setIsMobile(false)}
              >
                {t('navbar.news')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                onClick={() => setIsMobile(false)}
              >
                {t('navbar.contact')}
              </NavLink>
            </li>
          </ul>
          <div className="vertical-line"></div>
          <a
            href="https://wa.me/60187869497"
            target="_blank"
            rel="noopener noreferrer"
            className="text-us-button"
          >
            {t('navbar.textUs')}
          </a>
          <div className="vertical-line"></div>
          <div className="language-switch" onClick={switchLanguage}>
            {i18n.language === 'en' ? (
              <Flag code="US" style={{ width: '35px', cursor: 'pointer' }} />
            ) : i18n.language === 'ru' ? (
              <Flag code="RU" style={{ width: '35px', cursor: 'pointer' }} />
            ) : (
              <Flag code="KG" style={{ width: '35px', cursor: 'pointer' }} />
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
