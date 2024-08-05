import React from 'react';
import Header from './Header';
import Partner from './Partner';
import Footer from './Footer';
import { electricalServices, signalingItems, telecomItems, electricalServicesCertification } from './constants';
const Services = () => {
    return <>

        <div className="overlaybg">
            <Header></Header>


            <div className="bg-hero-service">



                <div className="container">
                    <h1 className="mt-5">Services</h1>
                    <div className="mt-5">



                        {signalingItems && signalingItems.map((el, index) => (

                            <div className="row mb-2" key={index}>
                                <div className="col-md-6">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">



                                            <p className="card-text mb-auto">We specialize in supplying high-
                                                quality railway signal equipment,
                                                including signal lights,
                                                switches, and advanced
                                                communication systems, ensuring
                                                safe and efficient rail operations."</p>

                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img src="images/track.png" />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">

                                            <h3 className="mb-0">{el.title}</h3>

                                            <ul>
                                                {el.items.map((subItem, subIndex) => (
                                                    <li key={subIndex}>{subItem}</li>
                                                ))}
                                            </ul>

                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img src="images/telecom.png" />

                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    <div className="mt-5">



                        {telecomItems && telecomItems.map((el, index) => (

                            <div className="row mb-2" key={index}>
                                <div className="col-md-6">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">



                                            <p className="card-text mb-auto">We specialize in supplying high-
                                                quality railway signal equipment,
                                                including signal lights,
                                                switches, and advanced
                                                communication systems, ensuring
                                                safe and efficient rail operations."</p>

                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img src="images/track.png" />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">

                                            <h3 className="mb-0">{el.title}</h3>

                                            <ul>
                                                {el.items.map((subItem, subIndex) => (
                                                    <li key={subIndex}>{subItem}</li>
                                                ))}
                                            </ul>

                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img src="images/telecom.png" />

                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    <div className="mt-5">



                        {electricalServices && electricalServices.map((el, index) => (

                            <div className="row mb-2" key={index}>
                                <div className="col-md-6">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">



                                            <p className="card-text mb-auto">We specialize in supplying high-
                                                quality railway signal equipment,
                                                including signal lights,
                                                switches, and advanced
                                                communication systems, ensuring
                                                safe and efficient rail operations."</p>

                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img src="images/track.png" />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">

                                            <h3 className="mb-0">{el.title}</h3>

                                            <ul>
                                                {el.items.map((subItem, subIndex) => (
                                                    <li key={subIndex}>{subItem}</li>
                                                ))}
                                            </ul>

                                        </div>
                                        <div className="col-auto d-none d-lg-block">
                                            <img src="images/telecom.png" />

                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    <div className="mt-5">



                        {electricalServicesCertification && electricalServicesCertification.map((el, index) => (

                            <div className="row mb-2" key={index}>

                                <div className="col-md-12">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">

                                            <h3 className="mb-0">{el.title}</h3>

                                            <ul>
                                                {el.items.map((subItem, subIndex) => (
                                                    <li key={subIndex}>{subItem}</li>
                                                ))}
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>


                </div>




            </div>

            <Footer />

        </div></>;
};

export default Services;
