import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { address } from './constants';


const Contact = () => {
    return <>
        <section id="contact" className="contact section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Contact Us</p>
                <h4>Authorized Contractor & Service Provider for Indian Railway</h4>
            </div>{/* End Section Title */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">



                <div className="row gy-4">

                    <div className="col-lg-4">


                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <i className="bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p>{address.phone}, {address.phone1}</p>
                            </div>
                        </div>{/* End Info Item */}

                        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p>{address.email}, {address.email1}</p>
                            </div>
                        </div>{/* End Info Item */}



                    </div>

                    <div className="col-lg-8">
                        <iframe className='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25375.17425456398!2d77.23706349947894!3d28.537911891131873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e8cacc5ef9%3A0xa4b8a9f9198e4d6d!2sOkhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1723647667133!5m2!1sen!2sin" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>{/* End Contact Form */}

                </div>

            </div>

        </section >

    </>;
};

export default Contact;
