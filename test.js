const sumar = require('./index');

if (sumar(2, 3) === 5) {
    console.log("Test pasado");
    process.exit(0);
} else {
    console.log("Test fallido");
    process.exit(1);
}
