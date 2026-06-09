// Configura aquí la fecha de tu evento FAMEX
const fechaEvento = new Date("April 20, 2027 00:00:00").getTime();

const temporizador = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    // Cálculos matemáticos de tiempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Inyectamos los números asegurándonos de que siempre tengan 2 dígitos (ej. 05 en vez de 5)
    document.getElementById("box-dias").innerHTML = dias < 10 ? "0" + dias : dias;
    document.getElementById("box-horas").innerHTML = horas < 10 ? "0" + horas : horas;
    document.getElementById("box-minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("box-segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos;

    // Si la cuenta termina
    if (distancia < 0) {
        clearInterval(temporizador);
        document.getElementById("box-dias").innerHTML = "00";
        document.getElementById("box-horas").innerHTML = "00";
        document.getElementById("box-minutos").innerHTML = "00";
        document.getElementById("box-segundos").innerHTML = "00";
    }
}, 1000);