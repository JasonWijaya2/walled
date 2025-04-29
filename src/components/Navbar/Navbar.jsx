import React, { useEffect, useRef } from "react";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Navbar({ children, onSignOut }) {
    const navbarRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const navbarHeight = navbarRef.current.offsetHeight;
        const contentContainer = document.getElementById("content-container");
        if (contentContainer) {
            contentContainer.style.paddingTop = `${navbarHeight}px`;
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("user-token");
        onSignOut();
        navigate("/login");
    };

    return (
        <>
            <nav ref={navbarRef} className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={Logo} alt="Walled Logo" height="40" className="me-2" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" href="#dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" href="#transfer">Transfer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold" href="#topup">Topup</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link fw-semibold"
                                    onClick={handleSignOut}
                                    style={{ cursor: "pointer" }}
                                >
                                    Sign Out
                                </a>
                            </li>
                        </ul>
                        <button className="btn btn-light ms-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div id="content-container">
                {children}
            </div>
        </>
    );
}

export default Navbar;
