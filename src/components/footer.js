import React from 'react'
import Linked from "../assets/images/linkedin.png"
import Github from "../assets/images/github.png"
import Stack from "../assets/images/stack.png"

function Navbar() {
  return (
    <header className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <a href="https://www.linkedin.com/in/kylecarter134" className="link">
            <img className='pic' src={Linked} alt='linkedin' /> 
          </a>
          <a href="https://github.com/KCarter134" className="link">
            <img className='pic' src={Github} alt='github' />
          </a>
          <a href="https://stackoverflow.com/users/20361148/kcarter134" className="link">
            <img className='pic' src={Stack} alt='stack' />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;