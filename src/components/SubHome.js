import React from 'react';
import { companyInfo } from './constants';
const SubHome = () => {
    return <>
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">

            <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

            <div className="container">

                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-xl-12 col-lg-8">
                        <h3>{companyInfo.name}<span></span></h3>
                        <p>It is indeed an honor to have the opportunity to work together with each and every one of you. we pride ourselves on being a leading supplier of high-quality railway equipment solutions tailored to meet the diverse needs of our clients.</p>
                        <p>
                            In this journey together, we're excited to collaborate with you to fulfill your railway equipment requirements efficiently and effectively.</p>
                        <p>
                            At our company, we believe that success is not just measured by individual achievements but by the strength of the relationships we cultivate and the positive impact we make in the lives of our clients. As we move forward, our commitment to excellence, integrity, and innovation remains unwavering. We are ready to collaborate, innovate, and exceed expectations as we chart a course towards a brighter future together.</p>
                        <p>
                            Thank you for entrusting us with your business and for being an invaluable part of our journey. Your partnership is the cornerstone of our success, and we eagerly anticipate many more years of collaboration, growth, and shared achievements.</p>
                    </div>
                </div>

                {/* <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
        <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
                <i className="bi bi-binoculars"></i>
                <h3><a href="">Lorem Ipsum</a></h3>
            </div>
        </div>
        <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-box">
                <i className="bi bi-bullseye"></i>
                <h3><a href="">Dolor Sitema</a></h3>
            </div>
        </div>
        <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
            <div className="icon-box">
                <i className="bi bi-fullscreen-exit"></i>
                <h3><a href="">Sedare Perspiciatis</a></h3>
            </div>
        </div>
        <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="icon-box">
                <i className="bi bi-card-list"></i>
                <h3><a href="">Magni Dolores</a></h3>
            </div>
        </div>
        <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
            <div className="icon-box">
                <i className="bi bi-gem"></i>
                <h3><a href="">Nemos Enimade</a></h3>
            </div>
        </div>
    </div>*/}

            </div>

        </section>{/* /Hero Section */}
    </>;
};

export default SubHome;
