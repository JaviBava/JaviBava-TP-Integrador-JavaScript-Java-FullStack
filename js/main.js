const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const mensajeTextarea = document.getElementById('exampleFormControlTextarea1');
const emailInput = document.getElementById('email');

// Ocultar placeholders//
nombreInput.addEventListener('click', () => {
  nombreInput.removeAttribute('placeholder');
});


apellidoInput.addEventListener('click', () => {
  apellidoInput.removeAttribute('placeholder');
});


mensajeTextarea.addEventListener('click', () => {
  mensajeTextarea.removeAttribute('placeholder');
});



// Vuelve a mostrar el placeholders//
nombreInput.addEventListener('blur', () => {
  nombreInput.setAttribute('placeholder', 'Nombre');
});


apellidoInput.addEventListener('blur', () => {
  apellidoInput.setAttribute('placeholder', 'Apellido');
});


mensajeTextarea.addEventListener('blur', () => {
  mensajeTextarea.setAttribute('placeholder', '¿Sobre qué quieres hablar?');
});


//Funcionamiento boton comprartickets//

document.getElementById("boton-comprar").addEventListener("click", function() {
  window.location.href = "tickets.html";
});


//pagina tickets//

// Oculta placeholder email//
emailInput.addEventListener('click', () => {
  emailInput.removeAttribute('placeholder');
});

//vuelve a aparecer el placeholder//

emailInput.addEventListener('blur', () => {
  emailInput.setAttribute('placeholder', 'email@example.com');
});




//Calculo del importe a abonar por la compra de las entradas//

function calculoImporte() {
  
  var cantidad = parseInt(document.getElementById("cantidadDeEntradas").value);
  var categoria = document.getElementById("categoria").value;
  

  var precioSinDescuento = cantidad * 200;

  var descuento;
if (categoria === "1") {
  descuento = 0.8; 
} else if (categoria === "2") {
  descuento = 0.5; 
} else if (categoria === "3") {
  descuento = 0.15;
} else {
  descuento = 0;
}


var precioConDescuento = precioSinDescuento *  descuento;

var saldoAAbonar = precioSinDescuento - precioConDescuento;

  
  document.getElementById("numeroTotal").textContent = "$" + saldoAAbonar;
}



//Funcionamiento del boton BORRAR//

function borrarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cantidadDeEntradas").value = 0;
  document.getElementById("categoria").selectedIndex = 0;
  document.getElementById("numeroTotal").textContent = "";
  
}



//validar textos inputs//

function validarTexto(event) {
  var input = event.target;
  input.value = input.value.replace(/[^a-zA-Z\-]/g, '');
}
