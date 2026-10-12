// ============================================================
// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------

// Decimal (Base 10) - most common
let decimal = 42; // decimal number literal
console.log("Decimal 42:", decimal);

// Binary (Base 2) - starts with 0b or 0B
let binary = 0b101010; // binary number literal
console.log("Binary 0b101010:", binary);

// Octal (Base 8) - starts with 0o or 0O
let octal = 0o52; // octal number literal
console.log("Octal 0o52:", octal);

// Hexadecimal (Base 16) - starts with 0x or 0X
let hexadecimal = 0x2A; // hexadecimal number literal
console.log("Hexadecimal 0x2A:", hexadecimal);

// --------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// --------------------------------------------------------

// Standard decimal notation
let floatDecimal = 3.14; // floating-point number literal
console.log("Floating-point 3.14:", floatDecimal);

let floatDecimal2 = -0.001; // floating-point number literal
console.log("Floating-point -0.001:", floatDecimal2);

let floatDecimal3 = 0.0; // floating-point number literal
console.log("Floating-point 0.0:", floatDecimal3);

let floatDecimal4 = 1.; // floating-point number literal
console.log("Floating-point 1.:", floatDecimal4);

let floatDecimal5 = .5; // floating-point number literal
console.log("Floating-point .5:", floatDecimal5);

// --------------------------------------------------------
// 3. EXPONENTIAL (SCIENTIFIC) NOTATION
// --------------------------------------------------------

let exp1 = 1e3; // 1 * 10^3 = 1000
console.log("Exponential 1e3:", exp1);

let exp2 = 2.5e-4; // 2.5 * 10^-4 = 0.00025
console.log("Exponential 2.5e-4:", exp2);

let exp3 = -3.1e2; // -3.1 * 10^2 = -310
console.log("Exponential -3.1e2:", exp3);

let exp4 = 5E6; // 5 * 10^6 = 5000000
console.log("Exponential 5E6:", exp4);
