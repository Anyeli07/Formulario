let btn=document.getElementById("enviar");
let nombre=document.getElementById("fname");
let apellido=document.getElementById("lname");
let edad=document.getElementById("edad");
btn.addEventListener("click",function(evento){


    evento.preventDefault();
    let nombreAlerta=nombre.value;
    let apellidoAlerta=apellido.value;
    let edadAlerta=edad.value;
    if(edadAlerta < 18)
    alert("Eres menor de edad");
    if(edadAlerta >= 18)
    alert("Eres mayor de edad");
    
   
    alert("Hola "  + apellidoAlerta  +  nombreAlerta +  " tus datos se ingresaron corectamente ");
  
});

   