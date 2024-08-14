var min = 0
var max = 0
var result = 0

function contar() {
    min = parseInt(document.getElementById("min").value);
    max = parseInt(document.getElementById("max").value);
    console.log(min);
    console.log(max);

    if (min > max) {
        alert("O minimo tem que ser menor que o maximo");
    } else {
        for (var i = min; i <= max; i++) {
            if (i % 2 == 0 && i % 3 == 0) {
                result = result + 1
                document.getElementById("result").innerHTML = result
            }

        }
        result = 0
        document.getElementById("min").value = "";
        document.getElementById("max").value = "";
        document.getElementById("min").focus();

    }
}
document.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        contar();
    }
})

