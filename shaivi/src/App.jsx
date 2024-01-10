import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import ScrollIcon from './components/ScrollIcon';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar />
      <Home />
      <About />
      <Experience />
    </div>
  )
}

export default App;
