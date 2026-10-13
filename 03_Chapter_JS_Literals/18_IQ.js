let u;
console.log(u);
console.log(typeof u); // undefined

// undefined is not a part of "literal", because we didnt assign a value ->
// JS automatically assign a value as "undefined".
// undefined is a read-only property.

let n = null;
console.log(n);
console.log(typeof n); // object

// null is part of "literal", because we assign the value as "null".

// what does it print?

console.log(0b1010 + 0o10 + 0xA);

console.log([1, ,3,].length);
// it counts the slots based on ",".
// before "," it will take it as one slot.
