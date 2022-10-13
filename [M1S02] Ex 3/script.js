function carregar() {
    let num = Number(window.prompt("Digite um número para fazer sua tabuada: "))
    let res = window.document.getElementById("res")
    let txt = ""

    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `${num} x ${c} = ${num*c} <br/>`
        txt += `${num} x ${c} = ${num*c} \n` // esse é o jeito para fazer com que todos os números da tabuada apareçam em apenas um alert.
        console.log(num,c)
    }
    window.alert(txt)
}

//  \n  é como quebra a linha dentro da caixa alert.