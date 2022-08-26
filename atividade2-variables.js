function FazerContato() {
    var name = window.prompt ("Insira seu nome: ")
    window.alert ("Seja bem vindo, " + name + "!")
    console.log (`Hello, ${name}`)
}

function somar() {
    var n1 = parseInt (window.document.getElementById('n1').value)
    var n2 = parseInt (window.document.getElementById('n2').value)

    window.alert (`A soma vale ${n1 + n2}`)
}

function calcularFat () {
    var n = parseInt (window.document.getElementById("n").value)

    if (n<0) {
        window.alert ("Não é possível calcular fatorial de número negativo")
    }
    else {        
        var fat=1, temp = n

        if (n===0)
            fat=1

        else {
            while (temp!=1) {
                fat *= temp
                temp--
            }        
        }

        window.alert (`O fatorial de ${n} é ${fat}`)
    }
}

function calcularFatorial (n) {
    var fat=1, temp = n

    if (n===0) {
        fat=1
    }
    else if (n>0) {
        while (temp!=1) {
            fat *= temp
            temp--
        }        
    }
    else {
        fat=0
    }

    return fat
}

function calcularExponenciacao (value1, value2) {
    var result=1

    for (i=0; i<value2; i++){
        result *= value1
    }

    return result
}

var value1=0, value2=0, operation=""
var point = false

function realizarOp (simbolo) {

    if (operation==="") {
        if (value2 !== 0)
            value1 = parseFloat (value2)
    }
    else if (operation==="+"){
        value1 = value1 + value2
    }
    else if (operation==="-") {
        value1 = value1 - value2
    }
    else if (operation==="*"){
        value1 = value1 * value2
    }
    else if (operation==="/") {
        value1 = value1 / value2
    }
    else if (operation==="%"){
        value1 = value1 % value2
    }
    else if (operation==="^") {
        value1 = calcularExponenciacao(value1, value2)
    }

    operation = simbolo
    value2=0
    document.getElementById ('area').value += simbolo
}

function pegarNumero (numero) {
    console.log(4%2)

    if(document.getElementById ('area').value === "0") {
        value2 = parseFloat (numero)
        document.getElementById ('area').value = value2
    }    
    else {
        if(point) {
            value2 = parseFloat(value2 + "." + numero)
            point = false
        }
        else 
            value2 = parseFloat (value2 + numero)

        document.getElementById ('area').value += numero
    }

}

function gerarFatorial() {
    realizarOp("")

    document.getElementById('campo').value += "!"

    try {
        value1 = calcularFat(parseInt(value1))
    }
    catch {
        window.alert("Erro na conta")
    }

    value2=0
}

function verResultado() {
    realizarOpe("")
    window.alert("A conta gerada é de " + value1)
    document.getElementById('campo').value = value1
}

function limpar() {
    value1 = 0
    value2 = 0
    operation=""
    document.getElementById('campo').value = "0"
}

function changePoint() {
    point = true
    document.getElementById('campo').value += "."
}
