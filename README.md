# <img src="favicon.png" style="width: 25px; border-radius: 50%"> Módulo 3 - AE4 "Calculadora de gastos" <img src="favicon.png" style="width: 25px; border-radius: 50%">

<!-- ![mockup o entrega del ejercicio][0] -->


## 🚀 OBJETIVO

Imagina que estás organizando tus finanzas personales. Necesitas una herramienta sencilla que te ayude a calcular cuánto dinero puedes ahorrar cada mes con base en tus ingresos y tus gastos. Para lograrlo, vas a implementar una serie de funciones en JavaScript que realicen estos cálculos y te ayuden a mantener tu presupuesto bajo control. A lo largo del ejercicio, pondrás en práctica conceptos fundamentales sobre funciones.

## 👉 REQUISITOS

1. **¿Qué es una función y para qué sirve?**
Escribe una breve definición con tus propias palabras sobre qué es una función en programación y cuál es su propósito.

    Una función es una pieza de código reutilizable que encierra un bloque con código dentro de ella y tiene la cualidad de ser "invocable": es decir, se puede ejecutar cuando la necesitemos. En general cuando las invocamos o recibimos una repuesta de ellas, o ejecutan un bloque de lógica que cumple alguna tarea. Además de poder ejecutarse a voluntad y cuantas veces deseemos, se dice que son reutilizables porque admiten la entrega de variables conocidas como "argumentos" que permiten obtener resultados distintos a partir de procesar datos distintos. Un ejemplo clásico es la función "sumar", o la "saludar": 

```Js
// esta función no "devuelve" nada, solo ejecuta la
// acción que tiene dentro usando la variable nombre
// como argumento dentro del bloque.
function saludar(nombre) {
    console.log(`Hola ${nombre}! Bienvenid@!`);
}
saludar("Estefanía");

// Esta función recibe argumentos también pero no
// "ejecuta nada visible desde el exterior, solo
// "retorna" un objeto con la suma y promedio de los
// dos valores. 
function sumaYPromedio(a, b) {
    const suma = a + b;
    const promedio = suma / 2;
    return { suma, promedio }; 
}
const resultados = sumaYPromedio(3, 5); // { suma: 8, promedio: 4}
```

2. **Definir funciones** Define una función llamada `calcularGastosTotales` que reciba tres parámetros: `renta`, `comida`, y `transporte`. Esta función
debe calcular la suma total de los tres gastos y **retornar el resultado**.

3. **Paso de parámetros en una función** Define una función llamada `calcularAhorroMensual` que reciba dos parámetros: `ingresosMensuales` y `gastosTotales` . Dentro de la función, resta los gastos a los ingresos y **devuelve el ahorro mensual**.

4. **Retorno de una función** Usa `console.log()` para mostrar el resultado de invocar `calcularAhorroMensual` con datos de ejemplo. El valor retornado debe ser visible en consola.

5. **Variables locales y variables globales** Declara una variable global llamada `moneda = "MXN"` . Luego, dentro de la función `mostrarResumenFinanciero`, define variables locales para los ingresos, gastos y ahorro. Imprime el resumen financiero en consola, incluyendo la moneda global.

    **NOTA:** acá se ha entendido "global" en el sentido del alcance del scope solamente, no en el sentido de las caracteristicas idiomáticas de Javascript (global como propiedad del objeto `window`). 

6. **Invocación de una función** Invoca `calcularGastosTotales` con valores de ejemplo (por ejemplo: 5000, 2000, 1500). Usa ese resultado como argumento para `calcularAhorroMensual`.

7. **Alcance de las variables locales** Crea una función `verificarSaldo` que defina una variable local llamada `saldoSeguro` dentro de la función. Intenta imprimir `saldoSeguro` fuera de la función y observa qué error aparece. Explica por qué ocurre.

8. **EI problema de las variables globales** Imagina que defines una variable global llamada `descuento = 100`. Luego, dentro de otra función llamada `calcularDescuento`, también defines `descuento = 50`. Ejecuta ambas funciones e imprime el valor de descuento antes y después de cada una. Analiza qué ocurrió con la variable global y por qué es importante evitar este tipo de situaciones.

    **NOTA**: Este ejercicio está muy mal planteado. Lo que se va a suponer, considerando que este es un ejercicio que trata mucho del scope es el siguiente escenario: 

```Js
// se declara la variable descuento, global al script/window
let descuento = 100;

// se define calcularDescuento() donde se sobreescribe descuento
function calcularDescuento( ){ 
    descuento = 50;
}

// al solicitar el valor de descuento antes de ejecutar 
// calcularDescuento el valor mostrado es 100 
console.log(descuento)  //> 100

// pero ahora ejecutamos calcularDescuento() y 
// se sobreescribe la variable que creamos antes.
calcularDescuento()

// mostramos descuento y ahora nos da 50.
console.log(descuento)  //> 50

/*

Este es el único escenario que provoca colisiones entre nombres. Incluso si definimos ambas variables con `var` no hay colisión porque la segunda se mantiene dentro del alcance de la función mientras que la otra en el scope global. Tampoco si definimos una variable como propiedad del objeto `window` haciendo `descuento = 100` porque al declarar con `var` la siguiente dentro de la función, volverán a ser la primera `window.descuento = 100` y la segunda a estar circunscrita al contexto de `calcularDescuento() => descuento = 50`. 

OBS: Hay un escenario que provoca un resultado similar y es declarar
window.descuento = 100 y luego window.descuento = 50 pero no tiene sentido
porque es una práctica ya no desaconsejada, sino abiertamente prohibida en JS.

*/
```  




9. **Crear una función anidada** Crea una función llamada `gestionarFinanzas` que contenga dentro otra función llamada `imprimirResumen`. `gestionarFinanzas` debe calcular los gastos totales y el ahorro, y luego invocar la función `imprimirResumen` para mostrar un mensaje como: `"Tus gastos fueron de X y tu ahorro fue de Y."`

    **NOTA**: acá no quedaba claro si se buscaba crear un closure, pero como es algo que está fuera del alcance del contenido aún, se ha elegido seguir literalmente lo que solicita el punto.

## 📁 ESTRUCTURA DEL PROYECTO

```
📁 esta-carpeta/  
├── index.html  
├── favicon.png  
├── README.md  
└── 📁assets/  
    ├── 📁css/  
    ├── 📁img/  
    ├── 📁js/  
    │   └── main.js
    └── 📁utils/  
```

<!-- Enlaces referenciados arriba -->
[0]:./assets/utils/mockup.png
[1]:
[2]:
[3]:
[4]:
[5]:
[6]:

