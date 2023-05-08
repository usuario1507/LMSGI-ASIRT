var n = 0;
var numero;
var uno = 0;
var dos = 0;
var tres = 0;
var cuatro = 0;
var cinco = 0;
do {
    numero = Math.floor((Math.random() * 99) + 0);
    if ((numero != uno) && (numero != dos) && (numero != tres) && (numero !=cuatro) && (numero !=5)) {
        document.write(numero + "<br>");
        n++;
        if (n == 1) {
            uno = numero;
        }
        if (n == 2) {
            dos = numero;
        }
        if (n == 3) {
            tres = numero;
        }
        if (n == 4) {
          cuatro = numero;
        }
        if (n == 5) {
          cinco = numero;
        }
    }
} 
while (n < 5);