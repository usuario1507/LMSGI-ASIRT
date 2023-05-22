import React from 'react'

export function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      alert('You clicked submit.');
    }
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
}
let nombre = "Domingo López";
const cambiarNombre=(nuevoNombre) =>{ nombre=nuevoNombre; }
export const Cabecera = () => {
 return (
 <>
<h1>Mi nombre es: {nombre}</h1>
<button onClick={e => cambiarNombre("otro nombre")}>texto2</button>
 </>
 );
};

export const CabeceraHook1 = () => {
    const [nombre,setNombre]=useState("Domingo López");
    const cambiarNombre=(nuevoNombre) =>{
   setNombre(nuevoNombre);
    }
    return (
    <>
    <h1>Mi nombre es: {nombre}</h1>
    <button onClick={e => cambiarNombre("otro nombre")}>texto2</button>
    </>
    );
   };
