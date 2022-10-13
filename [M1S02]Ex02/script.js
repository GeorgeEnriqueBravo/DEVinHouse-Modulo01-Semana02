function carregar() {
    var idade = Number(window.prompt("Digite sua idade: "))

    var res = window.document.getElementById("res")

    if (idade <= 15) {
        window.alert("Você é jovem!")
    var classi = "jovem"
    } else if (idade <= 64) {
        window.alert("Você é adulto!")
    var classi = "adulto"
    } else if (idade >= 65) {
        window.alert("Você já é idoso!")
    var classi = "idoso"
    }

res.innerHTML = `Você possui ${idade} anos de idade e é ${classi}.`
}

