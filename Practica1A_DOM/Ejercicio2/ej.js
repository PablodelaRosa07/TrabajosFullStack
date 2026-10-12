var enlaces = document.querySelectorAll("#lista-enlaces a");
var inputUrl = document.getElementById("input-url");

enlaces.forEach(enlace => {
    enlace.onclick = function(evento) {
        evento.preventDefault();
        
        inputUrl.value = this.href;
    };
});