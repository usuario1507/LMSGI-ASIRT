<script>
    let teoria=prompt("Introduce la nota de teoría");
    let practica=prompt("Introduce la nota de prácticas");
    function imprimeNota(NTeoria,NPractica){
       let resultado=0.6*NTeoria+0.4*NPractica;
       alert("El resultado de la evaluación es: "+resultado);
    }
    let imprimeNota2 = (NTeoria,NPractica) =>{ alert("El resultado de la evaluación es: "+(0.6*NTeoria+0.4*NPractica));}
    imprimeNota(teoria,practica);
    imprimeNota2(teoria,practica);
</script>