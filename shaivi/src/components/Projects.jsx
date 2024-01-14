import Card from 'react-bootstrap/Card';

import '../styles/Projects.css';
function Projects(){

    const projs = [
        {
            name: "Portfolio Website",
            desc: "My porfolio webiste built using React.js",
            git: "https://github.com/sha1v1/website",
            build: "HTML/CSS, JavaScript, React.js",
            image: ""//to be added
        },

        {
            name: "Galactic Getaways: NASA Space Apps Challenge 2023",
            desc: "A high-fidelity prototype of a tool that has itenararies for space-travel and information regarding celestical objects",
            git: "https://www.figma.com/proto/Lx9jgApYoQGPkyZYMLMyM9/Space-Tourism?type=design&node-id=3-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2", //to be added
            build: "Figma",
            image: "" //to be added
        }
    ];

    return(
        <div className="project-container" id="Projects">
            <h1>Projects</h1>  
            <div className='cards-container'>
                {
                projs.map((p, i) => (
                    <Card key={i} style={{ width: '300px', height: '300px' }} className="card">
                        <Card.Body>
                            <Card.Title className='title'>{p.name}</Card.Title>
                            <Card.Subtitle className="subtitle">{p.build}</Card.Subtitle>
                            <Card.Text className="description"> {p.desc}</Card.Text>
                            <Card.Link href={p.git} target="_blank" className="link">git</Card.Link>
                        </Card.Body>
                    </Card>
                ))
                }
            </div>
            
        </div>
    )


}

export default Projects;