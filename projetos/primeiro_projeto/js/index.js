const PI = 3.14;

function chamar() {
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var result = nota1 + nota2 + nota3;
    var notas = [nota1, nota2, nota3]
    console.log(notas)
    console.log(result);
}

var clientes = ["Joao", "Maria", "Pedro"];

clientes.forEach(element => {
    console.log("Usuário: "+element);
});

for (var i = 0; i < clientes.length; i++) {
    console.log(clientes[i]);
}


