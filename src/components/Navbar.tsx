import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutData from '../data/about.json';
import './Navbar.css';

const NavbarComponent: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">{aboutData.name.split(' ').map((w: string) => w[0]).join('')}</NavLink>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/research">Research</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
