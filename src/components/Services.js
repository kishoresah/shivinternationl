import React from 'react';
import { visionData } from './constants';
const Services = () => {
    return <>


        <section id="vision" className="services section1">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Vision</h2>
                <p>Check our Vision</p>
            </div>{/* End Section Title */}

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-eye"></i>
                            </div>
                            <a href="javascript:void(0)" className="stretched-link">
                                <h3>Our Vision</h3>
                            </a>
                            <p>Our vision is to be one of the top leaders in the supply of Railway Signaling and Telecom Equipment, setting the benchmark for reliability and sustainability in the industry. We aspire to become the trusted partner of choice for businesses seeking superior solutions that drive efficiency, safety, and progress in railway
                                operations.</p>
                        </div>
                    </div>{/* End Service Item */}

                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-flag"></i>
                            </div>
                            <a href="javascript:void(0)" className="stretched-link">
                                <h3>Our Mission</h3>
                            </a>
                            <p>To provide a comprehensive solution for all railway signaling and telecom equipment needs• Continuously prioritize customer requirements and deliver professional, flexible solutions and services that exceed customer expectations.</p>
                        </div>
                    </div>{/* End Service Item */}
                </div>

            </div>

            <div className="container section-title" data-aos="fade-up">
                <p><br></br>Our Strengths</p>
            </div>{/* End Section Title */}
            <div className="container">
                <div className="row gy-4">

                    {visionData && visionData.map((el) => (
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className={el.icon}></i>
                                </div>
                                <a href="javascript:void(0)" className="stretched-link">
                                    <h3>{el.title}</h3>
                                </a>
                                <p>{el.desc}</p>
                            </div>
                        </div>
                    ))}
                    {/* End Service Item */}






                </div>

            </div>

        </section></>;
};

export default Services;
