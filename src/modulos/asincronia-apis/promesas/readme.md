# 🤝 Módulo: Programación Asíncrona - Promesas (`Promises`)

En esta sección del Bloque 3, se abordó la creación y el consumo de Promesas en JavaScript, simulando entornos de producción reales como pasarelas de pago y buscadores dinámicos sobre bases de datos integradas en memoria.

## 🚀 Conceptos Clave Aprendidos

### 1. ¿Qué es una Promesa?
* **Definición:** Es un objeto especial que representa el éxito o el fracaso de una operación asíncrona futura (no bloqueante).
* **Inmutabilidad de Estados:** Una promesa transita por tres estados obligatorios e inalterables:
  1. **`Pending` (Pendiente):** Estado inicial mientras la tarea en segundo plano (Web API) se procesa.
  2. **`Fulfilled` (Cumplida):** La operación concluyó con éxito mediante la ejecución de la función `resolve()`.
  3. **`Rejected` (Rechazada):** La operación falló debido a un error controlado mediante la ejecución de la función `reject()`.

### 2. Métodos de Control y Consumo
* **`.then(callback)`**: Estructura que captura los datos enviados por el `resolve()` únicamente si la promesa pasa a estado *Fulfilled*.
* **`.catch(callback)`**: Estructura de seguridad que intercepta los errores lanzados por el `reject()` si la promesa pasa a estado *Rejected*, evitando que la aplicación sufra un colapso crítico en la consola.

### 3. Operaciones Avanzadas en Bases de Datos Simuladas
* Aprendimos a transformar arrays de objetos locales en flujos asíncronos mediante la inyección del método de búsqueda **`.find()`** y operadores lógicos como la negación (`!`) para simular respuestas de servidores en entornos corporativos.

---

## 💻 Retos Implementados
1. **Validador de Crédito SaaS:** Evaluación numérica asíncrona de saldo financiero disponible frente a montos de compra mediante control de flujo estricto.
2. **Buscador Dinámico de Usuarios:** Consulta asíncrona por identificador de ID que retorna objetos de datos tipados (`Admin`, `User`, `Guest`) o excepciones controladas por falta de registro.

---

## 🎨 Renderizado en el DOM
Ambos retos se acoplaron a la interfaz visual de manera reactiva: los contenedores muestran un estado inicial de carga y se actualizan dinámicamente con estilos e información estructurada en el momento exacto en que la promesa cambia de estado.
