var name = "Akil";

var firstName = "John";
var lastName = "Doe";

var This_is_a_very_long_variable_name = "This is a long variable name";
var thisisaverylongvariablename = "This is also a long variable name";

// naming conventions:
//====================
// camelCase & snake_case will be used mostly.
// SCREAMING_SNAKE_CASE is used for constants. PascalCase is used for class names and constructor functions. Hungarian notation is not commonly used in modern JavaScript, but can be seen in some legacy codebases.


// 1. camelCase - first word is lowercase, subsequent words are capitalized
// standard in JavaScript for variable and function names

let userName = "JohnDoe"; // camelCase
let userAge = 30; // camelCase
let userEmail = "john.doe@example.com"; // camelCase
let isLoggedIn = true; // camelCase

// 2. PascalCase - first letter of each word is capitalized
// often used for class names and constructor functions

class UserProfile { // PascalCase class name
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let ShoppingCart = 'This is a shopping cart class'; // PascalCase

// 3. snake_case - all letters are lowercase and words are separated by underscores

let user_profile = "This is a user profile"; // snake_case
let user_age = 25; // snake_case
let user_email = "john.doe@example.com"; // snake_case
let is_logged_in = false; // snake_case

// 4. SCREAMING_SNAKE_CASE - all letters are uppercase and words are separated by underscores
// often used for constants

const MAX_USERS = 100; // SCREAMING_SNAKE_CASE
//MAX_USERS = 200; // This will throw an error because MAX_USERS is a constant and cannot be reassigned
const API_KEY = "1234567890abcdef"; // SCREAMING_SNAKE_CASE
const DEFAULT_TIMEOUT = 5000; // SCREAMING_SNAKE_CASE

// 5. Hungarian Notation - prefixing variable names with a type or purpose indicator
// not commonly used in modern JavaScript, but can be seen in some legacy codebases

let strUserName = "JohnDoe";
let intUserAge = 30;
let boolIsLoggedIn = true;
let arrUserRoles = ["admin", "editor", "viewer"];
let nCount = 10; // Hungarian notation for a number variable
let bActive = true; // Hungarian notation for a boolean variable
