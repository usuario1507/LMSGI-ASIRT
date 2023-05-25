import React from 'react'
import './footer.css'
import {BsFacebook, BsTwitter,BsInstagram} from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.facebook.com/"><BsFacebook/></a>
        <a href="https://twitter.com/?lang=gl"><BsTwitter/></a>
        <a href="https://www.instagram.com/"><BsInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer
