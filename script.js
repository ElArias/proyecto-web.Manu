
// Contador de días desde el 23 de abril de 2025
const contador = document.getElementById("contador");
const inicio = new Date("2025-04-23T00:00:00");

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - inicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);
    contador.textContent = `Han pasado ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos desde que empezó nuestra historia 💖`;
}
setInterval(actualizarContador, 1000);
actualizarContador();

// Corazones animados
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = Array.from({length: 100}, () => ({ 
    x: Math.random() * canvas.width, 
    y: Math.random() * canvas.height, 
    size: Math.random() * 10 + 5, 
    speed: Math.random() * 1 + 0.5 
}));

function drawHeart(x, y, size) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
    ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
    ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
    ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 100, 150, 0.6)";
    ctx.fill();
    ctx.restore();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let heart of hearts) {
        drawHeart(heart.x, heart.y, heart.size);
        heart.y += heart.speed;
        if (heart.y > canvas.height) {
            heart.y = -heart.size;
            heart.x = Math.random() * canvas.width;
        }
    }
    requestAnimationFrame(animate);
}
animate();
// Efecto máquina de escribir para el mensaje
const mensaje = "Siento que el universo tuvo que mover mil estrellas para cruzar nuestros caminos. No sé cómo explicarlo, pero contigo todo se siente diferente... como si cada encuentro, cada palabra, estuviera escrita en algún rincón del cielo. A veces me da miedo que algo tan especial sea tan frágil, como un suspiro perdido en el viento. Pero aquí estoy, aferrándome a la magia que creamos, deseando que esta conexión que desafía el tiempo y el espacio no sea solo un instante... sino el principio de algo eterno.";

const mensajeElemento = document.getElementById("mensaje");
let i = 0;

function escribirTexto() {
    if (i < mensaje.length) {
        mensajeElemento.innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribirTexto, 70);
    } else {
        setTimeout(() => {
            document.getElementById("final").style.display = "block";
        }, 1000);
    }
}

escribirTexto();

const botonMusica = document.getElementById("playMusic");
const audio = document.getElementById("audio");

botonMusica.addEventListener("click", () => {
    if (audio.paused) {
        audio.currentTime = 330;
        audio.play().catch(error => {
            console.log("Error al reproducir audio:", error);
        });

        botonMusica.textContent = "Pausar música ⏸️";
    } else {
        audio.pause();
        botonMusica.textContent = "Reproducir música 🎵";
    }
});

// ESTRELLAS ANIMADAS 🌌
const canvasEstrellas = document.getElementById("estrellas");
const ctxEstrellas = canvasEstrellas.getContext("2d");
canvasEstrellas.width = window.innerWidth;
canvasEstrellas.height = window.innerHeight;

const estrellas = [];

for (let i = 0; i < 100; i++) {
    estrellas.push({
        x: Math.random() * canvasEstrellas.width,
        y: Math.random() * canvasEstrellas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3
    });
}

function animarEstrellas() {
    ctxEstrellas.clearRect(0, 0, canvasEstrellas.width, canvasEstrellas.height);

    for (let estrella of estrellas) {
        ctxEstrellas.beginPath();
        ctxEstrellas.arc(estrella.x, estrella.y, estrella.radius, 0, Math.PI * 2);
        ctxEstrellas.fillStyle = `rgba(255, 255, 255, ${estrella.alpha})`;
        ctxEstrellas.fill();

        estrella.x += estrella.dx;
        estrella.y += estrella.dy;

        if (estrella.x < 0 || estrella.x > canvasEstrellas.width) estrella.dx *= -1;
        if (estrella.y < 0 || estrella.y > canvasEstrellas.height) estrella.dy *= -1;
    }

    requestAnimationFrame(animarEstrellas);
}

animarEstrellas();

function mostrarCarta() {
    document.getElementById("cartaContainer").style.display = "flex";
}

function cerrarCarta() {
    document.getElementById("cartaContainer").style.display = "none";
}