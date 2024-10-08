import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Partner = () => {
    return <>
        <section id="partner" class="clients notsection">

            <div class="container" data-aos="fade-up" data-aos-delay="100">
                <div >
                    <h3>Oem Partner</h3>
                </div>
                <Carousel autoPlay={true} infiniteLoop={true}>

                    <div className="row  border ">
                        <div className="border col-sm-3"> <img src="images/1.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/2.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/3.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/4.jpg" className="d-block w-100" alt="..." /></div>
                    </div>

                    <div className="row ">
                        <div className="border col-sm-3"> <img src="images/5.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/6.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/7.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/8.jpg" className="d-block w-100" alt="..." /></div>
                    </div>

                    <div className="row ">
                        <div className="border col-sm-3"> <img src="images/9.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/10.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/11.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/1.jpg" className="d-block w-100" alt="..." /></div>
                    </div>
                </Carousel>
            </div>
        </section>
    </>;
};

export default Partner;
