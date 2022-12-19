import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
      <section className="header-container">
        <div className="name-container">
         <Link to="/" className="name"><i>Kyle Carter</i></Link>
        </div>
        <nav className="navbar">
          <Link to="/about" className="title">
            About
          </Link>
          <Link to="/portfolio" className="title">
            Portfolio
          </Link>
          <Link to="/contact" className="title">
            Contact
          </Link>
          <Link to="/resume" className="title">
            Resume
          </Link>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;