function menuCalculadora(){
     let numero1,numero2,resultado;
     do{
        consulta=prompt("Introduce la operación a realizar (+,-,*,/) o indica -1 para salir:");
        switch(consulta){
            case '+':
                 numero1=prompt("Introduce número1: ");
                 numero2=prompt("Introduce número1: ");
                 alert(`El resultado es: ${numero1+numero2}`);
                 break;
            case '-':
                 numero1=prompt("Introduce número1: ");
                 numero2=prompt("Introduce número1: ");
                 alert(`El resultado es: ${numero1-numero2}`);
                 break;
            case '*':
                 numero1=prompt("Introduce número1: ");
                 numero2=prompt("Introduce número1: ");
                 alert(`El resultado es: ${numero1*numero2}`);
                 break;
             case '/':
                 numero1=prompt("Introduce número1: ");
                 numero2=prompt("Introduce número1: ");
                 alert(`El resultado es: ${numero1/numero2}`);
                 break;
             default:
                 alert("No está esa operación en el listado");
        }
    }while(consulta!=-1);
 }
 menuCalculadora();