function carregar() {
    let res = window.document.getElementById("res")
    let valor = 0
    let soma = 1

    while (valor !== -1) {
        valor = Number(window.prompt("Digite valores para somar: (digite -1 para parar)"))
        if (isNaN(valor)) {
            window.alert("Desculpe, valor inválido!")
        } else {
            soma = soma + valor
        }
    }
    window.alert(soma) 
    res.innerHTML = `A soma dos valores digitados foi ${soma}.`
}