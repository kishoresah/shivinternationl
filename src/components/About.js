import React from 'react';

const About = () => {
    return <>
        <section id="about" className="about section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 order-2 order-lg-1 content">
                        <h3>About our Group</h3>
                        <p className="fst-italic">
                            <b>Shiv Shakti International (Estd. -2018) Harish Poddar (CEO) & HNRM Tele construction Pvt. Ltd (Estd.- 2021) Rajeev Poddar (CEO)</b>is a well-diversified and professionally managed company headquartered in Delhi, India.
                        </p>
                        <ul>
                            <li><i className="bi bi-check2-all"></i> <span><b>Shiv Shakti International </b>is authorized supplier and service provider of railway signaling and telecom equipment.</span></li>

                            <li><i className="bi bi-check2-all"></i> <span>we offer expertise in providing solutions related to railway signaling systems and telecommunication infrastructure for the railway industry.</span></li>

                            <li><i className="bi bi-check2-all"></i> <span><b>HNRM Tele Construction Pvt. Ltd. </b>is a specialized expansion focusing on construction work related to electrical installations.</span></li>

                            <li><i className="bi bi-check2-all"></i> <span> Additionally, HNRM is an authorized supplier and service provider for railway signaling and telecom equipment.</span></li>

                            <li><i className="bi bi-check2-all"></i> <span>Our group believes strongly in diversification, which is why we have established two separate companies to cater to diverse needs and opportunities.</span></li>


                        </ul>

                    </div>
                </div>

            </div>

        </section>

    </>;
};

export default About;
