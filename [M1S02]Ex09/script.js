function carregar() {
    let inicio;
    let raiz;

    do {
        inicio = Number(window.prompt("Digite um valor inicial: "))
        if (isNaN(inicio)) {
            window.alert("Desculpe, valor inválido!")
        }
    } while (isNaN(inicio))
    do {
        raiz = Number(window.prompt("Digite um valor para raiz "))
        if (isNaN(inicio)) {
            window.alert("Desculpe, valor inválido!")
        }
    } while (isNaN(raiz))

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