import React from 'react';
import Nav from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
// import PDF from './assets/pdf/Kyle_Carter_Resume.pdf'
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Nav />
    
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path ="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} /> 
        {/* <Resume pdf={PDF} /> */}
      </Routes>
    </div>
    <Footer />
    
    </>
  );
}

export default App;
