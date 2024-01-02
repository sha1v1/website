import '../styles/Navbar.css';

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
        </nav>

        
        </>
    );
};

export default Navbar;