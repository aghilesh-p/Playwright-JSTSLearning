function add(a, b, c) {
    return a + b + c;
}

let num=[1,2,3,4,5];
console.log(add(...num)); // Using spread operator to pass array elements as individual arguments to the function



function hasError(...codes) {
    return codes.some(code => code >= 400); // Using spread operator to accept multiple arguments and check if any code is an error code
}

let responseCodes = [200, 201, 404, 500];
console.log(hasError(...responseCodes)); // Using spread operator to pass array elements as individual arguments to the function

let responseCodes2 = [200, 201, 302];
console.log(hasError(...responseCodes2)); // Using spread operator to pass array elements as individual arguments to the function