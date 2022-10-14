function carregar() {
    var idade = Number(window.prompt("Digite sua idade: "))

    var res = window.document.getElementById("res")

    if (isNaN(idade)) {
        window.alert("Idade inválida")
        res.innerHTML = `Desculpe, você digitou uma idade inválida.`
    } else if (idade <= 15) {
        window.alert("Você é jovem!")
        var classi = "jovem"
        res.innerHTML = `Você possui ${idade} anos de idade e é ${classi}.`
    } else if (idade <= 64) {
        window.alert("Você é adulto!")
        var classi = "adulto"
        res.innerHTML = `Você possui ${idade} anos de idade e é ${classi}.`
    } else if (idade >= 65) {
        window.alert("Você já é idoso!")
        var classi = "idoso"
        res.innerHTML = `Você possui ${idade} anos de idade e é ${classi}.`
    }
}

