/*
*Jogo de adivinhação de numeros em JavaScript
* O programa gera um número aleatório entre 0 e 10 e pede ao usuário para adivinhar o número.
* Após o usuário digitar um número, o programa informa se o palpite está correto ou não.
*/
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