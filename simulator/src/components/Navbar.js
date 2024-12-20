import React from 'react';
import { Link } from 'react-router-dom';
import simulation from '../assets/simulation.png';

const Navbar = () => {
  return (
    <nav className="navbar">
       <div className="logo-container">
        <img src={simulation} alt="Simulation Logo" className="logo" />
        SimuLAB
      </div>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
        <li>
          <Link to="/histogram">Histogram</Link>
        </li>
        <li>
          <Link to="/sensitivity">Sensitivity Table</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
