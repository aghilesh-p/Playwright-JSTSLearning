//Topic : null vs undefined
//===============================

// In JavaScript, null and undefined are two distinct types that represent the absence of a value,
// but they have different meanings and use cases.

// simple definition of null and undefined
//=============================================
/*  null:  null is an assignment value that represents the intentional absence of any object value.
            It is explicitly set by the programmer to indicate that a variable should have no value or empty value.
            It is an object type.

    undefined: undefined is a primitive value that indicates that a variable has been declared
                but has not yet been assigned a value.
                JS automatically assigns undefined to variables that are declared but not initialized.
*/

// Example of undefined

var x;
console.log(x); // Output: undefined

let userName;
console.log(userName); // Output: undefined
console.log(typeof userName); // Output: undefined

function myFunction() {
// This function does not return a value, so it implicitly returns undefined
}
console.log(myFunction()); // Output: undefined

// Example of null

let y = null;
console.log(y); // Output: null

let userAge = null;
console.log(userAge); // Output: null
console.log(typeof userAge); // Output: object

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison       | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/
