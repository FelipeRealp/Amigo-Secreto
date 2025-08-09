// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let nuevoAmigo = "";
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    nuevoAmigo = inputAmigo.value;
    if (nuevoAmigo === "") {
        alert("Por favor ingrese un nombre válido")
        return
    }
    if (!amigos.includes(nuevoAmigo)) {
        resultado.innerHTML = "";
        amigos.push(nuevoAmigo)

        actualizarListaAmigos();

    } else {
        alert(`${nuevoAmigo} ya esta en la lista de amigos`)
    }
    inputAmigo.value = "";

}

function actualizarListaAmigos() {
    const li = document.createElement("li");
    li.textContent = nuevoAmigo;

    listaAmigos.appendChild(li)
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes agregar amigos a la lista para poder sortear")
    } else {
        listaAmigos.innerHTML = "";

        const li = document.createElement("li");

        li.textContent = `El amigo secreto sorteado es: ${amigos[Math.floor(Math.random() * amigos.length)]}`
        resultado.appendChild(li)

        amigos = [];
    }

}