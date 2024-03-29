import React from 'react';
import Nav from './components/navbar';
import About from './components/home/about';
import Portfolio from './components/home/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
// NPM RUN DEPLOY {to publish to github pages}
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Nav />
    
    <div className="App">
      <Routes>
        <Route path="/Personal-Portfolio-w-React" element={<About />} />
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
