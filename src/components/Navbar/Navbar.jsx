import React from "react";
import "../../styles/Navbar/Navbar.css";
import Logo from "../../assets/Logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Walled Logo" className="navbar-logo-img" />
            </div>
            <ul className="navbar-links">
                <li><a href="#dashboard" className="navbar-link">Dashboard</a></li>
                <li><a href="#transfer" className="navbar-link">Transfer</a></li>
                <li><a href="#topup" className="navbar-link">Topup</a></li>
                <li><a href="#signout" className="navbar-link">Sign Out</a></li>
            </ul>
            <div className="navbar-theme-toggle">
                <button className="theme-toggle-btn">🌞</button>
            </div>
        </nav>
    );
}

export default Navbar;