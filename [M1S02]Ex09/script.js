function carregar() {
    let inicio = Number(window.prompt("Digite um valor inicial: "))
    let raiz = Number(window.prompt("Digite um valor para raiz "))
    let soma = inicio
    let resAlert = ""

    resAlert = `P.A. = ${inicio}`
    res.innerHTML = `P.A. = ${inicio}`
    for (let c = 1; c <= 9; c++) {
        soma = soma + raiz
        resAlert += `, ${soma}`
        res.innerHTML += `, ${soma}`
    }
    window.alert(resAlert)
}