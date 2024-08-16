import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Client = () => {
    return <>
        <section id="clients" class="clients notsection">

            <div class="container" data-aos="fade-up" data-aos-delay="100">
                <div >
                    <h3>Our Clients</h3>
                </div>
                <Carousel autoPlay={true} infiniteLoop={true}>

                    <div className="row  border ">
                        <div className="border col-sm-3"> <img src="images/client1.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/client2.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/client3.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/client4.jpg" className="d-block w-100" alt="..." /></div>
                    </div>

                    <div className="row ">
                        <div className="border col-sm-3"> <img src="images/client5.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/client6.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/client7.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/client8.jpg" className="d-block w-100" alt="..." /></div>
                    </div>

                    <div className="row ">
                        <div className="border col-sm-3"> <img src="images/client9.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/client10.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/client11.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="border col-sm-3"> <img src="images/client12.jpg" className="d-block w-100" alt="..." /></div>
                    </div>
                </Carousel>
            </div>
        </section>
    </>;
};

export default Client;
