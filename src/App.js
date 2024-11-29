import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './pages/Home'; // Your Home page
import Services from './pages/Services'; // Your Services page
import About from './pages/About'; // Your About Us page
import Contact from './pages/Contact'; // Your Contact page
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
