import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partner from './components/Partner';
import Services from './components/Services';
import Vision from './components/Vision';
const App = () => {
  return (
    <Router>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vision" element={<Vision />} />
        </Routes>
      </main>



    </Router>
  );
};

export default App;