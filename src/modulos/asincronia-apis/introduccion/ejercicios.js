const app=document.getElementById('javascript-output');
if(app){
    const tarjetaAsincronia=document.createElement('div');
    tarjetaAsincronia.className='card';
    tarjetaAsincronia.innerHTML = `
    <h2 id="titulo">⏳ Bloque 3: Programación Asíncrona (Introducción)</h2>
    <p id="estado-sistema">Estado: ⏳ Cargando componentes del sistema...</p>
  `;
  app.appendChild(tarjetaAsincronia);

  const textoEstado=document.getElementById('estado-sistema');
  const tituloActual=document.getElementById('titulo');
  setTimeout(()=>{
    textoEstado.textContent="Estado: ✅ ¡Sistema en línea y optimizado!";
    textoEstado.classList.add('card--success');
   
  },4000);
    
}