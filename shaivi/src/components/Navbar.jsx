import '../styles/Navbar.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from 'react';
import {Link} from 'react-scroll';


function Navbar(){
    return(
        <>
        <nav className="Navbar">
            <div className="navLinks">
                <Link to="test1" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
       className="navbar-name" >Shaivi</Link>
                <Link to="About" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      > About</Link>
                <Link to="Experience" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      > Experience</Link>
                <Link to="Projects" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      > Projects</Link>
            </div>

            <div className="socials">
                <a href="www.linkedin.com/in/shaivi-gandhi"><FaLinkedin className="social-links" /></a>
                <a href="https://github.com/sha1v1"><FaGithub className="social-links"/></a>
             

            </div>
        </nav>

        
        </>
    );
};

export default Navbar;