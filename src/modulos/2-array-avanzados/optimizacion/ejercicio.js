const productosTienda = [
  { articulo: "Teclado", precio: 45 },
  { articulo: "Monitor", precio: 250 },
  { articulo: "Mouse", precio: 20 },
  { articulo: "Laptop", precio: 900 }
];
const productosOrdenados=productosTienda.toSorted((a,b)=> b.precio - a.precio);
// console.log(productosTienda)
// console.log("PRODUCTOS ORDENADOS:", productosOrdenados);
const logsServidor = [
  { ruta: "/home", codigo: 200, mensaje: "ok" },
  { ruta: "/login", codigo: 500, mensaje: "error de contraseña" },
  { ruta: "/dashboard", codigo: 200, mensaje: "ok" },
  { ruta: "/checkout", codigo: 500, mensaje: "fallo en la pasarela de pago" }
];
const errorServidor = logsServidor.reduce((acumulador,logActual) => logActual.codigo === 500 ? [ ...acumulador,logActual.mensaje.toUpperCase()]:acumulador,[]);
// console.log(errorServidor);

const notificaciones = [
  { id: 1, mensaje: "Nuevo mensaje de Ana", leido: true },
  { id: 2, mensaje: "Tu pedido ha sido enviado", leido: false },
  { id: 3, mensaje: "Alguien le dio me gusta a tu foto", leido: true },
  { id: 4, mensaje: "Recordatorio: Actualiza tu perfil", leido: false }
];
//El objetivo técnico: Debes extraer únicamente los mensajes de las notificaciones que no han 
// sido leídas (leido: false).
const mensajesPendientes = notificaciones.reduce((acumulador,mensajeActual) => !mensajeActual.leido ? [...acumulador,mensajeActual.mensaje]:acumulador,[]);
// console.log(mensajesPendientes);
const appContenedor = document.getElementById('javascript-output');

if (appContenedor) {
  const tarjetaOptimizacion = document.createElement('div');
  tarjetaOptimizacion.className = 'card';
  tarjetaOptimizacion.innerHTML = `
    <h2>⚡ Modulo 2-3: Arrays Avanzados (Optimización & Inmutabilidad)</h2>
    
    <h3>🧬 1. Ordenamiento Inmutable (.toSorted):</h3>
    <p>Productos de Mayor a Menor Precio:</p>
    <ul>
      ${productosOrdenados.map(producto => `<li>🔥 ${producto.articulo} - $${producto.precio}</li>`).join("")}
    </ul>
    
    <hr>
    
    <h3>🚀 2. Filtro + Mapeo en 1 sola vuelta (.reduce):</h3>
    <p>Logs de Error Procesados Eficientemente:</p>
    <ul>
      ${errorServidor.map(err => `<li>🚨 ${err}</li>`).join("")}
    </ul>
    
    <hr>
    
    <h3>📬 3. Filtro de Notificaciones Avanzado (.reduce + !):</h3>
    <p>Mensajes Pendientes por Leer:</p>
    <ul>
      ${mensajesPendientes.map(msg => `<li>✉️ ${msg}</li>`).join("")}
    </ul>
    
    <hr>
    
    <h3>🛡️ 4. Auditoría de Memoria y Buenas Prácticas:</h3>
    <p>¿El array original de productos se mantuvo intacto? <strong>✅ SÍ (Inmutable)</strong></p>
    <p>¿Evitamos arrays intermedios basura en los retos 2 y 3? <strong>✅ SÍ (Nivel Senior)</strong></p>
  `;

  // Insertamos la tarjeta de optimización al final de la bitácora
  appContenedor.appendChild(tarjetaOptimizacion);
}
