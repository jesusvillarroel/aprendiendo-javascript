const verificarCreditoSaaS = (montoCompra) => {
  return new Promise((resolve, reject) => {
    const creditoDisponible = 500; // Saldo del cliente en el sistema
    
    console.log("⏳ Conectando con el servidor financiero...");
    
    setTimeout(() => {
      if (montoCompra <= creditoDisponible) {
        resolve(`✅ Transacción aprobada por $${montoCompra} USD.`);
      } else {
        reject(`🚨 Transacción rechazada: Saldo insuficiente.`);
      }
    }, 2000);
  });
};
// //consumo de la promesa
// verificarCreditoSaaS(550)
// .then(respuestaExito => console.log("Exito en promesa:",respuestaExito))
// .catch(motivoFallo => console.log("Fallo en promesa:", motivoFallo));

//reto de buscador dinamico
// 1. Nuestra Base de Datos Simulada (BD)
const baseDatosUsuarios = [
  { id: 101, nombre: "Carlos Mendoza", rol: "Admin" },
  { id: 102, nombre: "Ana Gómez", rol: "User" },
  { id: 103, nombre: "Beatriz Ruiz", rol: "Guest" }
];
const buscarUsuarioEnBD=(idBuscar) => {
    return new Promise((resolve,reject) =>{
         console.log("⏳ Conectando con el servidor ...");
         setTimeout(()=>{
            const userEncontrado= baseDatosUsuarios.find(user => user.id===idBuscar);
            if (userEncontrado){
                resolve(userEncontrado);
            }else{
               reject(`🚨 Usuario no existe en el sistema.`);
            }
         },2500);
    });
};

const appContenedor = document.getElementById('javascript-output');

if (appContenedor) {
  const tarjetaPromesas = document.createElement('div');
  tarjetaPromesas.className = 'card';
  tarjetaPromesas.innerHTML = `
    <h2>🤝 Modulo 3-2: Programación Asíncrona (Promesas)</h2>
    
    <h3>💵 1. Validador de Crédito SaaS:</h3>
    <p id="resultado-credito">Estado: ⏳ Esperando respuesta financiera...</p>
    
    <hr>
    
    <h3>🔍 2. Buscador Dinámico de Usuarios (BD Simulada):</h3>
    <p id="resultado-busqueda">Estado: ⏳ Buscando perfil en el servidor...</p>
  `;
  appContenedor.appendChild(tarjetaPromesas);

  // Capturamos los contenedores de texto dinámicos
  const textoCredito = document.getElementById('resultado-credito');
  const textoBusqueda = document.getElementById('resultado-busqueda');

  // --- RENDER RETO 1 ---
  verificarCreditoSaaS(550)
    .then((exito) => textoCredito.textContent = exito)
    .catch((error) => textoCredito.textContent = error);

  // --- RENDER RETO 2 (Ana Gómez - ID 102) ---
  buscarUsuarioEnBD(102)
    .then((user) => {
      textoBusqueda.innerHTML = `✅ Usuario encontrado: <strong>${user.nombre}</strong> (Rol: <em>${user.rol}</em>)`;
    })
    .catch((err) => {
      textoBusqueda.textContent = err;
    });
}
