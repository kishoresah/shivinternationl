import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Partner from './Partner';
import Client from './Client';
const Home = () => {



    return <>
        <div className="bg-hero">

            <div className="overlaybg">

                <Header></Header>

                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm-10 mx-auto font-size24">
                            {/*<h1>Authorized
                                        Contractor
                                        Of Indian
                                        Railways
                                    </h1>
                                    Signaling & Telecommunication Products supplier of
                                        Indian Railways & Contractors for their
                                        requirement in Indian Railway*/}
                            <p> &nbsp;</p>

                            <p>    It is indeed an honor to have the opportunity to work together with each and every one of you. we pride ourselves on being a leading supplier of high-quality railway equipment solutions tailored to meet the diverse needs of our clients.</p>
                            <p> In this journey together, we're excited to collaborate with you to fulfill your railway equipment requirements efficiently and effectively.</p>
                            <p>  At our company, we believe that success is not just measured by individual achievements but by the strength of the relationships we cultivate and the positive impact we make in the lives of our clients. As we move forward, our commitment to excellence, integrity, and innovation remains unwavering. We are ready to collaborate, innovate, and exceed expectations as we chart a course towards a brighter future together.</p>
                            <p> Thank you for entrusting us with your business and for being an invaluable part of our journey. Your partnership is the cornerstone of our success, and we eagerly anticipate many more years of collaboration, growth, and shared achievements.</p>



                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-sm-10 mx-auto text-center ">



                            <Partner></Partner>
                            <Client></Client>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>

    </>;
};

export default Home;
