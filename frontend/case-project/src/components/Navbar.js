// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
        <li style={{ margin: '0 1rem' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: '0 1rem' }}>
          <Link to="/add">Add Person</Link>
        </li>
        <li style={{ margin: '0 1rem' }}>
          <Link to="/list">Person List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
