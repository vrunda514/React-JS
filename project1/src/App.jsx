import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './Components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Project/>
       
    </>
  )
}

export default App
