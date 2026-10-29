let score = [85, 45, 63, 74, 30, 95];

// Map
let result = score.map(i => i > 50 ? "Pass" : "Fail");
console.log(result);

// Filter
let pass = score.filter(s => s >= 50);
console.log(pass);