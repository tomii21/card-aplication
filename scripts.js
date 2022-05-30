window.onload = function Load() {
  document.getElementById("add-card").style.display = "none";
};
let cards = new Array();

const btnFormCard = document.getElementById("btn-add-card");
btnFormCard.addEventListener("click", ShowFormAddCard);

const btnAddCard = document.getElementById("btn");
btnAddCard.addEventListener("click", AddCardToList);

function ShowFormAddCard() {
  document.getElementById("list-cards").style.display = "none";
  document.getElementById("nht").style.display = "none";
  document.getElementById("add-card").style.display = "block";
  document.getElementById("btn-add-card").style.display = "none";
}

function GoBackToCards() {
  const titularCard = document.getElementById("titular-card");
  const numTarjeta = document.getElementById("numTarjeta");
  const fechaE = document.getElementById("fechaET");
  const fechaV = document.getElementById("fechaVT");
  let lista = document.getElementById("list-cards");

  let tarjeta = JSON.parse(localStorage.getItem("tarjetas"));
  lista.innerHTML = "";

  for (let i = 0; i < tarjeta.length; i++) {
     
    lista.innerHTML += ` <div id="efecto-lista"><section class="tarjeta" id="tarjeta">
      <div class="delantera">
      <div class="logo-marca" id="logo-marca">
      <img src="img/logos/visa.png" alt=""> 
      </div>
      <img src="img/chip-tarjeta.png" class="chip" alt="">
      <div class="datos">
      <div class="grupo" id="numero">
      
      <p class="numero">${tarjeta[i].numero}</p>
      </div>
      <div class="flexbox">
      <div class="grupo" id="nombre">
      
      <p class="nombre">${tarjeta[i].titular}</p>
      </div>
      
      <div class="grupo" id="expiracion">
      <p class="expiracion"><span class="mes">${tarjeta[i].fechaValidez}</span></p>
      
      </div>
      </div>
      </div>
      </div> 
      </section>
      </div>`;
  }
}

function AddCardToList() {
  let titular = document.getElementById("titular").value;
  let numTarjeta = Number(document.getElementById("nTarjeta").value);
  let fEmitida = document.getElementById("fechaE").value;
  let fValidez = document.getElementById("fechaO").value;
  let banco = document.getElementById("banco").value;
  let pMessage = document.getElementById("p-msg");
  if (titular != "") {
    let tarjeta = {
      titular: titular,
      numero: numTarjeta,
      fechaEmision: fEmitida,
      fechaValidez: fValidez,
      banco: banco,
    };
    cards.push(tarjeta);
    localStorage.setItem("tarjetas", JSON.stringify(cards));
    pMessage.innerHTML = "La tarjeta se guardo correctamente";
    ChangesScreens();
    GoBackToCards();
  }
}

function ChangesScreens() {
  document.getElementById("add-card").style.display = "none";
  document.getElementById("list-cards").style.display = "block";
  document.getElementById("btn-add-card").style.display = "block";
}
