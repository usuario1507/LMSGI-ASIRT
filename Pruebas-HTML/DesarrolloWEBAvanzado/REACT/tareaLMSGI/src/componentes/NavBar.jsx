import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#home"><p className="texto">Home</p></a></li>
          <li><a href="#company"><p className="texto">Company</p></a></li>
          <li><a href="#services"><p className="texto">Services</p></a></li>
          <li><a href="#showcase"><p className="texto">Showcase</p></a></li>
          <li><a href="#support"><p className="texto">Support</p></a></li>
          <li><a href="#privacy"><p className="texto">Privacy</p></a></li>
          <li><a href="#contact"><p className="texto">Contact</p></a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
