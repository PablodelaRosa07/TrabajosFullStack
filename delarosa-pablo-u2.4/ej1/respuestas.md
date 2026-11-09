Ejercicio 1 · Respuestas

1. Al recargar, en la terminal aparece a veces `GET /favicon.ico`. ¿Quién hace esa petición y qué le responde tu servidor?

La hace el navegador por su cuenta, sin que nadie se lo pida: busca el icono (favicon) que se muestra en la pestaña. Lo pide a la raíz del servidor (`/favicon.ico`).

Mi servidor no tiene esa ruta en el objeto `rutas`, así que le responde con la página de error 404 (código de estado 404 y el HTML de «Error 404: la ruta no existe»). El navegador interpreta que no hay icono y no muestra ninguno.

2. Si escribes la hora directamente como valor dentro del objeto de rutas, siempre sale la misma. ¿Por qué ocurre?

Porque el valor de una propiedad del objeto se evalúa una sola vez, cuando Node ejecuta el fichero al arrancar el servidor. `new Date()` se ejecuta en ese momento y el texto resultante (por ejemplo «Son las 10:42:07») queda guardado en el objeto; cada petición posterior devuelve ese mismo texto.

La solución es guardar una función en lugar de un texto: así `new Date()` se vuelve a ejecutar cada vez que se llama a la función, es decir, en cada petición. Es lo que hace mi código (`rutas[req.url]()`).
