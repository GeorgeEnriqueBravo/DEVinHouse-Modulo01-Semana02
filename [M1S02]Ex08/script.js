let divisor = 0
let primo = 0
let txt = ""

for (let c = 0; c <= 1000; c++) {
    for (let j = 1; j <= c; j++) {
        if (c % j == 0) {
            divisor++
        }
    }
    if (divisor == 2) {
        primo++
        txt += `${primo} - ${c} <br/>`
        console.log(`${primo} - ${c}`)  
    }
    divisor = 0
}
console.log(`Entre 0 e 1000 existem ${primo} números primos.`)

function carregar() {
    let res = document.getElementById("res")
    res.innerHTML += `${txt}`
    res.innerHTML += `<br> Entre 0 e 1000 existem ${primo} números primos.`
}

