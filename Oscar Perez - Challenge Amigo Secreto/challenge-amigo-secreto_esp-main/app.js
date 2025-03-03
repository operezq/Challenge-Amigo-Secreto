// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    let listaAmigos = document.getElementById("listaAmigos");
    let amigo = document.createElement("li");
    if (nombre === ""){
        alert("Debe ingresar un nombre válido")
        return;
    }

    amigos.push(nombre);
    amigo.innerText = nombre;
    listaAmigos.appendChild(amigo);

}

function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    resultado.innerText = "" 
    let amigoElegido = document.createElement("li");

    let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    if (amigos.length === 0){
        alert("Debe tener al menos un amigo para jugar")
        return;
    }
    amigoElegido.innerText = amigoAleatorio;
    resultado.appendChild(amigoElegido);
    console.log(amigoElegido)
}
