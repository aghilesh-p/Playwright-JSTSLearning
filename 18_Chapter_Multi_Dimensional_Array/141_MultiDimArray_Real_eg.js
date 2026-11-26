let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

console.log(testMatrix);


for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        process.stdout.write(testMatrix[i][j] + " ");
    }
    console.log("");
}
console.log("-----------");