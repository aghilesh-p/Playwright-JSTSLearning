// Type 1 - No parameters and no return value

// Function definition
function greet() {
    console.log("Hello, welcome to JavaScript functions!");
}

greet(); // Calling the function to execute its code

greet(); // Calling the function again to demonstrate reusability
greet(); // Calling the function a third time to show that it can be reused multiple times

function openBrowser() {
    console.log("Opening the browser...");
}
openBrowser(); // Calling the function to execute its code  

let msg = greet(); // Calling the function and storing its return value (which is undefined) in a variable  
console.log(msg); // Output: undefined, since the function does not return any value    
