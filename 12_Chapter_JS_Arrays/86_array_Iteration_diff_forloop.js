let cars = ["i20", "indica", "figo", "wagonR"];

console.log("normal for loop");

for (i = 0; i < cars.length; i++) {
    console.log(i, cars[i]);
}
console.log("-------------------------");

console.log("for...of - for loop");         //cleanest for values

for (let j of cars) {
    console.log(j);
}
console.log("-------------------------");

console.log("forEach - for loop");          //no return value

cars.forEach((k, index) => {
    console.log(`${index}:${k}`);
})
console.log("-------------------------");

console.log("entries() for loop");          //index + value

for (let [a, l] of cars.entries()) {
    console.log(a, l);
}
console.log("-------------------------");   //index = in

console.log("in - for loop");

for (let m in cars) {
    console.log(m, "->", cars[m]);
}