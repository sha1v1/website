import '../styles/About.css';

function About(){
    return(
        <div className="about-container" id="About">
            <h1>About me</h1>
            <section>I am a second year computer science student at <a href="https://www.dal.ca/">Dalhousie University</a>. 
            I am interested in Web and App development and Cybersecurity. Currently, I'm learning Node.js and playing around with
            React.js. Here's some of the technologies I'm familiar with: 
            </section>

            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Figma</li>
            </ul>

            <section>Outside of class, I enjoy skating, drawing and keeping up with scientific advancements. I also learn 
                Kyokushin Karate and have a yellow belt in the same.
            </section>
        </div>
    );
}

export default About;