
//Paramos el formulario 
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();


    //Mostrar en consola valores 
    console.log(event.target.elements);
    //Texto
    console.log(event.target.name.value);
    console.log(event.target.apellido.value);
    console.log(event.target.email.value);
    console.log(event.target.tlf.value);
    console.log(event.target.comments.value);
    //Seleccionar
    console.log(event.target.select.value)


    const name = event.target.name.value;
    const apellido = event.target.apellido.value;
    const email = event.target.email.value;
    const tlf = event.target.tlf.value;  
    const comments = event.target.comments.value;  //Texto
    const select = event.target.select.value;  //Seleccionar



//Empezamos avisios , vamos almacenando en la variable msj
    let msj = "";

//EMPEZAMOS VALIDACIONES

 //NOMBRE  3 < fname < 15required
 if (name.length < 3 || name.length > 15) {
    //err
    console.log("Nombre fuera de tamaño: 3-15");
    msj += "Nombre fuera de tamaño: 3-15\n";
  }


// APELLIDO 3 < lname < 30 required
if (apellido.length < 3 || apellido.length > 30) {
    console.log("Apellido fuera de tamaño: 3-30");
    msj += "Apellido fuera de tamaño: 3-30\n";
  }

//SELECT

if (select == "") {
    console.log("Selecciona particular/empresa");
    msj += "Selecciona particular/empresa\n";
  }

 


  //EMAIL 

  if ((!email.endsWith(".com") && !email.endsWith(".es")) ||
    !email.includes("@")
  ) {
    console.log("Error validación: " + email);
    msj += "Error validación: " + email+"\n";
  }




  //MOTIVO DE CONTACTO 

  if (comments.trim() === "") { // Usar .trim() para eliminar espacios en blanco
    console.log("Escribe el motivo de contacto");
    msj += "Escribe el motivo de contacto\n";
}



  console.log(msj);


  // COMPROBAMOS SI HAY ERRRORES
  if (msj.length != 0) {
    alert(msj);    //Muestra cuadro alerta con el mensaje de error

    
    let p = document.createElement("pre");  //elemento pre para mostrar los errores
    let mensaje = document.createTextNode(msj);  //nodo de texto con el mensaje de error

    p.appendChild(mensaje);   //asegurarse de que añada el mensaje al elemento pre
    document.getElementById("contact").appendChild(p); // dibuja resultado , agrega elemento pre al elemento id "contact"
  }
  else{
    //Enviar formulario
    //document.querySelector("form").submit();
    alert("Formulario enviado con éxito");
    event.target.submit();
  }
});



