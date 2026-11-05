// Normal Fn vs Fn expression vs Arrow Fn

// Normal function
function greet(name){
    return `Hello, ${name}`;
}

console.log(greet("Akil")); // Output: Hello, Akil

// Function Expression
const welcome = function(name){
    return `Welcome, ${name}!`;
}

console.log(welcome("Gayu")); // Output: Welcome, Gayu!

// Arrow Function

let arrowGreet = (name) => `Welcome to arrow function, ${name}`;

console.log(arrowGreet("Sathvika")); // Output: Welcome to arrow function, Sathvika