const usuariosSaaS = [
  { id: 101, nombre: "carlos mendoza", rol: "admin", activo: true, facturacion: 49.99 },
  { id: 102, nombre: "ana gómez", rol: "user", activo: false, facturacion: 19.99 },
  { id: 103, nombre: "BEATRIZ RUIZ", rol: "user", activo: true, facturacion: 99.99 },
  { id: 104, nombre: "marcos lopez", rol: "guest", activo: true, facturacion: 0.00 },
  { id: 105, nombre: "ELENA SILVA", rol: "user", activo: true, facturacion: 19.99 }
];
//reto1 los nombres deben estar bien formateado
 const usuariosFormateados = usuariosSaaS.map(user =>{
    const nombreFormateado=user.nombre.split(" ").map(palabra => palabra[0].toUpperCase() +palabra.slice(1).toLowerCase()).join(" ");
    return{
        // id:user.id,
        // nombre:nombreFormateado,
        // rol:user.rol,
        // activo:user.activo,
        // facturacion:user.facturacion,
        ...user,//uso del operador spread
        nombre:nombreFormateado,
    }
 });
 //console.log(usuariosFormateados);
 const usuariosActivoPremium =usuariosFormateados.filter(user => user.activo && user.facturacion >0);
 //console.log(usuariosActivoPremium);

const ingresoTotal = parseFloat(usuariosActivoPremium.reduce((acumulador,user)=>acumulador + user.facturacion,0).toFixed(2));

const tarjetaSaaS = document.createElement('div');
tarjetaSaaS.className = 'card';
tarjetaSaaS.innerHTML = `
  <h2>📊 Modulo 2: Arrays Avanzados (SaaS Dashboard)</h2>
  
  <h3>🧼 1. Limpieza y Transformación (.map + spread):</h3>
  <p>Nombres Capitalizados de la BD:</p>
  <ul>
    ${usuariosFormateados.map(user => `<li>${user.nombre} (${user.rol.toUpperCase()})</li>`).join("")}
  </ul>
  
  <hr>
  
  <h3>🔍 2. Filtro Multicriterio (.filter + &&):</h3>
  <p>Usuarios Activos de Pago:</p>
  <ul>
    ${usuariosActivoPremium.map(user => `<li>🟢 ${user.nombre}</li>`).join("")}
  </ul>
  
  <hr>
  
  <h3>💵 3. Métrica Financiera (.reduce + parseFloat):</h3>
  <p>Ingreso Mensual Recurrente (MRR): <strong>$${ingresoTotal} USD</strong></p>
`;

// Lo inyectamos dinámicamente en tu contenedor principal 'javascript-output'
const app = document.getElementById('javascript-output');
if (app) {
  app.appendChild(tarjetaSaaS);
}
