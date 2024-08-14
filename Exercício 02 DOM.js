function pesquisa() {
    var pesquisa = document.getElementById("pesquisa").value

    var lista = document.querySelectorAll('ol li');

    for (var i = 0; i < lista.length; i++) {
        if (pesquisa != "" && lista[i].textContent.toLowerCase().startsWith(pesquisa.toLowerCase())) {
            lista[i].innerHTML = "<b>" + lista[i].innerHTML + "</b>";

        } else {
            lista[i].innerHTML = lista[i].textContent;
        }
    }
}