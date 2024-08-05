import React from 'react';
import Header from './Header';
import Partner from './Partner';
import Footer from './Footer';
import { visionData } from './constants';
const Vision = () => {
    return <>

        <div className="overlaybg">
            <Header></Header>


            <div className="bg-hero-service">



                <div className="container">
                    <h1 className="mt-5">Vision/Mission</h1>
                    <div className="mt-5">
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">

                                        <h3 className="mb-0"><i className="fa fa-search" aria-hidden="true"></i> Our Vision
                                        </h3>

                                        <p className="card-text mb-auto">Our vision is to be one of the top leaders in the supply of Railway Signaling and Telecom Equipment, setting the benchmark for reliability and sustainability in the industry. We aspire to become the trusted partner of choice for businesses seeking superior solutions that drive efficiency, safety, and progress in railway
                                            operations.</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">

                                        <h3 className="mb-0"><i className="fa fa-plane" aria-hidden="true"></i> Our Mission</h3>

                                        <p className="mb-auto">To provide a comprehensive solution for all railway signaling and telecom equipment needs• Continuously prioritize customer requirements and deliver professional, flexible solutions and services that exceed customer expectations.</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="container">
                    <h1 className="mt-5">Our Strengths</h1>
                    <div className="mt-5">
                        <div className="row mb-2">



                            {visionData && visionData.map((el) => (
                                <div className="col-md-6">

                                    <div className="card row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="card-body text-center">
                                            <div className="col p-4 d-flex flex-column position-static">
                                                <div className="icon-title">

                                                    <i className={el.icon}></i>

                                                    <h3 className="mb-0">{el.title}</h3>
                                                </div>
                                                <p className="card-text mb-auto">{el.desc}</p>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            ))}




                        </div>
                    </div>


                </div>





            </div>

            <Footer />

        </div></>;
};

export default Vision;
