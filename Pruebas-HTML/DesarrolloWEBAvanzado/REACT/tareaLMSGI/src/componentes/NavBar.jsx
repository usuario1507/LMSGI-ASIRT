import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {FaHome} from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { MdBusiness,MdPrivacyTip } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { CiShirt } from "react-icons/ci";
import { GrServices } from "react-icons/gr";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#home"> <p className="icono"><FaHome /></p> <p className="Home">Home</p></a></li>
          <li><a href="#company"><p className="icono"><MdBusiness /></p> <p className="Company">Company</p></a></li>
          <li><a href="#services"><p className="icono"><GrServices /></p> <p className="Services">Services</p></a></li>
          <li><a href="#showcase"><p className="icono"><CiShirt /></p> <p className="Showcase">Showcase</p></a></li>
          <li><a href="#support"> <p className="icono"><BiSupport /></p> <p className="Support">Support</p></a></li>
          <li><a href="#privacy"><p className="icono"><MdPrivacyTip /></p> <p className="Privacy">Privacy</p></a></li>
          <li><a href="#contact"><p className="icono"><FcContacts /></p> <p className="Contact">Contact</p></a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
