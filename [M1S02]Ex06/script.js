let calc = ""
do {
    calc = (window.prompt("Qual o calculo que você deseja fazer? ( + , - , * ou / )"))
} while ((calc !== "+") && (calc !== "-") && (calc !== "*") && (calc !== "/"))

let valor1;
let valor2;

do {
    valor1 = Number(window.prompt("Digite o primeiro número: "))  
} while (isNaN(valor1))

do {
    valor2 = Number(window.prompt("Digite o segundo número: "))
} while (isNaN(valor2))

let calculo = 0

switch (calc) {
    case "+":
        calculo = valor1 + valor2
        break
    case "-":
        calculo = valor1 - valor2
        break
    case "*":
        calculo = valor1 * valor2
        break
    case "/":
        calculo = valor1 / valor2
}
window.alert(`O resultado do seu cálculo é: ${calculo}`)

function carregar() {
    res.innerHTML = `O resultado do seu cálculo é: ${calculo}`
}