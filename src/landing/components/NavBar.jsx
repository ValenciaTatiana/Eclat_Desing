import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../../assets/styles/navbar.css';

//Icons
import { PiGlobe, PiPalette } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuId = "primary-navigation";

    console.log(isMenuOpen)

    return (
        <nav className="navbar">
            <div className="navbar__logo-container">
                <Link className="navbar__logo" to="/">
                    {/* Replace with logo or brand name */}
                    <img src="/img/logo-blanco-pequeño.png" alt="Eclat Design logo" className="navbar__logo-img" width="120" height="40" decoding="async" />
                </Link>
            </div>

            <button className="navbar__hamburger" aria-label="Toggle menu" aria-controls={menuId} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen
                    ? <MdClose className="navbar__icon navbar__icon--close" />
                    : <FaBars className="navbar__icon navbar__icon--open" />
                }
            </button>

            <div id={menuId} className={`navbar__menu-container ${isMenuOpen ? "navbar__menu-container--open" : ""}`}>
                <div className="navbar__links-container">
                    <NavLink className="navbar__link" to="/" >
                        Home
                    </NavLink >
                    <NavLink className="navbar__link" to="/about-us">
                        About Us
                    </NavLink>
                    <NavLink className="navbar__link" to="/projects">
                        Projects
                    </NavLink>
                    <NavLink className="navbar__link" to="/testimonials">
                        Testimonials
                    </NavLink>
                    <NavLink className="navbar__link" to="/contact">
                        Contact
                    </NavLink>
                </div>

                <div className="navbar__dropdown-container">
                    <div className="navbar__dropdown">
                        <button className="navbar__dropdown-btn">
                            <PiPalette />Theme
                        </button>

                        <div className="navbar__dropdown-menu">
                            <div className="navbar__dropdown-item">Minimalist</div>
                            <div className="navbar__dropdown-item">Colorful</div>
                        </div>
                    </div>
                    <div className="navbar__dropdown">
                        <button className="navbar__dropdown-btn">
                            <PiGlobe />Language
                        </button>

                        <div className="navbar__dropdown-menu">
                            <div className="navbar__dropdown-item">English</div>
                            <div className="navbar__dropdown-item">Español</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}