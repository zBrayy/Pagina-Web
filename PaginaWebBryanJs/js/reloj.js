function mostrarHoraExacta() {
    let fecha = new Date();
    
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    
   
    let relojcontador = horas + ":" + minutos + ":" + segundos;
    

    let Reloj = document.getElementById("reloj");
    
    if (Reloj) {
        Reloj.textContent = "Hora actual: " + relojcontador;
    }
}


mostrarHoraExacta();


setInterval(mostrarHoraExacta, 1000);