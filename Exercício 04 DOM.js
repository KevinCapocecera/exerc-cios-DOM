var nome = 0
var tel = 0

function add() {
    nome = document.getElementById("nome").value;
    tel = document.getElementById("telefone").value;

    document.getElementById("list").appendChild(document.createElement("li")).innerHTML += (nome + " - " + tel);

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";

    document.getElementById("nome").focus();
}

function remover() {
    var rem = document.getElementById("list");
    rem.removeChild(rem.lastChild);
}