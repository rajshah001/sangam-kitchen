import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Button from './Button';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <Link to="/" className="header__logo">
            <h2 className="header__logo-text">
              Sangam <span>Kitchen</span>
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav hidden-mobile">
            <ul className="header__nav-list">
              {navigationItems.map((item) => (
                <li key={item.name} className="header__nav-item">
                  <Link
                    to={item.path}
                    className={`header__nav-link ${
                      location.pathname === item.path ? 'header__nav-link--active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header__cta hidden-mobile">
            <Button variant="primary" size="small" href="/contact">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="header__menu-toggle hidden-desktop"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {navigationItems.map((item) => (
                <li key={item.name} className="header__mobile-nav-item">
                  <Link
                    to={item.path}
                    className={`header__mobile-nav-link ${
                      location.pathname === item.path ? 'header__mobile-nav-link--active' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header__mobile-cta">
              <Button variant="primary" size="medium" href="/contact">
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;