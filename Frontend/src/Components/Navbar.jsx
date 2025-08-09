import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">
          <Link to="/">DSP Elite Homes Ltd</Link>
        </h2>

        {/* Mobile Hamburger Menu */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation Links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-link">
            <HashLink smooth to="/#about-section" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </HashLink>
          </div>

          <div className="nav-item">
            <div className="nav-link-with-dropdown">
              <span>Services</span>
              <div className="submenu">
                <Link to="/buy" onClick={() => setIsMobileMenuOpen(false)}>Buy</Link>
                <Link to="/rent" onClick={() => setIsMobileMenuOpen(false)}>Rent</Link>
                <Link to="/lease" onClick={() => setIsMobileMenuOpen(false)}>Lease</Link>
              </div>
            </div>
          </div>

          <div className="nav-link">
            <Link to="/Enquiry" onClick={() => setIsMobileMenuOpen(false)}>Enquiry</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;