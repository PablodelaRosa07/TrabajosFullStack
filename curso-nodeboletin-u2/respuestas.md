1.- Código bloqueante y no bloqueante 

a) ¿En qué orden se mostrarán las letras A, B, C y D? Razona la respuesta utilizando la pila de llamadas, la cola de callbacks y el event loop. 
El orden en el que se muestran es: **A, D, B, C** (o **A, D, C, B** dependiendo de la precisión del temporizador en milisegundos.

b) Ejecútalo y comprueba tu respuesta. ¿Qué instrucción es bloqueante? ¿Cuáles son no bloqueantes? Explica la diferencia. 
Bloqueante: Detiene por completo el hilo principal de Node.js hasta que finaliza la lectura del disco. 
No bloqueantes: Permiten que el hilo principal continúe ejecutando el resto del código mientras Node.js delega la tarea al sistema operativo o a su entorno en segundo plano. 

c) Cambia __filename por 'no-existe.txt' en la llamada a readFile y añade al callback la gestión del error con el parámetro err (convención «error primero»). ¿Qué muestra ahora? ¿Se detiene el programa? 
Al usar 'no-existe.txt' y capturar el error en el callback, el programa muestra por consola el mensaje de error del sistema (indicando que no existe el fichero) y no se detiene. Al haber gestionado el error, evitamos una excepción no capturada que habría abortado la ejecución. 

d) Añade al final console.log(process.version) y console.log(document.title). ¿Qué ocurre con cada una? Relaciónalo con las diferencias entre JavaScript en el navegador y en Node.js. 
‘process.version’: Muestra correctamente la versión de Node.js en ejecución, ya que el objeto global process es nativo de Node.js.
‘document.title’: Provoca un error (`document is not defined`). El objeto ‘document’ pertenece al DOM del navegador web y no existe en el entorno de servidor de Node.js. 





2.- Callbacks, promesas y async/await 

a) Explica por qué este código es un ejemplo de callback hell. ¿Por qué cada readFile/writeFile tiene que ir dentro del anterior? 
Este código anida callbacks de forma sucesiva. Cada operación depende estrictamente del resultado de la anterior, lo que obliga a colocar cada lógica dentro del nivel interno del callback previo, dificultando la legibilidad y el mantenimiento. 

d) Borra (o renombra) alumnos.txt y ejecuta las tres versiones. ¿En cuántos sitios hay que gestionar el error en cada una?.
Si borramos o renombramos el fichero alumnos.txt para forzar un error de lectura, el número de sitios donde debemos capturar y gestionar el error varía radicalmente según la estrategia asíncrona utilizada:

Versión con Callbacks (procesar.js):

Número de sitios: Hay que gestionar el error de forma explícita en 3 sitios distintos (un bloque if (err) dentro del callback de cada operación: al leer config.json, al leer alumnos.txt y al escribir el informe). Si se añade un nuevo paso, la complejidad y anidación crecen linealmente.

Versión con Promesas y .then() (procesar-then.js):

Número de sitios: Se gestiona en 1 único sitio, situado al final de la cadena mediante el método .catch(). Cualquier error que ocurra en cualquiera de los pasos anteriores se propaga automáticamente hacia abajo hasta este bloque de captura centralizado.

Versión con Async / Await (procesar-async.js):

Número de sitios: Se gestiona también en 1 único sitio, envolviendo toda la secuencia de llamadas asíncronas dentro de un bloque estructurado try / catch. Esta aproximación ofrece la mayor legibilidad, permitiendo tratar el código asíncrono casi como si fuera síncrono a la hora de manejar excepciones.


