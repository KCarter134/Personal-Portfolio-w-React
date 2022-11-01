import React from 'react'

function Navbar() {
  return (
    <header className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <a href="https://www.linkedin.com/in/kylecarter134" className="link">
            <img className='pic' src='./images/linkedin.png' alt='linkedin' /> 
          </a>
          <a href="https://github.com/KCarter134" className="link">
            <img className='pic' src='./images/github.png' alt='github' />
          </a>
          <a href="https://stackoverflow.com/users/20361148/kcarter134" className="link">
            <img className='pic' src='./images/stack.png' alt='stack' />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;