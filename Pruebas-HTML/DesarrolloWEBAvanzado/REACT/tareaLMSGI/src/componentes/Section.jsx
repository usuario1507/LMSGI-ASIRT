import React from 'react'
import './section.css'
import MyCard from './MyCard'

export const Section = () => {
  return (
    <section>
        <MyCard color="naranja"/>
        <MyCard color="verde"/>
        <MyCard color="azul"/>
    </section>
  )
}
