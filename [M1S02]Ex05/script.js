let num = Number(window.prompt("Digite um número: "))
let c = 0
let par = 0
let impar = 0
let res = window.document.getElementById("res")

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
window.alert(`Entre 0 e ${num} tem ${par} números pares e ${impar} ímpares`)

function carregar() {
    res.innerHTML = `Entre 0 e ${num} tem ${par} números pares e ${impar} ímpares`
}
