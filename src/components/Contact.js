import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    return <>
        <div className="bg-hero">

            <div className="overlaybg">

                <Header></Header>

                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm-6 mx-auto text-center ">
                            <div className="text-middle">
                                <div className="text">
                                    <h1>Group of
                                        SHIV SHAKTI
                                        INTERNATIONAL
                                        &<br></br>
                                        HNRM Tele Construction
                                        Pvt Ltd.

                                    </h1>

                                    <p className="text-center ">
                                        Authorized Contractor & Service Provider
                                        for Indian Railway
                                    </p>
                                    <p className="text-center ">

                                        Office Address : C-99 Ground Floor
                                        DDA Shed Okhala Industrial Area
                                        Phase -1 New Delhi - 110020

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mx-auto text-center ">
                            <div className="text-middle-img">
                                <div className="text">
                                    <img src='images/about.png' className='img-fluid img-train'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>

    </>;
};

export default Contact;
