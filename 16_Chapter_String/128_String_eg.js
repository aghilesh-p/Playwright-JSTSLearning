let url = "https://wptimecapsule.com";
let status = 'pass';
let message = `Test completed in ${360}ms`;

console.log(url);
console.log(status);
console.log(message);


//single quotes
let s = 'hello';
console.log(s);

//double quotes
let l = "yellow";
console.log(l);

// Template literals (backticks)
let name = "Sathvi";
let msg = `Hello ${name} welcome, 2 + 2 is ${2 + 2}`;
console.log(msg);

// multiline

let report = `
Test = Login
Status = Pass
Duration = 360ms
`;
console.log(report);

console.log(String(200));
console.log(String(true));
console.log(String([1, 2]));
console.log(String(null));