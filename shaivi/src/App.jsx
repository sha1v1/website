import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import ScrollIcon from './components/ScrollIcon';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
    </>
  )
}

export default App;