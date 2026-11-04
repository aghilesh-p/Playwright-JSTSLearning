// Type 4: With parameters and with return value

// Function definition

function sumofTwoNumbers(num1, num2) {
return num1 + num2; // Returning the sum of the two numbers
}

let result = sumofTwoNumbers(5, 10);    // Calling the function with two arguments and storing its return value in a variable
console.log(result); // Output: 15, since the function returns the sum of 5 and 10

let result2 = sumofTwoNumbers(20, 30);  // Calling the function with different arguments
console.log(result2); // Output: 50, since the function returns the sum of 20 and 30

function greetUser(name) {
    return "Hello, " + name + "! Welcome to JavaScript functions!"; // Returning a greeting message
}
let greeting = greetUser("Akil"); // Calling the function with an argument and storing its return value in a variable
console.log(greeting); // Output: "Hello, Akil! Welcome to JavaScript functions!"