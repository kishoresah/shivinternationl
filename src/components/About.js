import React from 'react';
import Header from './Header';
import Partner from './Partner';
import Footer from './Footer';

const About = () => {
    return <>
        <div className="bg-hero bg-hero-inner">
            <div className="overlaybg">
                <Header></Header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 mx-auto">
                            <div className="text-middle">
                                <div className="text">
                                    <h1>About our Group
                                    </h1>
                                    <p> <span> Shiv Shakti International (Estd. -2018)</span> & HNRM Tele construction Pvt. Ltd (Estd.- 2021) is a well-diversified and professionally managed company headquartered in Delhi, India.
                                    </p>

                                    <p> <span> Shiv Shakti International </span> is authorized supplier and service provider of railway signaling and telecom equipment. we offer expertise in providing solutions related to railway signaling systems and
                                        telecommunication infrastructure for the railway industry.
                                    </p>

                                    <p>
                                        <span>HNRM Tele Construction Pvt. Ltd. </span> is a specialized expansion focusing on construction work related to electrical installations. Additionally, HNRM is an authorized supplier and service provider for railway signaling and telecom equipment.
                                        Our group believes strongly in diversification, which is why we have established two separate companies to cater to diverse needs and opportunities.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className='mb-3'>
                                    <h2>Our Group Organogram</h2>
                                    <h4>Our Group</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">

                                            <h3 className="mb-0">Shiv Shati International (Harish Poddar
                                                (CEO))
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                        <div className="col p-4 d-flex flex-column position-static">
                                            <h3 className="mb-0">HNRM Tele
                                                Construction Pvt. Ltd. (Rajeev Poddar
                                                (CEO))
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div></div></>;
};

export default About;
