const fullImgBox = document.getElementById("fullImgBox");
fullimg = document.getElementById("fullimg");

function openFullImg(reference) {
  fullImgBox.style.display = "flex";
  fullimg.src = reference;
}

function closeImg() {
  fullImgBox.style.display = "none";
}

function enviarFormulario(e) {
  // Prevenir que la página se recargue
  e.preventDefault();

  console.log("esto esta pasando");

  // Obtener los valores de los campos
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;

  // Validar los campos (aquí puedes agregar más validaciones según tus necesidades)
  if (nombre === "" || email === "" || telefono === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Mostrar una alerta de éxito
  alert("Los datos han sido enviados.");

  // Limpiar los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
}

// Agregar un evento submit al formulario
document
  .getElementById("solicitudTurnoForm")
  .addEventListener("submit", enviarFormulario);
