import { useState } from 'react'

// import './App.css'
import {Cabecera, Cabecera2 } from './componentes/Cabecera'
import { Elementolista } from './componentes/Elementolista'
import { RedesSociales } from './componentes/RedesSociales'

function App() {
  const [count, setCount] = useState(0)
  let vector={1,4,77,34};
  let.enlace={
     
  };
  return (
    <div>
      <p> Creando cabeceras en React </p>
    <Cabecera loquesea="loquesea"/>
    <Cabecera2 mensaje="hola como estás" otro={vector}/>
    <Cabecera2 otro={vector}/>

      <p> Creando una lista en React </p>
      <ul>
        <Elementolista />
        <Elementolista />
      </ul>
      <ul>
        <RedesSociales enlaces={enlaces}/>

        <p>Componente</p>
      </ul>
    </div>
  )
}

export default App
