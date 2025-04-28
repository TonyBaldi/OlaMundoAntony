let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario == ""){
    nomeUsuario = prompt("Qual é seu nome?");
}

if(nomeUsuario == null){
    elemento.textContent = "Seja bem vindo!";
}
else{
    elemento.textContent = nomeUsuario;
}