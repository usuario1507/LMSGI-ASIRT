<ul id="demo">
    <script>
       let jsonData = JSON.parse('[{"name":"Juan", "age":13, "car":"Ford"},{"name":"Pilar", "age":23, "car":"Seat"}]');
       let text = "Seat";
       let letter = text.charAt(0);
       //Procesar el contenido del JSON
       document.getElementById("demo").innerHTML = jsonData.map((elemento)=> {
         if(elemento.age>18){
            return "<li>" + elemento.name + ", "+elemento.age+"</li>";
         }
       });
    </script>
</ul>