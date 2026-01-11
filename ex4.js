//Calculadora

const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Digita o primeiro número: ', (num1) => {
    rl.question('Digita o segundo número: ', (num2) => {
        rl.question('Escolha a operação (+, -, *, /): ', (operacao) => {
            let resultado;
            switch (operacao){
                case '+':
                resultado = parseFloat(num1) + parseFloat(num2);
                break;
                case '-':
                    resultado = parseFloat(num1) - parseFloat(num2);
                    break;
                case '*':
                    resultado = parseFloat(num1) * parseFloat(num2);
                    break;
                case '/':
                    resultado = parseFloat(num1) / parseFloat(num2);
                    break;
                default:
                    console.log('Operação inválida');
                    break;
            }
            if (resultado !== undefined){
                console.log(`O resultado da operação é: ${resultado}`);
                rl.close();
                
            }
        })
    })
});