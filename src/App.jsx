import { useState } from 'react'

import viteLogo from '/vite.svg'
import Card from 'react-bootstrap/Card';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Typer from './components/Typer';
import Copyright from './components/Copyright';
//import AnimatedCursor from "react-animated-cursor";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    

      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Copyright />
    </div>
  )
}

export default App;
