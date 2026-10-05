// // ====== 1. Declaración de Variables ======
// const nombreProyecto = "Aprendiendo JavaScript con Vite";
// let nivelProgreso = 1;

// console.log(`🚀 Iniciando: ${nombreProyecto}`);
// console.log(`📈 Nivel actual: Módulo ${nivelProgreso}`);

// // Reasignación (solo permitido con let)
// nivelProgreso = 2;
// console.log(`🔼 ¡Progreso actualizado al módulo ${nivelProgreso}!`);


// // ====== 2. Tipos de Datos Primitivos ======
// const lenguaje = "JavaScript"; // String
// const anioActual = 2026;       // Number
// const esDivertido = true;      // Boolean
// let variableVacia;             // Undefined

// console.log("\n--- Verificación de Tipos ---");
// console.log(`lenguaje es: ${typeof lenguaje}`);
// console.log(`anioActual es: ${typeof anioActual}`);
// console.log(`esDivertido es: ${typeof esDivertido}`);
// console.log(`variableVacia es: ${typeof variableVacia}`);
// ====== 1. Declaración de Variables ======
const nombreProyecto = "Declaracion de variables y typeof";
let nivelProgreso = 1;

// ====== 2. Tipos de Datos Primitivos ======
const lenguaje = "JavaScript";
const anioActual = 2026;       
const esDivertido = true;      

// ====== 3. Inyectar el resultado en el HTML ======
// Seleccionamos el contenedor de la pantalla
const app = document.getElementById('javascript-output');

// Validamos que el contenedor exista antes de escribir para evitar errores
if (app) {
  app.innerHTML = `
    <div class="card">
      <h2>🚀 Modulo 1-1: ${nombreProyecto}</h2>
      <p><strong>📈 Nivel actual:</strong> Módulo ${nivelProgreso}</p>
      
      <hr>
      
      <h3>🔍 Verificación de Tipos (typeof):</h3>
      <ul>
        <li><strong>Lenguaje:</strong> ${lenguaje} <em>(${typeof lenguaje})</em></li>
        <li><strong>Año:</strong> ${anioActual} <em>(${typeof anioActual})</em></li>
        <li><strong>¿Es divertido?:</strong> ${esDivertido} <em>(${typeof esDivertido})</em></li>
      </ul>
    </div>
  `;
}

