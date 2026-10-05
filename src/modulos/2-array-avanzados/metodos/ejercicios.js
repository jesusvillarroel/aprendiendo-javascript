//ejercicio utilizando map()
//ejemplo1
const usuarios = ["lUIs", "aNA", "mArIa", "pEdRo"];
//devolver el arrays con la primera letra en mayuscula 
const usuariosLimpios = usuarios.map(nombre => nombre[0].toUpperCase()+ nombre.slice(1).toLowerCase());
//console.log(usuariosLimpios);

//ejemplo2
const productos = [
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 200 }
];
const productosActualizado = productos.map(producto =>{
    return{
        nombre: producto.nombre,
        precio: parseFloat((producto.precio *1.15).toFixed(2)),
    }
});
//console.log(productosActualizado);
//ejemplo 3
const alumnos = [
  { nombre: "Marcos", nota: 8 },
  { nombre: "Lucía", nota: 5 },
  { nombre: "Roberto", nota: 9 }
];
//aqui tenia que agregar otra propiedad y dependiendo si la nota es mayor o igual a 7
//es aprobado verdadero o falso
const estadoAlumnos = alumnos.map(alumno =>{
    return{
        nombre: alumno.nombre,
        nota: alumno.nota,
        aprobado: alumno.nota >=7, 
    }
});
//console.log(estadoAlumnos);
//((((+********************************************************))))
/*Ejercicio utilizando filter() Recuerda que este método evalúa una condición 
lógica y solo deja pasar al nuevo array los elementos que devuelvan true.
*/
//ejemplo1 padron electoral solo votan los mayores de edad
const edades = ["15", "22", "17", "30", "14", "18", "45"];
const votantesPermitidos=edades.filter(edad => Number(edad) >=18);
//console.log(votantesPermitidos);

//ejemplo2 de inventario
const inventario = [
  { articulo: "Laptop", stock: 5 },
  { articulo: "Mouse inalámbrico", stock: 0 },
  { articulo: "Teclado Mecánico", stock: 12 },
  { articulo: "Audífonos", stock: 0 }
];
const productosDisponibles = inventario.filter(prod => prod.stock >0);
//console.log(productosDisponibles);

//ejemplo3 
const tareas = [
  { id: 1, texto: "Responder correos", tag: "trabajo" },
  { id: 2, texto: "Comprar leche", tag: "personal" },
  { id: 3, texto: "Preparar presentación", tag: "trabajo" },
  { id: 4, texto: "Ir al gimnasio", tag: "salud" }
];

const tareaTrabajo = tareas.filter(tarea => tarea.tag === "trabajo");
//console.log(tareaTrabajo);

//((((+********************************************************))))
// A diferencia de los anteriores, .reduce() no devuelve un array del mismo 
// tamaño; toma todos los elementos y los condensa en un único valor final
//   (que puede ser un número, un string, etc.). Recibe dos parámetros clave en su función:
// 1. El acumulador (la alcancía donde se va guardando el total).
// 2. El elemento actual (el objeto o número que se está procesando en esa vuelta).
// • Nota: Siempre debemos poner el valor inicial del acumulador al final del 
// método (usualmente 0 si sumamos números).

// ejemplo1
const gastos = ["12", "45", "8", "25", "60"];
// calcular el gasto del mes
const totalGastos = gastos.reduce((acumulador,elementoActual) => Number(elementoActual) + acumulador,0);
// console.log(totalGastos);

//ejemplo 2
const carritoCompra = [
  { articulo: "Pan", costo: 1.5 },
  { articulo: "Leche", costo: 2.2 },
  { articulo: "Queso", costo: 4.0 },
  { articulo: "Café", costo: 5.5 }
];
const cuentaTotal= carritoCompra.reduce((acumulador,productoActual) =>productoActual.costo + acumulador,0);
// console.log(cuentaTotal);
//ejemplo3
const votos = ["sí", "no", "sí", "sí", "no", "sí"];
const votosPositivos =votos.reduce((acumulador,voto)=> voto ==="sí" ? acumulador + 1 : acumulador,0);
console.log(votosPositivos);
