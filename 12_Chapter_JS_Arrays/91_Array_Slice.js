// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically take from start to end.

let age = [39, 72, 65, 43, 5, 28];
console.log(age);
console.log(age.slice(1, 3));

console.log(age.slice(2));

console.log(age.slice());

console.log(age.slice(0));

console.log(age.slice(3,2));

console.log(age.slice(-2));

console.log(age.slice(-5,-2));

console.log(age.slice(-3,-5));