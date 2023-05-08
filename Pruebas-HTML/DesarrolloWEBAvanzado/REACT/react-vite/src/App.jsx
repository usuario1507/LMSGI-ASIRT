import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Cabecera, Cabecera2 } from './componentes/Cabecera'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p> Creando cabeceras en React </p>
    <Cabecera />
    <Cabecera2 />

      <p> Creando una lista en React </p>
    </div>
  )
}

export default App
