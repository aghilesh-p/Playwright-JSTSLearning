// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------


let largeNumber = 1_000_000; // Numeric separator for better readability
console.log("Large number with numeric separators:", largeNumber);

let creditCardNumber = 1234_5678_9012_3456; // Numeric separator in credit card number
console.log("Credit card number with numeric separators:", creditCardNumber);

let binaryWithSeparators = 0b1010_1010_1111; // Numeric separator in binary
console.log("Binary with numeric separators:", binaryWithSeparators);

let hexWithSeparators = 0xDEAD_BEEF; // Numeric separator in hexadecimal
console.log("Hexadecimal with numeric separators:", hexWithSeparators);

// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt literal
console.log("BigInt value:", bigIntValue);
console.log("Type of BigInt value:", typeof bigIntValue);

let anotherBigInt = 0x1FFFFFFFFFFFFFn; // BigInt in hexadecimal
console.log("Another BigInt value:", anotherBigInt);
console.log("Type of Another BigInt value:", typeof anotherBigInt);

let big = BigInt("1234567890123456789012345678901234567890"); // BigInt using constructor
console.log("Big value:", big);
console.log("Type of Big value:", typeof big);

let bigFromNumber = BigInt(42); // BigInt from number
console.log("Big from number:", bigFromNumber);
console.log("Type of Big from number:", typeof bigFromNumber);