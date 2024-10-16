// Fermare il gioco
Runner.instance_.gameOver = function() {};

// Aggiungere un numero arbitrario di punti
setInterval(function() {
    Runner.instance_.distanceRan += 1000; // Incrementa i punti di 1000 per intervallo
    Runner.instance_.distanceMeter.update(1000); // Aggiorna il contatore visivo
}, 100);