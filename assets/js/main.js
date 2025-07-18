const say = console.log;
const warn = console.warn;
const separador = n => ("\n" + "*".repeat(10) + " EJERCICIO " + n + " " + "*".repeat(10));

// EJERCICIO 2
warn(separador(2));
function calcularGastosTotales(renta, comida, transporte) {
  return renta + comida + transporte;
}

// EJERCICIO 3
warn(separador(3));
function calcularAhorroMensual(ingresosMensuales, gastosTotales) {
  const ahorroMensual = ingresosMensuales - gastosTotales;
  return ahorroMensual;
}

// EJERCICIO 4
warn(separador(4));
say("El ahorro mensual es: " +
  calcularAhorroMensual(100000, 30000));

say("El ahorro mensual es: " +
  calcularAhorroMensual(540243, 123495));

say("El ahorro mensual es: " +
  calcularAhorroMensual(984344, 934566));

// EJERCICIO 5
warn(separador(5));
let moneda = "MXN";     // global al scope del ejercicio.

function mostrarResumenFinanciero(ingresos, gastos, ahorro) {
  let i = ingresos;
  let g = gastos;
  let a = ahorro;

  const sep = "*".repeat(10)
  console.group();
  say(sep + " RESUMEN FINANCIERO " + sep);
  say("INGRESOS: " + "$" + i + moneda);
  say("GASTOS: " + "$" + g + moneda);
  say("AHORRO: " + "$" + a + moneda);
  console.groupEnd();
}

mostrarResumenFinanciero(100000, 60000, 40000);

// EJERCICIO 6
warn(separador(6));
say(calcularAhorroMensual(10000, calcularGastosTotales(5000, 2000, 1000)));
say(calcularAhorroMensual(100000, calcularGastosTotales(50000, 20000, 10000)));
say(calcularAhorroMensual(1000000, calcularGastosTotales(500000, 200000, 100000)));

// QUÉ PASA CON EL PUNTO 8?
warn(separador(8));

var descuento = 100;
function calcularDescuento( ){ 
  descuento = 50;
}

console.log(descuento)  //> 100
calcularDescuento()
console.log(descuento)  //> 50

// PUNTO 9
warn(separador(9));
(function gestionarFinanzas() {
  const gastos = calcularGastosTotales(150000, 25000, 30000);
  const ahorro = calcularAhorroMensual(300000, gastos);
  
  (function imprimirResumen() {
    say("Tus gastos fueron de " + gastos + " y tu ahorro fue de " + ahorro);
  })()
})();

// EJERCICIO 7
warn(separador(7));
warn("Se deja al final porque provoca error de ejecución y así lo podemos ver...");
function verificarSaldo() {
  const saldoSeguro = 150000;
}
say.log(saldoSeguro);     // Uncaught ReferenceError: saldoSeguro is not defined