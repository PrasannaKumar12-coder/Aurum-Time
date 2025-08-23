import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);
    const [scrolled, setScrolled] = useState(false);

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                // At very top → always show
                setShowNavbar(true);
            } else if (window.scrollY > lastScrollY) {
                // Scrolling down → hide
                setShowNavbar(false);
            } else {
                // Scrolling up → show
                setShowNavbar(true);
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    
      const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    return (
        <nav className={`navbar ${showNavbar ? "show" : "hide"} ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">

                {/* Mobile menu button */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></span>
                </div>

                {/* Brand section */}
                <div className="brand-section">
                    <div className="brand-name">
                        <a href="#home">Aurum Time</a>
                    </div>
                    <div className="brand-sub-name">
                        Luxury Beyond Time
                    </div>
                </div>

                {/* Navigation items */}
                <div className={`nav-items ${isMenuOpen ? 'nav-items-open' : ''} mobile-nav-content`}>
                    <div className="nav-links-section">
                        <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <div className="nav-dropdown" >
                            <a href="#shop" className="nav-link dropdown-toggle">
                                Shop <i className="fa-solid fa-angle-down"></i>
                            </a>
                            <div className="dropdown-menu">
                                <a href="#watches" onClick={() => setIsMenuOpen(false)}>Watches</a>
                                <a href="#straps" onClick={() => setIsMenuOpen(false)}>Straps</a>
                                <a href="#accessories" onClick={() => setIsMenuOpen(false)}>Accessories</a>
                                <a href="#collections" onClick={() => setIsMenuOpen(false)}>Collections</a>
                            </div>
                        </div>
                        <a href="#models" className="nav-link" onClick={() => setIsMenuOpen(false)}>Models</a>
                        <a href="#Brands" className="nav-link" onClick={() => setIsMenuOpen(false)}>Brands</a>
                    </div>

                    <div className="mobile-nav-icons">
                        <a href="#contact" className="icon-link" onClick={() => setIsMenuOpen(false)}>
                            <i className="fas fa-envelope"></i> Contact
                        </a>
                        <a href="#user" className="icon-link" onClick={() => setIsMenuOpen(false)}>
                            <i className="fas fa-user"></i> Account
                        </a>
                        <a href="#search" className="icon-link" onClick={() => setIsMenuOpen(false)}>
                            <i className="fas fa-search"></i> Search
                        </a>
                        <a href="#cart" className="icon-link" onClick={() => setIsMenuOpen(false)}>
                            <i className="fas fa-shopping-cart"></i> Cart
                        </a>
                    </div>
                </div>

                {/* Icons section - visible on desktop only */}
                <div className="nav-icons">
                    <a href="#contact" className="icon-link">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="#user" className="icon-link">
                        <i className="fas fa-user"></i>
                    </a>
                    <a href="#search" className="icon-link">
                        <i className="fas fa-search"></i>
                    </a>
                    <a href="#cart" className="icon-link">
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;