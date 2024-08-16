import React, { useEffect } from 'react';
import Client from './Client';
import Footer from './Footer';
import Header from './Header';
import Partner from './Partner';
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import SubHome from './SubHome';
import MainServices from './MainServices';

const Home = () => {
    useEffect(() => {
        AOS.init({
            // You can customize the AOS settings here
            duration: 1000, // animation duration in milliseconds
        });
    }, []); // Empty dependency array to ensure it runs only once
    return <>
        <div className="index-page">

            <Header></Header>

            <main className="main">

                <SubHome></SubHome>

                {/* About Section */}
                <About></About>
                {/* /About Section */}



                {/* Features Section */}
                <MainServices></MainServices>

                {/* Clients Section */}
                <Client></Client>
                {/* /Clients Section */}
                {/* Partner Section */}
                <Partner></Partner>
                {/* /Clients Section */}

                {/* /Features Section */}

                {/* Services Section */}

                {/*<Services></Services>
                 /Services Section */}

                {/* Call To Action Section 
                <CalltoAction></CalltoAction>*/}
                {/* /Call To Action Section */}

                {/* Portfolio Section */}
                <Services></Services>
                {/* /Portfolio Section */}



                {/* Contact Section */}
                <Contact></Contact>
                {/* /Contact Section */}

            </main >

            <Footer></Footer>

            {/* Scroll Top */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


        </div >
    </>;
};

export default Home;
