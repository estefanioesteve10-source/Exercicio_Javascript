const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
     11, 12, 13, 14, 15];

const peers = numbers.filter(num => num % 2 === 0);
console.log(peers);

const nonPeers = numbers.filter(num => num % 2 !== 0);
console.log(nonPeers);