//=========================================
// JavaScript Identifers rules
//=========================================

// valid identifiers
// ==========================

let validName = "Starts with a letter"; // valid identifier
let _login = "Starts with an underscore"; // valid identifier
let $amount = "Starts with a dollar sign"; // valid identifier

let user123 = "Contains numbers"; // valid identifier
let _tempValue = "Contains underscore"; // valid identifier
let $36 = "Contains dollar sign"; // valid identifier
let $var123 = "Contains dollar sign and numbers"; // valid identifier
let a1_b2 = "Contains letters, numbers, and underscore"; // valid identifier

let MyVariable = "Contains uppercase letters"; // valid identifier
let myVariable = "Contains lowercase letters"; // valid identifier

let résumé = "Contains Unicode characters"; // valid identifier
let 包含中文字符 = "Contains Chinese characters"; // valid identifier
let \u03B1 = "Contains Greek letter alpha"; // valid identifier
let \u0041 = "Contains Unicode escape sequence"; // valid identifier
let \u005f = "Contains Unicode escape sequence for underscore"; // valid identifier

// case sensitivity

let caseSensitive = "This is a case-sensitive identifier";
let CaseSensitive = "This is another case-sensitive identifier";

// camelCase

let userName = "This is a camelCase identifier";// valid identifier
let userAge = 30; // valid identifier
let userEmail = "This is a camelCase identifier";// valid identifier

// PascalCase

let UserProfile = "This is a PascalCase identifier";// valid identifier
let ShoppingCart = "This is a PascalCase identifier";// valid identifier

class UserName { // PascalCase class name
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function FullName() { // PascalCase function name
    // function body
}

// snake_case

let user_profile = "This is a snake_case identifier";// valid identifier
let user_age = 25; // valid identifier
let is_verified_user = true; // valid identifier

// SCREAMING_SNAKE_CASE

const MAX_USERS = 100; // valid identifier
const API_KEY = "1234567890abcdef"; // valid identifier
const DEFAULT_TIMEOUT = 5000; // valid identifier
// =================================================================


// invalid identifiers
// ==========================


// let 123hello = "Starts with a number"; // invalid identifier
// let -pen = "Starts with a hyphen"; // invalid identifier

// let Function = "Reserved keyword"; // invalid identifier
// let fuction = "Reserved keyword"; // invalid identifier

// let my variable = "Contains space"; // invalid identifier
// let my-variable = "Contains hyphen"; // invalid identifier
// let my@variable = "Contains special character"; // invalid identifier
// let my#variable = "Contains special character"; // invalid identifier
// let my$variable = "Contains special character"; // invalid identifier

// doubt

// let \u{1F600} = "Contains Unicode code point"; // valid identifier or invalid identifier
