import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './Header.css';

const Header = () => {
  const { state, dispatch } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const closeMenu = () => {
    dispatch({ type: 'SET_MENU', payload: false });
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={closeMenu}>
          <span className="nav__logo-icon">🎬</span>
          <span className="nav__logo-text">Trident Productions</span>
        </Link>

        <ul className={`nav__menu ${state.menuOpen ? 'nav__menu--active' : ''}`}>
          <li className="nav__item">
            <Link 
              to="/" 
              className={`nav__link ${location.pathname === '/' ? 'nav__link--active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link 
              to="/about" 
              className={`nav__link ${location.pathname === '/about' ? 'nav__link--active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link 
              to="/services" 
              className={`nav__link ${location.pathname === '/services' ? 'nav__link--active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav__item">
            <Link 
              to="/contact" 
              className={`nav__link ${location.pathname === '/contact' ? 'nav__link--active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button 
          className={`nav__toggle ${state.menuOpen ? 'nav__toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="nav__toggle-line"></span>
          <span className="nav__toggle-line"></span>
          <span className="nav__toggle-line"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;

