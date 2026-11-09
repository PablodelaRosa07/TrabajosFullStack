# Ejercicio 3 · Respuestas

1. Para el servidor, vuelve a lanzarlo y visita `/firmas`. ¿Qué ha pasado con las firmas y por qué?

Han desaparecido: `/firmas` devuelve `[]`. Las firmas viven en el array `firmas`, que es una variable en la **memoria RAM** del proceso de Node. Al parar el servidor el proceso termina y su memoria se libera; al relanzarlo, el fichero se ejecuta desde cero y el array vuelve a crearse vacío. Para que sobrevivieran habría que guardarlas fuera del proceso: en un fichero (`fs.writeFile`) o en una base de datos.

2. ¿Por qué `let cuerpo = ''` tiene que declararse dentro de la función que atiende cada petición y no al principio del fichero?

Porque cada petición necesita su propio acumulador. Si `cuerpo` fuera una variable global del fichero, sería compartida por todas las peticiones: los trozos de un envío se añadirían a los datos del anterior (el segundo usuario recibiría `nombre=Ana&...nombre=Luis&...`) y, si dos usuarios enviaran a la vez, sus datos se mezclarían. Declarándola dentro de la función se crea una variable nueva, vacía, en cada petición.

3. Si el formulario tuviera `required` en todos sus campos, ¿haría falta validar igualmente en el servidor? Razona la respuesta.

Sí, siempre. `required` es una validación del *navegador*, pensada para ayudar al usuario, pero no es una garantía de seguridad: el cliente es algo que no controlamos. Alguien puede saltarse el formulario enviando la petición a mano con `curl`, Postman o las herramientas de desarrollo (F12), quitar el atributo `required` o desactivar JavaScript. Además, `required` no limita los 200 caracteres ni impide un nombre formado solo por espacios. El servidor no debe fiarse nunca de lo que llega: la validación del servidor es la que cuenta, la del navegador solo es comodidad.

4. Firma con el nombre `<h1 style="color:red">Hola</h1>`. ¿Qué aparece en la página de agradecimiento? ¿Por qué es un problema de seguridad?

Sin protección, aparece la palabra «Hola» en grande y de color rojo en lugar del texto literal: el navegador interpreta el nombre como HTML real, porque el servidor lo ha insertado tal cual en la respuesta.

Es un problema de seguridad porque permite una inyección de código (XSS, Cross-Site Scripting): en lugar de un `<h1>`, un atacante podría enviar un `<script>` que se ejecutaría en el navegador de quien viera esa página, robando cookies o datos de sesión, redirigiendo a webs falsas o modificando el contenido. Cualquier texto que escribe un usuario debe tratarse como datos, nunca como código.

Solución aplicada (ampliación): la función `escaparHTML(texto)` sustituye `&`, `<` y `>` por `&amp;`, `&lt;` y `&gt;` (el `&` se cambia primero para no escapar dos veces). Así el navegador muestra `<h1 style="color:red">Hola</h1>` como texto en pantalla, sin interpretarlo. Se usa en todas las respuestas HTML que incluyen texto del usuario.
