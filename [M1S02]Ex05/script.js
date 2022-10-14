let num = Number(window.prompt("Digite um número: "))
let c = 0
let par = 0
let impar = 0
let res = window.document.getElementById("res")

if (isNaN(num)) {
    window.alert("Desculpe, número inválido!")
}

if (c <= num) {
    while (c <= num) {
        if (c % 2 == 0) {
            par++
        } else if (c % 2 == 1) {
            impar++
        }
        c++
    }
} else {
    while (c >= num) {
        if (c % 2 == 0) {
            par++
        } else if (c % 2 == -1) {
            impar++
        }
        c--
    }
}
function carregar() {
    if (isNaN(num)) {
        res.innerHTML = `Entre 0 e um número inválido, não existem números pares e ímpares.`
    } else {
        window.alert(`Entre 0 e ${num} tem ${par} números pares e ${impar} ímpares`)

        res.innerHTML = `Entre 0 e ${num} tem ${par} números pares e ${impar} ímpares`
    }
    
}
