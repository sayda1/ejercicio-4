var tiempo, costoMinuto, costoLlamada;

tiempo = prompt("Por favor, ingresa el tiempo");
costoMinuto= prompt("Por favor, ingresa el costo por minuto");

costoLlamada= parseInt(tiempo) * parseInt(costoMinuto)

alert(costoLlamada);