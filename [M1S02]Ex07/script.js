function carregar() {

    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    mes++

    if (((dia >= 22 && mes === 12) || mes === 1 || mes === 2) || (dia <= 21 && mes === 3)) {
        window.alert("Verão")
        res.innerHTML = `Verão`

    } else if ((dia >= 22 && mes === 3) || mes === 4 || mes === 5 || (dia <= 21 && mes === 6)) {
        window.alert("Outono")
        res.innerHTML = `Outono`

    } else if ((dia >= 22 && mes === 6) || mes === 7 || mes === 8 || (dia <= 21 && mes === 9)) {
        window.alert("Inverno")
        res.innerHTML = "Inverno"

    } else {
        window.alert("Primavera")
        res.innerHTML = `Primavera`
    }
}

carregar()