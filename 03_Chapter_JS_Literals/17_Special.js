// --------------------------------------------------------
// 5. SPECIAL NUMERIC VALUES
// --------------------------------------------------------

// Special numeric values in JavaScript include Infinity, -Infinity, and NaN (Not-a-Number).

// Infinity

let positiveInfinity = Infinity; // Represents positive infinity
console.log("Positive Infinity:", positiveInfinity);

let positiveZeroDivision = 1 / 0; // Division by zero results in positive infinity
console.log("1 divided by 0:", positiveZeroDivision);

console.log("Type of Positive Infinity:", typeof positiveInfinity); // number

// -Infinity

let negativeInfinity = -Infinity; // Represents negative infinity
console.log("Negative Infinity:", negativeInfinity);

let negativeZeroDivision = -1 / 0; // Division by negative zero results in negative infinity
console.log("-1 divided by 0:", negativeZeroDivision);

console.log("Type of Negative Infinity:", typeof negativeInfinity); // number

// NaN (Not a Number)

let notANumber = NaN;
console.log("Not a Number:", notANumber);
console.log("Type of Not a Number:", typeof notANumber);

let zeroDividebyzero = 0 / 0;
console.log("Zero divideby zero:", zeroDividebyzero);
console.log("Type of Zero Divide by zero:", typeof zeroDividebyzero);

let stringMultiplewithnumber = "hello" * 2;
console.log("String multiple with number:", stringMultiplewithnumber);
console.log("Type of string multiple with number:", typeof stringMultiplewithnumber);
