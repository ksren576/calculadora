let operandoa;
let operandob;
let operacion;

function ingresaNumero(numero, elemento) {
  elemento.textContent += numero;
}

function ingresarOperacion(op, elemento) {
  operandoa = elemento.textContent;
  operacion = op;
  limpiar();
}

function init() {
  //variables
  let resultado = document.getElementById("resultado");
  let reset = document.getElementById("reset");
  let suma = document.getElementById("suma");
  let resta = document.getElementById("resta");
  let multiplicacion = document.getElementById("multiplicacion");
  let division = document.getElementById("division");
  let igual = document.getElementById("igual");
  let uno = document.getElementById("uno");
  let dos = document.getElementById("dos");
  let tres = document.getElementById("tres");
  let cuatro = document.getElementById("cuatro");
  let cinco = document.getElementById("cinco");
  let seis = document.getElementById("seis");
  let siete = document.getElementById("siete");
  let ocho = document.getElementById("ocho");
  let nueve = document.getElementById("nueve");
  let cero = document.getElementById("cero");

  //eventos de click
  uno.onclick = function (e) {
    ingresaNumero("1", resultado);
  };
  dos.onclick = function (e) {
    ingresaNumero("2", resultado);
  };
  tres.onclick = function (e) {
    ingresaNumero("3", resultado);
  };
  cuatro.onclick = function (e) {
    ingresaNumero("4", resultado);
  };
  cinco.onclick = function (e) {
    ingresaNumero("5", resultado);
  };
  seis.onclick = function (e) {
    ingresaNumero("6", resultado);
  };
  siete.onclick = function (e) {
    ingresaNumero("7", resultado);
  };
  ocho.onclick = function (e) {
    ingresaNumero("8", resultado);
  };
  nueve.onclick = function (e) {
    ingresaNumero("9", resultado);
  };
  cero.onclick = function (e) {
    ingresaNumero("0", resultado);
  };
  reset.onclick = function (e) {
    resetear();
  };
  suma.onclick = function (e) {
    ingresarOperacion("+", resultado);
  };
  resta.onclick = function (e) {
    ingresarOperacion("-", resultado);
  };
  multiplicacion.onclick = function (e) {
    ingresarOperacion("*", resultado);
  };
  division.onclick = function (e) {
    ingresarOperacion("/", resultado);
  };
  igual.onclick = function (e) {
    operandob = resultado.textContent;
    resolver();
  };
}

function limpiar() {
  resultado.textContent = "";
}

function resetear() {
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver() {
  var res = 0;

  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}
