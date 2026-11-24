// Call by value - Primitive data types
// Primitive, number, string, boolean, null, undefined

let a = 10;
let b = a;
b = 89;
console.log(a);
console.log(b);


// Call by Reference
// Objects — the reference value is copied, so both variables point to the same object.
// Reference - object, array, function

let obj1 = {
    val: 10
}
let obj2 = obj1;
obj2.val = 56;
console.log(obj1.val);
console.log(obj2.val);