import Card from 'react-bootstrap/Card';
import Paper from '@mui/material/Paper';
import "../assets/project2.png";

import '../styles/Projects.css';
function Projects(){

    const projs = [
        {
            name: "Portfolio Website",
            desc: "My porfolio webiste built using React.js",
            git: "https://github.com/sha1v1/website",
            build: "HTML/CSS, JavaScript, React.js",
            image: "url(../assets/project2.png)"
        },

        {
            name: "Galactic Getaways",
            desc: "A high-fidelity prototype of a tool that has itenararies for space-travel and information regarding celestical objects. Built during NASA Space Apps Challenge 2023.",
            git: "https://www.figma.com/proto/Lx9jgApYoQGPkyZYMLMyM9/Space-Tourism?type=design&node-id=3-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2", //to be added
            build: "Figma",
            image: "" //to be added
        }
    ];

    return(
        <div className="projects-container" id="Projects">
            <h1>Projects/</h1>  
            <div className='cards-container'>
                {
                projs.map((p, i) => (
                    
                    <Paper 
                        key={i} 
                        style={{ width: '300px', height: '300px', backgroundColor: 'var(--card-bg)' }} 
                        className="card" 
                        elevation={20}
                        square={false}

                        >
                        
                            <div className='title'>{p.name}</div>
                            <div className="description"> {p.desc}</div>
                            <div className="subtitle">{p.build}</div>
                            <div> <a href={p.git} target="_blank" className="link">git</a></div>
                        
                    </Paper>
                ))
                }
            </div>
            
        </div>
    )


}

export default Projects;