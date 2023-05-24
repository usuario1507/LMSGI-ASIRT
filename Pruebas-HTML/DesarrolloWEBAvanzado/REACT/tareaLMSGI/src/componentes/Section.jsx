import React from 'react'
import './section.css'
import MyCard from './MyCard'

export const Section = () => {
  return (
    <section>
        <MyCard imagen="/img/carousel_24-min.png" titulo="Company" color="naranja"/>
        <MyCard imagen="/img/clientes.jpg" titulo="Services" color="verde"/>
        <MyCard imagen="/img/servicios.jpg" titulo="Clients" color="azul"/>
    </section>
  )
}
