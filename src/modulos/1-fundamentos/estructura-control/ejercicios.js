// 🛒 Ejercicio 1: Calculadora de Descuentos (Condicionales e Historial)
// Un e-commerce quiere aplicar descuentos según el monto de la compra y si el usuario tiene membresía VIP:
// • Si la compra es de $100 o más AND el cliente es VIP, tiene un 20% de descuento.
// • Si la compra es de $100 o más pero no es VIP, tiene un 10% de descuento.
// • Cualquier otra combinación no tiene descuento (0%).
// • Reto extra: Usa un operador ternario para definir un mensaje que diga "Envío Gratis" 
// si el monto final supera los $90, o "Envío con Costo" si es menor.

//Declaracion de variables
let montoCompra=100;
let esVIP=false;
let totalApagar=0
let descuentoAplicado=0;
let estadoEnvio="";
if (montoCompra >= 100 && esVIP){
    descuentoAplicado=20;
    totalApagar = montoCompra - (montoCompra*0.2);

}
else if(montoCompra >= 100 && !esVIP){
    descuentoAplicado=10;
    totalApagar = montoCompra - (montoCompra*0.1);

}
else{
    totalApagar =montoCompra;
}
estadoEnvio= totalApagar >=90 ? "Envio Gratis" : "Envio con Costo";
//console.log(`total a pagar ${totalApagar} . Estado: ${estadoEnvio}`);

//ejercicio 2
// 🎮 Ejercicio 2: Sistema de Niveles de un Juego (Bucle e Incremento)
// Simula la subida de nivel de un personaje de videojuegos 
// acumulando experiencia por cada partida jugada

//Declaracion de variables
let listaPartidas ="";
let experienciaActual=0;

//simula que el personaje juega 5 partida y gana experiencia 20pts por c/u
for(let i=0; i<5;i++){
    experienciaActual +=20;
    listaPartidas +=`<li> Partida ${i+1}: Ganaste 20 XP  (Total: ${experienciaActual} XP)</li>`;
    // console.log(`Partida ${i + 1}: +20 XP | Total acumulado: ${experienciaActual} XP`);
}

//ejercicio 3 
// Imagina que estás programando el formulario de registro de una página web real.
//  Vas a recibir tres respuestas del sistema (tres booleanos: true o false) que evalúan 
//  la clave que escribió el usuario:
// • tieneLongitudCorrecta: true si la contraseña tiene 8 o más caracteres. false si es más corta.
// • tieneMayuscula: true si la contraseña incluye al menos una letra mayúscula (A-Z).
// • tieneNumero: true si la contraseña contiene al menos un número (0-9)

//declaramos variables 
let tieneLongitudCorrecta,tieneMayuscula,tieneNumero;
let password="Jrlv1234";
let nivelSeguridad="";
 //verificando que tiene la longitud correcta
 tieneLongitudCorrecta = password.length >=8 ;
//verificamos que el password tenga o no mayuscula
 tieneMayuscula = /[A-Z]/.test(password);
 //verificamos si tiene numero
 tieneNumero= /[0-9]/.test(password);

 //comprobamos que nivel de seguridad tiene el password
if(tieneLongitudCorrecta){
    if(tieneMayuscula && tieneNumero ){
        nivelSeguridad= "Seguro 🟢";
    }
    else {
         nivelSeguridad= "Intermedio 🟡";
    }
}
else {
   nivelSeguridad= "Inseguro 🔴"; 
}  

// ==========================================
// 🛠️ RENDERIZADO EN LA TARJETA
// ==========================================

const tarjetaControl = document.createElement('div');
tarjetaControl.className = 'card';

tarjetaControl.innerHTML = `
  <h2>🔀 Módulo 1-2: Estructuras de Control</h2>
  
  <h3>🛒 1. Carrito de Compras:</h3>
  <p>Monto original: <strong>$${montoCompra}</strong> | Descuento: <strong>${descuentoAplicado}%</strong></p>
  <p>Total a pagar: <strong>$${totalApagar}</strong> | Logística: <em>${estadoEnvio}</em></p>
  
  <hr>
  
  <h3>🎮 2. Progreso de Personaje:</h3>
  <ul>
    ${listaPartidas}
  </ul>
  
  <hr>
  
  <h3>🔒 3. Seguridad de Clave:</h3>
  <p>Password evaluado: <code>"${password}"</code></p>
  <p>Estado del sistema: <strong>${nivelSeguridad}</strong></p>
`;

const app = document.getElementById('javascript-output');
if (app) {
  app.appendChild(tarjetaControl);
}
