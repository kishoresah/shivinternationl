import React from 'react';
import { address, companyInfo } from './constants';
const Footer = () => {
    return (

        <footer id="footer" className="footer dark-background">

            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span className="sitename">{companyInfo.name}</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>{address.address1}</p>
                                <p>{address.address2}</p>
                                <p>{address.address3}</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>{address.phone}</span></p>
                                <p><strong>Email:</strong> <span>{address.email}</span></p>
                            </div>
                            <div className="social-links d-flex mt-4">
                                <a href={
                                    companyInfo.twitter}><i className="bi bi-twitter-x"></i></a>
                                <a href={companyInfo.facebook}><i className="bi bi-facebook"></i></a>
                                <a href={companyInfo.insta}><i className="bi bi-instagram"></i></a>
                                <a href={companyInfo.linkedin}><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#"> Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#about"> About us</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#contact"> Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#services"> Services</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#vision"> Vision</a></li>
                            </ul>
                        </div>



                    </div>
                </div>
            </div>

            <div className="copyright">Copyright 1999-2024
                <div className="container text-center">
                    <p>© <span>Copyright 2024 </span> <strong className="px-1 sitename">{companyInfo.name}</strong> <span>All Rights Reserved</span></p>
                    <div className="credits">

                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
