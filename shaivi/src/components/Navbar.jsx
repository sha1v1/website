import "../styles/Navbar.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Typer from "./Typer";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="navLinks">
          <div className="page-link">
          <Link
            to="Home"
            onClick={()=> {window.location.reload()}}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="navbar-name hover-fill"
          >
            <Typer text="SHAIVI" />
          </Link>
          </div>
          
          <div className="page-link">
          <Link to="About" spy={true} smooth={true} offset={-50} duration={500} className="hover-fill">
            
            <Typer text="ABOUT"/>
          </Link>
          </div>

          <div className="page-link">
          <Link
            to="Experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="hover-fill"
          >         
            <Typer text="EXPERIENCE" />
          </Link>
          </div>

          <div className="page-link">
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500} 
            className="hover-fill"          
          >
            <Typer text="PROJECTS" className />
          </Link>

          </div>
        </div>

        <div className="socials">
          <a target="_blank" href="https://www.linkedin.com/in/shaivi-gandhi/">
            <FaLinkedin className="social-links" style={{color: "var(--medium-bright-pink)"}} border/>
          </a>
          <a target="_blank" href="https://github.com/sha1v1">
            <FaGithub className="social-links" style={{color: "var(--medium-bright-pink)"}} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
