import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarComponent: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Your existing Navbar links remain the same */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/research">Research</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;