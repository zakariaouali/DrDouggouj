import { useState } from "react";
import "../styles/navStyle.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Close the menu
    };

    return (
        <nav>
            <a href="#"><img src={`${process.env.PUBLIC_URL}/images/DrLogo.png`} alt="Logo" />
            </a>
            <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
                <li><a href="#home" onClick={closeMenu}>Dr. Jihane Douggouj</a></li>
                <li><a href="#services" onClick={closeMenu}>Services</a></li>
                <li><a href="#localisation" onClick={closeMenu}>Localisation</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
            <a href="#rendez-vous"><button>Rendez-vous</button></a>
        </nav>
    );
}
