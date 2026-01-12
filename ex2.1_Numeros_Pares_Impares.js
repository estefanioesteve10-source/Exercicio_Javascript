/*
* Este programa separa os números pares e ímpares de um array,
* calcula a soma dos números pares e ímpares e imprime os resultados.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const peers = [];
const nonPeers = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 === 0)
    {
       peers.push(numbers[i]);
    }
    else
    {
        nonPeers.push(numbers[i]);
    }

}
console.log("These are the even numbers: " + peers);
console.log("These are the odd numbers: " + nonPeers);

let sumPeers = 0;
for (let i = 0; i < peers.length; i++){
    sumPeers += peers[i]; 
}
console.log("The sum of the even numbers is: " + sumPeers);

let sumnonPeers = 0;
for (let i = 0; i < nonPeers.length; i++){
    sumnonPeers += nonPeers[i]; 
}
console.log("The sum of the odd numbers is: " + sumnonPeers);