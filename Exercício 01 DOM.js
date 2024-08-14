var num = ""
function resultado() {
    document.getElementById('resultado').innerHTML = "";
    num = document.getElementById('display').value;
    if (num == "") {
        alert("digite um valor");
        document.getElementById('resultado').innerHTML = "";

    } else if (isNaN(num)) {
        alert("Cê é burro? Existe tabuada disso?");
        document.getElementById('resultado').innerHTML = "";
    } else {
        for (var i = 0; i <= 10; i++) {
            document.getElementById('resultado').innerHTML += (num + " x " + i + " = " + (num * i) + "<br>");
        }
    }

    document.getElementById("display").value = "";
    document.getElementById("display").focus();

}

