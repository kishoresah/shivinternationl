import { useEffect } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pageDescriptions, pageTitles } from './constants';

const Header = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const setMetaTags = (title, description) => {
        document.title = title;
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            metaDescription.content = description;
            document.head.appendChild(metaDescription);
        }
    };

    useEffect(() => {

        switch (location.pathname) {
            case "/services":
                setMetaTags(pageTitles.services, pageDescriptions.services);
                break;
            case "/about":
                setMetaTags(pageTitles.about, pageDescriptions.about);
                break;
            case "/contact":
                setMetaTags(pageTitles.contactus, pageDescriptions.contactus);
                break;
            case "/vision":
                setMetaTags(pageTitles.vision, pageDescriptions.vision);
                break;
            default:
                setMetaTags(pageTitles.home, pageDescriptions.home);
                break;
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-md bg-white">
            <div className="container">

                <Link className="navbar-brand" to="/"><img src="images/logo.png" alt="Logo" width={260} /></Link>

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse rtl" id="navbarsExample04">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/services') ? 'active' : ''}`} to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/vision') ? 'active' : ''}`} to="/vision">Vision</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
