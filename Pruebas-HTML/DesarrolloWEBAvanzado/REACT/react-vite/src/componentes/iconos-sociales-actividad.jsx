import React from 'react'
import fotoIES from "/headerIES.jpg";
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram}  from "react-icons/bs";
import {AiFillAndroid} from "react-icons/ai";
export const RedesSociales = () => {
  return (
    <div>
        <p> Incluir imágenes externas </p>
        <img src="../public/vite.svg" alt="logo de VITE" />
        <img src={fotoIES} alt="foto INSTITUTO CURA VALERA" />

        <p> Incluir iconos externos </p>
        <a href="https://www.facebook.com/"><FaFacebookF /></a>
        <a href="https://www.instagram.com/"><BsInstagram /></a>
        <a href="https://www.android.com/intl/es_es/"><AiFillAndroid /></a>
    </div>
  )
  }

  export const RedesSociales2 = ({enlaces}) => {
    let salida="";
      return (
        <>
      <a href={enlaces[i].url}><img src={enlaces[0].imagen} /></a>;
      <a href={enlaces[i].url}><img src={enlaces[1].imagen} /></a>;
      })</>
}

