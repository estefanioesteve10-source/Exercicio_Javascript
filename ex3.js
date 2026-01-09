//Jogo de adivinhação
let num;
num = Math.floor(Math.random() * 11);
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Digite um número ', (numero) => {
    console.log("Número digitado: ", numero);
    if (Number(numero) === num) {
      console.log("Número correcto!");
    } else {
      console.log("Número incorrecto!");
      console.log("Número generado:", num);
    }
    rl.close();
});