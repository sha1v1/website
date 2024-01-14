import "../styles/Navbar.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Typer from "./Typer";

function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <div className="navLinks">
          <div className="page-link">
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navbar-name"
          >
            <Typer text="SHAIVI" />
          </Link>
          </div>
          <div className="page-link">
          <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
            
            <Typer text="ABOUT"/>
          </Link>
          </div>
          <div className="page-link">
          <Link
            to="Experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            
          >         
            <Typer text="EXPERIENCE" />
          </Link>
          </div>
          <div className="page-link">
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            
          >
            <Typer text="PROJECTS" />
          </Link>
          </div>
        </div>

        <div className="socials">
          <a href="www.linkedin.com/in/shaivi-gandhi">
            <FaLinkedin className="social-links" />
          </a>
          <a href="https://github.com/sha1v1">
            <FaGithub className="social-links" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
