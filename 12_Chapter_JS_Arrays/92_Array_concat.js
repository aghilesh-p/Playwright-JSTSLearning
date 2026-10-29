// concat - combining two or more arrays into one array.

let a = [48, 96, 53];
let b = [74, 12, 64];

let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...b, ...a];         //b+a
console.log(d);