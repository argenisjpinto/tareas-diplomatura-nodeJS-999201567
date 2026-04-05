const os = require('os');
const mostrarMensaje = require('./mensaje');

console.log("\n--- Saludo inicial ---");
console.log("Saludos profe, Soy Argenis Pinto.");
console.log("Estoy aprendiendo backend para mejorar mis habilidades de developer y poder crecer más como QA Automation Engineer");

console.log("\n--- Información del sistema ---");
console.log("Sistema operativo:", os.platform());
console.log("Memoria libre:", os.freemem());
console.log("Memoria total:", os.totalmem());
console.log("Número de CPUs:", os.cpus().length);
console.log("Tiempo de actividad (segundos):", os.uptime());
console.log("Usuario actual:", os.userInfo().username);
console.log("Directorio actual:", process.cwd());
console.log("Versión de Node.js:", process.version);

console.log("\n--- Mensaje personalizado ---");
console.log(mostrarMensaje());

console.log("\n--- Fin del contenido de la tarea ---");