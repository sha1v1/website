import '../styles/About.css';

function About(){

    const techs = ["Java", "Python", "React.js", "JavaScript", "Figma", "C++"]
    return(
        <div className="about-container" id="About">
            <h1>AboutMe/</h1>
         
            <section className='about-info'>I am a second year computer science student at <a href="https://www.dal.ca/" style={{color: "var(--medium-bright-pink)"}}>Dalhousie University</a>. 
            I am interested in Web and App development and Cybersecurity. Currently, I'm learning Node.js and playing around with
            React.js. Here's some of the technologies I'm familiar with: 
            

            <ul className='familiar-techs'>
                {techs.map((t,i)=> 
                    
                    <li key={i} className='tech-list-item'>{t}</li>
                    
                )}
            </ul>

            Outside of class, I enjoy skating, drawing and keeping up with scientific advancements. I also learn 
                Kyokushin Karate and have a yellow belt in the same.
            </section>
            
        </div>
    );
}

export default About;