import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Component/Count'      

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count/>
    </>
  )
}

export default App
