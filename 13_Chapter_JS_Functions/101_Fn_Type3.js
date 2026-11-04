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

function sumOfTwoNumbers(num1, num2) {
    console.log("The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2)); // Logging the sum of the two numbers
}

sumOfTwoNumbers(5, 10); // Calling the function with two arguments to execute its code
sumOfTwoNumbers(20, 30);

let result = sumOfTwoNumbers(15, 25); // Calling the function and storing its return value (which is undefined) in a variable
console.log(result); // Output: undefined, since the function does not return any value