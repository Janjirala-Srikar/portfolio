import React from 'react';
import './styles.css';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div className="headSty navbar d-flex align-items-center justify-content-between p-2" style={{ height: '13vh' }}>
      <Link 
        className="navbar-brand fs-3 p-1" 
        to="home" 
        smooth={true} 
        offset={-70} 
        duration={30} 
      >
        Srikar Janjirala
      </Link>
      <div className="d-flex align-items-center">
        <ul className="navbar-nav flex-row">
          <li className="nav-item me-3">
            <Link 
              className="nav-link active" 
              to="home" 
              smooth={true} 
              offset={-70} 
              duration={30}
            >
              Home
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link 
              className="nav-link active" 
              to="about" 
              smooth={true}
              duration={30} 
              offset={-70}
            >
              About
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link 
              className="nav-link active" 
              to="skills" 
              smooth={true} 
              offset={-70} 
              duration={30}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link 
              className="nav-link active" 
              to="projects" 
              smooth={true} 
              offset={-70} 
              duration={30}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link 
              className="nav-link active" 
              to="contact" 
              smooth={true} 
              offset={-70} 
              duration={30}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
