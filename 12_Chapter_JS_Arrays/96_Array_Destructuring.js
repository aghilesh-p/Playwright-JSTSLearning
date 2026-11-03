let[first, second, third] = [10, 20, 30]; // array destructuring

console.log(first);
console.log(second);
console.log(third);

let[one, two, three] = [10, 20, 30, 40, 50]; 
// 40,50 will be ignored because we have only 3 variables to destructure the array.

console.log(one);
console.log(two);
console.log(three);

let[a, b, c, d, e] = [10, 20];
// a=10, b=20, c,d,e will be undefined because we have only 2 values in the array.  

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let[x, y, ...rest] = [100, 200, 300, 400, 500]; 
// rest operator will take the remaining values in the array and put them in a new array.

console.log(x);
console.log(y);
console.log(rest);

let[, , thirdValue] = [10, 20, 30]; 
// skipping the first two values and assigning the third value to thirdValue.

console.log(thirdValue);