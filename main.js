// Un condicional nos sirve para tomar decisiones en base a los datos que tenemos

//estructura básica de un IF

// if (condicion){
//     //bloque de código de ejecución
// } 

// let edad = parseInt(prompt("ingrese su edad"));

// edad = Number(edad); 

//if es la para reservada para ver si se cumple tal o cual condición y ejecuto mi bloque de código.

// if (edad > 18){
//     alert ("Puedes entrar al boliche");
// } else {
//     alert("No puedes entrar.. vete a comer una hamburguesa al carrito");
// }

//Tipo de dato: booleano. Tiene dos valores. Pueden ser
//Verdadero o falso. 

// if(true){
//     alert("este código se va a ejecutar")
// }
// if (false){
//     alert("este código no se va a ejecutar")
// }

//Prioridades para resolver código
//1°: se resuelve lo que está adentro de () y luego va al cálculo9 general. 

// console.log((true && true) && false); //false
// console.log (((!false|| false) &&true));//true
// console.log (((!true|| false) &&true));//false

//Operadores de comparación: para comparar datos y nos devuelve un booleano. (T/F)

//dato operador dato 
// = es solo un operador de asignación para mis variables (no compara)
//== igual que (18==18  true) (18 == "18"  true)
//=== estrictamente igual (18 === 18  true) (18 === "18"  false)
// != distinto de 
// !== estrictamente distinto de
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que 

// let numero = parseFloat(prompt ("Ingrese un número: "));

// if (numero > 1000){
//     alert("el número es mayor a 1000");
// }

// let palabra = prompt("Ingrese una palabra");

// if (palabra == "Hola"){
//     alert ("Saludos");
// }

// let numero1 = parseFloat(prompt("Ingrese un número de 1 a 100"));
// if (numero1 >10 && numero1 < 50){
//     alert ("Su numero esta entre 10 y 50");
// }


//Operadores lógicos:
//1) && (ampersand) 
// va a comparar dos condiciones: condición && condición
//Si una condición es verdadera y la otra también es verdadera nos va a retornar un verdadero ( true + true = true)
//si alguna o ambas condiciones son fase el resultado va a retornar False (no se cumple la condición de ejecución)

// let edad = parseInt(prompt("Ingrese su edad"));
// if (edad > 18 &&  edad< 60){
//     alert ("estas en rango de seguir saliendo");

// } else if (edad >60){
//     alert("anda a tu casa a descansar");
// }
// else if (edad <18){
//     alert ("anda pa tu casa");
// }

//2) or || va a comparar dos condiciones . 
// Si alguna de las dos condiciones en trues el resultado va a ser true. 
//true + true = true
//true + false = true
//false + true = true
//false + false = false

// let identificacion = parseInt(prompt( "Ingrese Dni"));
// let carnetDeConducir = parseInt(prompt("Ingrese número de carnet de conducir"));

// if (identificacion || carnetDeConducir) {
//     alert("Puede continuar el acceso a identificarse")
// }
// else {
//     alert ("No puede identificarse");
// }

//3) not ! niega una condición, devuelve el valor el puesto. 

// !true = false
// !false = true

// let tieneAuto = parseInt(prompt("ingrese su numero de patente, si no deje vacío"));
// if(!tieneAuto){
//     alert("vaya a pie y con cuidado, en Rosario con chaleco antibalas");
// }
// else {
//   alert("maneje CON CUIDADO");
// }



