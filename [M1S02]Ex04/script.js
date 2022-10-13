function carregar() {
    //let valor = Number(window.prompt("Digite valores para somar: "))
    //let soma = soma + valor
    let res = window.document.getElementById("res")
    let valor = 0
    let soma = 0

    while (valor !== -1) {
        valor = Number(window.prompt("Digite valores para somar: "))
        soma = soma + valor
    }
    window.alert(soma) 
    res.innerHTML = `A soma dos valores digitados foi ${soma}.`
}
//  \n  é como quebra a linha dentro da caixa alert.