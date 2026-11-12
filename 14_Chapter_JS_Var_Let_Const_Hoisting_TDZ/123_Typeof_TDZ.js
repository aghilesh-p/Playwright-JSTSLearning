// ReferenceError: Cannot access 'missingName' before initialization

typeof missingName;
console.log(typeof missingName);

let missingName = "Akil";           // Enter's into TDZ while declaring value.
console.log(typeof missingName);