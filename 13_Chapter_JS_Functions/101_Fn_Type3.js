// Type 3 - With parameters and no return value

// Function definition

function greet(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript functions!");
}

greet("Akil"); // Calling the function with an argument to execute its code
greet("Punitha"); // Calling the function with a different argument
greet("Gayu"); // Calling the function with another argument
greet("Sathvika"); // Calling the function with yet another argument

let msg = greet("Nithul"); // Calling the function and storing its return value (which is undefined) in a variable
console.log(msg); // Output: undefined, since the function does not return any value