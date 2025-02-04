let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido ingresado. Por favor, ingrese otro.");
    input.value = "";
    return;
  }
  amigos.push(nombre);
  input.value = "";
  actualizarLista();
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debe agregar al menos un nombre para sortear.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  document.getElementById(
    "resultado"
  ).innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}
