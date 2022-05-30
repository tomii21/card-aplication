window.onload = function Load() {
    document.getElementById("add-card").style.display = "none"
}
let cards = new Array()

const btnFormCard = document.getElementById("btn-add-card")
btnFormCard.addEventListener("click", ShowFormAddCard)

const btnAddCard = document.getElementById("btn")
btnAddCard.addEventListener("click", AddCardToList)

function ShowFormAddCard() {
    document.getElementById("list-cards").style.display = "none"
    document.getElementById("nht").style.display = "none"
    document.getElementById("add-card").style.display = "block"
    document.getElementById("btn-add-card").style.display = "none"

}

function GoBackToCards() {

    const titularCard = document.getElementById("titular-card")
    const numTarjeta = document.getElementById("numTarjeta")
    const fechaE = document.getElementById("fechaET")
    const fechaV = document.getElementById("fechaVT")
    let lista = document.getElementById("list-cards")

    let tarjeta = JSON.parse(localStorage.getItem("tarjeta"))

    lista.innerHTML +=` <p id="banco">${tarjeta.banco}</p>
                      <p id="numTarjeta">${tarjeta.numero}</p>
                        <p id="fechaET">${tarjeta.fechaEmision}</p>
                        <p id="fechaVT">${tarjeta.fechaValidez}</p>
                        <p id="titular">${tarjeta.titular}</p>`

    /*     titularCard.append(tarjeta.titular)
        numTarjeta.append(tarjeta.numero)
        fechaE.append(tarjeta.fechaEmision)
        fechaV.append(tarjeta.fechaValidez) */

}

function AddCardToList() {

    let titular = document.getElementById("titular").value;
    let numTarjeta = Number(document.getElementById("nTarjeta").value);
    let fEmitida = document.getElementById("fechaE").value;
    let fValidez = document.getElementById("fechaO").value;
    let banco = document.getElementById("banco").value;
    let pMessage = document.getElementById("p-msg")
    if (titular != "") {
        let tarjeta = {
            titular: titular,
            numero: numTarjeta,
            fechaEmision: fEmitida,
            fechaValidez: fValidez,
            banco: banco
        }
        localStorage.setItem("tarjeta", JSON.stringify(tarjeta));
        pMessage.innerHTML = "La tarjeta se guardo correctamente"
        ChangesScreens()
        GoBackToCards()
    }

}

function ChangesScreens() {
    document.getElementById("add-card").style.display = "none"
    document.getElementById("list-cards").style.display = "block"
    document.getElementById("btn-add-card").style.display = "block"
}

