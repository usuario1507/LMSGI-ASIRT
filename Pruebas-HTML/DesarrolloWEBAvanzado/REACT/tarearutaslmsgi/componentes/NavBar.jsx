import React from 'react'
import './navbar.css'

export const NavBar = () => {
  return (
    <div>
       <ul>
        <li><a href="#home"><p className="texto">Home</p></a></li>
        <li><a href="#about"><p className="texto">About</p></a></li>
      </ul>
    </div>
  )
}

export default NavBar
