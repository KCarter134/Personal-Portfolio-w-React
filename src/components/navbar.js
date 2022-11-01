import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
      <div className="flex-container">
        <Link to="/" className="name"><i>Kyle Carter</i></Link>
        <nav className="navbar">
          <a href="/about" className="title">
            About
          </a>
          <a href="/portfolio" className="title">
            Portfolio
          </a>
          <a href="/contact" className="title">
            Contact
          </a>
          <a href="/resume" className="title">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;