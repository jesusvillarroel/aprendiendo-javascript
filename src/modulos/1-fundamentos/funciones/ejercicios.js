//function arrow que convierte de celsuis a fahrenheit
const convertirCelsiusAFahrenheit = celsius => (celsius *9/5) + 32;

const generarBadgePrecio = (nombreProducto,precio) => precio < 50 ? "Oferta 🟢" : "Normal ⚪" ;

//El Validador de Emails
const validarEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Correo valido' : 'Formato Incorrecto';

//Conversor de Divisas
const calcularCambio = (monto,tasaCambio,porcentajeComision) =>{
    let totalConvertido,comision;
    totalConvertido = monto * tasaCambio;
    comision=totalConvertido * (porcentajeComision/100);
    return(totalConvertido -comision).toFixed(2);
};

//Calculadora de IMC
const calcularIMC = (peso,altura) =>{
    let imc;
    imc= peso / (altura * altura);
    if( imc >=25) return "Sobrepeso 🔴";
    if(imc >= 18.5) return "Peso normal 🟢";
    return "Bajo peso 🟡";
}
//variables de prueba y ejecucion
const correoPrueba = 'jlezama28@gmail.com';
const resultadoEmail=validarEmail(correoPrueba);

const montoDolares = 100;
const netoRecibido = calcularCambio(montoDolares,3.94,10);

const miPeso = 95;
const miAltura = 1.85;
const miDiagnosticoIMC=calcularIMC(miPeso,miAltura);

//Renderizado en la tarjeta
const tarjetaFunciones = document.createElement('div');
tarjetaFunciones.className = 'card';
tarjetaFunciones.innerHTML = `
  <h2>⚡ Módulo 1-3: Funciones de Flecha</h2>
  
  <h3>🌡️ 1. Convertidor & Catálogo:</h3>
  <p>25°C equivalen a: <strong>${convertirCelsiusAFahrenheit(25)}°F</strong></p>
  <p>Pantalon ($25) es un producto: <strong>${generarBadgePrecio('Pantalon', 25)}</strong></p>
  
  <hr>
  
  <h3>📧 2. Validador de Email:</h3>
  <p>Email: <code>${correoPrueba}</code></p>
  <p>Resultado: <strong>${resultadoEmail}</strong></p>
  
  <hr>
  
  <h3>💵 3. Conversor de Divisas:</h3>
  <p>Monto: $${montoDolares} (Tasa: 3.94 | Comisión: 10%)</p>
  <p>Total Neto a Recibir: <strong>$${netoRecibido}</strong></p>
  
  <hr>
  <h3>📊 4. Calculadora de IMC:</h3>
  <p>Estatura: ${miAltura}m | Peso: ${miPeso}kg</p>
  <p>Diagnóstico del Sistema: <strong>${miDiagnosticoIMC}</strong></p>
`;

const app = document.getElementById('javascript-output');
if (app) {
  app.appendChild(tarjetaFunciones);
}
