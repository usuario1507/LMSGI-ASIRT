<script>
    let frase="hola caracola";
    let letra='la';
    function programa = (cadena,busqueda) =>{
             let contador=0;
             for(let i=0;i<frase.length;i++){
                if(frase.substr(i,busqueda.length)==busqueda){
                    contador++;
                    i+=busqueda.lenght;
                }
             }
    }
</script>