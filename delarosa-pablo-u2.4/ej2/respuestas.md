Ejercicio 2 · Respuestas

1. Al cargar `/` aparecen dos peticiones en la terminal. ¿Cuáles son y por qué?

Aparecen:

```
GET /
GET /estilos.css
```

La primera es la página que escribimos en la barra de direcciones. El navegador recibe `index.html`, lo analiza y, al encontrar `<link rel="stylesheet" href="/estilos.css">`, lanza **una segunda petición** para descargar la hoja de estilos. Cada recurso (CSS, imágenes, scripts…) es una petición distinta, y el servidor tiene que responder a todas. Por eso hay una ruta específica para `/estilos.css`.

(A veces aparece además `GET /favicon.ico`, que el navegador pide por su cuenta y que se responde con el 404.)

2. Imagina que tienes que servir un vídeo de 500 MB. ¿Qué problema tendría `fs.readFile` y qué alternativa de las vistas en clase usarías?**

`fs.readFile` carga el fichero entero en memoria (un Buffer de 500 MB) antes de poder enviar nada. Con varias peticiones simultáneas la memoria se dispara (500 MB × nº de usuarios) y el cliente tarda en recibir el primer byte, porque el servidor no empieza a responder hasta terminar de leer.

La alternativa son los streams: `fs.createReadStream(ruta).pipe(res)`. El fichero se lee y se envía a trozos (chunks de 64 KB), por lo que el consumo de memoria es pequeño y constante y el navegador empieza a recibir datos de inmediato. Es posible porque `res` es un stream de escritura.
