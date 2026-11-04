// Function as an expression

function greet(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript functions!");
}


let greet1 = function(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript functions!");
}

greet("Akil"); // Calling the function expression with an argument
greet1("Punitha"); // Calling the function expression with a different argument


//-----------------------------------------------------------------------------------

function welcomeMessage(name) {
    return "Hello, " + name + "! Welcome to JavaScript functions!";
}

let welcome1 = function(name) {
    return "Hello, " + name + "! Welcome to JavaScript functions!";
}

console.log(welcomeMessage("Akil")); // Calling the function expression with an argument and logging its return value
console.log(welcome1("Punitha")); // Calling the function expression with a different argument and logging its return value
