let score = [
    [96, 86, 75],
    [68, 79, 97],
    [88, 48, 64]
];

let rowSum = score.map(row => row.reduce((a, b) => a + b));
console.log(rowSum);