import React from 'react';
import { electricalServices, signalingItems, telecomItems, electricalServicesCertification } from './constants';
const MainServices = () => {
    return <>

        <section id="services" className="services section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>Check our Services</p>
            </div>{/* End Section Title */}

            <div className="container bottom-mar">

                <div className="row gy-4">
                    <div className="features-image col-lg-5" data-aos="fade-up" data-aos-delay="100">
                        <img src="images/items1.png" alt="" /></div>
                    <div className="col-lg-6">



                        {signalingItems && signalingItems.map((el, index) => (

                            <><h3>{el.title}</h3>

                                <div className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="200">

                                    <div>
                                        {el.items.map((subItem, subIndex) => (
                                            <p key={subIndex} className='p-services'>  <i className="bi bi-arrow-right"></i>&nbsp;&nbsp;{subItem}</p>
                                        ))}

                                    </div>
                                </div></>))}

                        {/* End Features Item*/}






                    </div>
                </div>

            </div>

            <div className="container bottom-mar">

                <div className="row gy-4">

                    <div className="col-lg-6">



                        {telecomItems && telecomItems.map((el, index) => (

                            <><h3>{el.title}</h3>

                                <div className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="200">

                                    <div>
                                        {el.items.map((subItem, subIndex) => (
                                            <p key={subIndex} className='p-services'>  <i className="bi bi-arrow-right"></i>&nbsp;&nbsp;{subItem}</p>
                                        ))}

                                    </div>
                                </div></>))}

                        {/* End Features Item*/}






                    </div>

                    <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <img src="images/items2.png" alt="" /></div>
                </div>

            </div>

            <div className="container bottom-mar">

                <div className="row gy-4">
                    <div className="features-image col-lg-5" data-aos="fade-up" data-aos-delay="100">
                        <img src="images/items22.png" alt="" /></div>
                    <div className="col-lg-6">



                        {electricalServices && electricalServices.map((el, index) => (

                            <><h3>{el.title}</h3>

                                <div className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="200">

                                    <div>
                                        {el.items.map((subItem, subIndex) => (
                                            <p key={subIndex} className='p-services'>  <i className="bi bi-arrow-right"></i>&nbsp;&nbsp;{subItem}</p>
                                        ))}

                                    </div>
                                </div></>))}

                        {/* End Features Item*/}






                    </div>
                </div>

            </div>

        </section>

    </>;
};

export default MainServices;
