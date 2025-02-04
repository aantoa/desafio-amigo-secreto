let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }
  if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido ingresado.");
    return;
  }
  amigos.push(nombre);
  input.value = "";
}
