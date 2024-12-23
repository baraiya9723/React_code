import React from 'react';

function Navbar() {
  return (
    <nav>
      <h3>My Website</h3>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
        <li style={{ margin: '0 15px' }}><a href="#home">Home</a></li>
        <li style={{ margin: '0 15px' }}><a href="#about">About</a></li>
        <li style={{ margin: '0 15px' }}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
