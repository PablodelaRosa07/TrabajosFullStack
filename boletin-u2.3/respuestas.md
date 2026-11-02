Boletín U2.3: El core de Node.js

Nombre: Pablo de la Rosa González  Curso: 2º DAM

1.- La documentación y los ficheros de una carpeta

a) Estabilidad de querystring y new Buffer()

Los niveles de estabilidad de la documentación son:

0. Deprecated - Obsoleto: no usar 
1. Experimental - Puede cambiar 
2. Stable - Estable: se puede usar 
3. Legacy - Se mantiene, pero hay alternativas mejores 

- querystring: Se mantiene por compatibilidad, pero la documentación recomienda usar 'URLSearchParams'.
- new Buffer(): Está obsoleto y no se debe usar. La alternativa es 'Buffer.alloc()' o 'Buffer.from()'.


b) Firma 'fs.readdir(path[, options], callback)'

- Obligatorios: 'path' (la carpeta a listar) y 'callback' (función que recibe '(err, ficheros)').
- Opcional: 'options'.
- Lo sé porque lo que va entre corchetes en la documentación es opcional.


c) Ver 'extensiones.js'.



2.- Temporizador de cocina

e) ¿Por qué el programa termina solo después de 'clearInterval'? ¿Qué pasaría si no lo llamaras?

Node termina cuando ya no le queda nada pendiente (temporizadores, servidores, streams abiertos…). Un 'setInterval' activo es una tarea que se repite para siempre, así que mantiene el programa vivo. Al llamar a 'clearInterval' ya no queda ningún temporizador activo y Node finaliza solo. Si no lo llamáramos, el contador seguiría bajando a números negativos y el programa no terminaría nunca, hasta pulsar 'Ctrl + C'.



3.- Caracteres y bytes

Ver 'bytes.js'.

b) Tabla (resultados reales de ejecutar el programa)

| Texto  | Caracteres | Bytes |
|--------|------------|-------|
| hola   |     4      |   4   |
| España |     6      |   7   |
| 5 €    |     3      |   5   |
| 😀    |     2      |   4   |

¿Por qué no siempre coinciden caracteres y bytes?

Porque Node codifica el texto en UTF-8, donde cada carácter ocupa entre 1 y 4 bytes:

- Las letras básicas (a-z, dígitos, espacio) ocupan 1 byte.
- Caracteres como 'ñ' ocupan 2 bytes.
- El símbolo '€' ocupa 3 bytes.
- El emoji 😀 ocupa 4 bytes.

Además, 'length' cuenta unidades de UTF-16, y el emoji es un par de unidades, por eso '😀.length' es 2 aunque sea un solo símbolo.



4.- Copiar un fichero en mayúsculas

Ver 'mayusculas.js' (fichero de prueba: 'nombres.txt', 15 bytes).

e) ¿Por qué aquí no puedes usar directamente 'lectura.pipe'? ¿Por qué hace falta 'process.exit()' al final?

- 'pipe' copia los trozos tal cual, sin tocarlos. Nosotros necesitamos transformar cada trozo (toUpperCase()) antes de escribirlo y además contar los bytes, así que escuchamos el evento 'data' y escribimos a mano con 'escritura.write()'.
- 'process.stdin' sigue abierto esperando datos del teclado y eso mantiene vivo el programa. Con 'process.exit()' lo terminamos explícitamente cuando ya hemos acabado de escribir.



6.- Un servidor web con varias rutas

e) ¿Por qué en la terminal aparece también 'GET /favicon.ico'? ¿Qué ocurre si arrancas el servidor dos veces a la vez en el mismo puerto?

- Los navegadores piden automáticamente '/favicon.ico' además de la página que hemos pedido. Como nuestro servidor registra todas las peticiones, aparece en la terminal, y responde con el 404 porque no tiene esa ruta.
- Un puerto solo puede estar ocupado por un programa a la vez. El segundo servidor falla con el error 'EADDRINUSE: address already in use' y se detiene. Hay que cerrar el primero o usar otro puerto.