var empleado={
    nombre:"Pepe Perez",
    edad:27,
    deportes:["ajedrez","fútbol"],
    estaJubilado:function (){
    if (this.edad>65) {
    return true
    } else {
    return false
    }
    }
}

console.log(empleado.edad);
console.log(deportes);
console.log(Esta_jubilado);