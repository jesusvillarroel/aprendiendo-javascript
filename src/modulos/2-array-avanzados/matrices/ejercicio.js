const inventarioBodega = [
  // Pasillo 0 (Fila 0)
  [{ producto: "Teclados", stock: 15 }, { producto: "Ratones", stock: 30 }, { producto: "Monitores", stock: 8 }],
  // Pasillo 1 (Fila 1)
  [{ producto: "Laptops", stock: 5 }, { producto: "Cables HDMI", stock: 50 }, { producto: "Hubs USB", stock: 22 }],
  // Pasillo 2 (Fila 2)
  [{ producto: "Sillas Gamer", stock: 4 }, { producto: "Escritorios", stock: 3 }, { producto: "Audífonos", stock: 19 }]
];
const datoMonitores = inventarioBodega[0][2];
// console.log(datoMonitores);
const stockCables =inventarioBodega[1][1].stock;
// console.log(stockCables);
const nombreSillas = inventarioBodega[2][0].producto;
// console.log(nombreSillas);

//uso de for ..of para recorrer toda la matriz

let stockTotalBodega=0;
for (const pasillo of inventarioBodega){
    for(const estante of pasillo){
        stockTotalBodega += estante.stock;
    }
}
//console.log(stockTotalBodega);

// Buscamos el contenedor principal de tu bitácora visual
const appContenedor = document.getElementById('javascript-output');

if (appContenedor) {
  const tarjetaMatrices = document.createElement('div');
  tarjetaMatrices.className = 'card';
  tarjetaMatrices.innerHTML = `
    <h2>📐 Modulo 2-2: Arrays Avanzados (Matrices / Tablas)</h2>
    
    <h3>🔑 1. Acceso por Índices [Fila][Columna]:</h3>
    <p>Monitores extraídos: <strong>${datoMonitores.producto} (Stock: ${datoMonitores.stock})</strong></p>
    <p>Stock Cables HDMI: <strong>${stockCables} unidades</strong></p>
    <p>Nombre Pasillo 2, Estante 0: <strong>${nombreSillas}</strong></p>
    
    <hr>
    
    <h3>🔄 2. Recorrido Bidimensional (Bucles Anidados):</h3>
    <p>Auditoría de Almacén Completa:</p>
    <p>Capacidad Total Acumulada en Bodega: <strong>${stockTotalBodega} artículos</strong></p>
  `;

  // Inyectamos la tarjeta al final del contenedor para que se apile ordenadamente
  appContenedor.appendChild(tarjetaMatrices);
}
