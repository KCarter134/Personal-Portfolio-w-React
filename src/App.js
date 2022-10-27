import React from 'react';
import Nav from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Nav />
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
