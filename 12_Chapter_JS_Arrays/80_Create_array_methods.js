// Arrays can be created in different methods.

// Normal method - Array creating - commanly used

let car = ["i20", "indica", "figo", "wagonR"];

// Empty array

let fruit = new Array(4);
// will create a empty array with 4 indexs [empty,empty,empty,empty]
fruit[0] = "apple";
fruit[1] = "bannana";
fruit[2] = "orange";

console.log(fruit[2]);
console.log(fruit[3]);

// array with value creation

let city = new Array("covai", "pollachi", "chennai", "erode");
console.log(city[3]);

let score = new Array(98, 100, 53, 18);
console.log(score[1]);

// Array of method (Array.of();)

let vegge = Array.of("carrot", "beans", "peas", "beetroot", "cabbage");
console.log("Array length", vegge.length);
console.log(vegge.at(-3));
console.log(vegge[4]);

// Array form method (Arrat.from();)
// It will create a array from the given string.
let people = Array.from("Sathvi");          //["S","a","t","h","v","i"]
console.log("Array length", people.length);
console.log(people[2]);
console.log(people.at(-2));
