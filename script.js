
//Paramos el formulario 
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Mostrar en consola valores 
  console.log(event.target.elements);
  
  // Texto
  const name = event.target.name.value;
  const apellido = event.target.apellido.value;
  const email = event.target.email.value;
  const tlf = event.target.tlf.value;
  const comments = event.target.comments.value;  // Texto
  const select = event.target.select.value;  // Seleccionar

  // Empezamos avisios , vamos almacenando en la variable msj
  let msj = "";

  // EMPEZAMOS VALIDACIONES

  // NOMBRE  3 < fname < 15 required
  if (name.length < 3 || name.length > 15) {
      console.log("Nombre fuera de tamaño: 3-15");
      msj += "Nombre fuera de tamaño: 3-15\n";
  }

  // APELLIDO 3 < lname < 30 required
  if (apellido.length < 3 || apellido.length > 30) {
      console.log("Apellido fuera de tamaño: 3-30");
      msj += "Apellido fuera de tamaño: 3-30\n";
  }

  // SELECT
  if (select === "") {
      console.log("Selecciona particular/empresa");
      msj += "Selecciona particular/empresa\n";
  }

  // EMAIL 
  const emailPattern = /^[a-zA-Z0-9].*@[a-zA-Z]{3,}\.[a-zA-Z]{2,4}$/; // Modificada aquí
  if (!emailPattern.test(email)) {
      console.log("Error validación: " + email);
      msj += "Error validación: " + email + "\n";
  }

  // MOTIVO DE CONTACTO 
  if (comments.trim() === "") { // Usar .trim() para eliminar espacios en blanco
      console.log("Escribe el motivo de contacto");
      msj += "Escribe el motivo de contacto\n";
  }

  console.log(msj);

  // COMPROBAMOS SI HAY ERRORES
  if (msj.length != 0) {
      alert(msj);    // Muestra cuadro alerta con el mensaje de error

      // Crear un elemento pre para mostrar los errores
      let p = document.createElement("pre");
      let mensaje = document.createTextNode(msj);  // Nodo de texto con el mensaje de error

      p.appendChild(mensaje);   // Asegúrate de que añada el mensaje al elemento pre
      document.getElementById("contact").appendChild(p); // Agrega elemento pre al elemento id "contact"
  } else {
      // Enviar formulario
      alert("Formulario enviado con éxito");
      event.target.submit();
  }
});
