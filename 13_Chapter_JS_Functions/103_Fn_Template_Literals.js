function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript functions!`;
    // Returning a greeting message using template literals
}

let greeting = greet("Akil"); // Calling the function with an argument and storing its return value in a variable
console.log(greeting); // Output: "Hello, Akil! Welcome to JavaScript functions!"


function sumofTwoNumbers(num1, num2) {
    return `The sum of ${num1} and ${num2} is: ${num1 + num2}`;
    // Returning the sum of the two numbers using template literals
}

let result = sumofTwoNumbers(5, 10);    // Calling the function with two arguments and storing its return value in a variable
console.log(result); // Output: "The sum of 5 and 10 is: 15", since the function returns the sum of 5 and 10
