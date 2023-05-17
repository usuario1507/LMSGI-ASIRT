import React from 'react'
import './Section.css'
import MyCard from './MyCard'

export const Section = () => {
  return (
    <section>
        <MyCard color="rojo"/>
        <MyCard color="verde"/>
        <MyCard color="gris"/>
        <MyCard bolor="azul"/>
    </section>
  )
}

export default Section
