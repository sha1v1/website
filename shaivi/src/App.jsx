import { useState } from 'react'

import viteLogo from '/vite.svg'
import Card from 'react-bootstrap/Card';
import './App.css'
import Navbar from './components/Navbar';
import ScrollIcon from './components/ScrollIcon';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App;
