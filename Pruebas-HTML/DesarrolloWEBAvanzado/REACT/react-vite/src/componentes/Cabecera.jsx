import React from 'react'

export const Cabecera = () => {
  return (
    <h1>Domingo López Oller</h1>
  )
}


export const Cabecera2 = ({mensaje="mensaje por defecto",otro}) => {
    return (
      <>
      <h2>{mensaje}</h2>
      <h2>{otro[3]}</h2>
      </>
    )
  }


let suma= (a,b) => {return a+b;}

export const CabeceraEstilos = (mensaje,Color) => {
  return (
  <>
  <h1 className={Color}>{mensaje}</h1>
  </>
  );
 };