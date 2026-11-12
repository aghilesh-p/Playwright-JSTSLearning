console.log(testName);          // gives undefined

var testName = "Login Test";
var testName = "SignUp Test";   // allows redeclaration
var testName = "SignIn Test";

console.log(testName);

/*
Redeclaration not allowd in let & const

console.log(testAge);          // ReferenceError: Cannot access 'testAge' before initialization

let testAge = 52;
let testAge = 18;   
let testAge = 67;

console.log(testAge);
*/