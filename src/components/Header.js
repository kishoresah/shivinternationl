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
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <a href="#" className="logo d-flex align-items-center me-auto me-lg-0">
                    {/* Uncomment the line below if you also wish to use an image logo */}
                    <img src="assets/img/logo.png" alt="" />
                    {/*<h1 className="sitename">GP</h1>*/}

                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#" className="active">Home<br /></a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#vision">Vision</a></li>
                        {/*<li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                        </li>*/}
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                {/* <a className="btn-getstarted" href="index.html#about">Get Started</a>*/}

            </div>
        </header>
    );
};

export default Header;
