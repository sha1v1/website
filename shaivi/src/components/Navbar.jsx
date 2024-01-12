import '../styles/Navbar.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Navbar(){
    return(
        <>
        <nav className="Navbar">
            <div className="navLinks">
                <a href="#home" className="navbar-name" >Shaivi</a>
                <a href="#About" > About</a>
                <a href="#Experience" > Experience</a>
                <a href="#Projects" > Projects</a>
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