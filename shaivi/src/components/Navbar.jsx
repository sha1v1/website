import '../styles/Navbar.css';
import linkedinImage from  '/assets/linkedin-onSelect.svg';


function Navbar(){
    return(
        <>
        <nav className="Navbar">
            <div className="navLinks">
                <a href="#home" className="name" >Shaivi</a>
                <a href="#About" > About</a>
                <a href="#Experience" > Experience</a>
                <a href="#Projects" > Projects</a>
            </div>

            <div className="socials">
                <img className="social-icons" src={linkedinImage} alt="LinkedIn account hyperlink" />
            </div>
        </nav>

        
        </>
    );
};

export default Navbar;