import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partner from './components/Partner';
import Vision from './components/Vision';
const App = () => {
  return (
    <Router>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>



    </Router>
  );
};

export default App;