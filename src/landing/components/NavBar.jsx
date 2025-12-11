import { Link, NavLink } from "react-router-dom";
import '../../assets/styles/navbar.css';
import { PiGlobe, PiPalette } from "react-icons/pi";

export const NavBar = () => {

    return (
        <nav className="navbar">
            <div className="navbar__logo-container">
                <Link className="navbar__logo" to="/">
                    {/* Replace with logo or brand name */}
                    <img src="/img/logo-blanco-pequeño.png" alt="Eclat Design logo" className="navbar__logo-img" width="120" height="40" decoding="async" />
                </Link>
            </div>

            <div className='navbar__links-container'>
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

            <div className="navbar__selectors-container">
                <div className="navbar__selector-theme">
                    <span><PiPalette /></span>
                    <select name="" id="">
                        <option value="">Minimalist</option>
                        <option value="">Colorfull</option>
                    </select>
                </div>
                <div className="navbar__selector-language">
                    <span><PiGlobe /></span>
                    <select name="" id="">
                        <option value="EN">EN</option>
                        <option value="ES">ES</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}