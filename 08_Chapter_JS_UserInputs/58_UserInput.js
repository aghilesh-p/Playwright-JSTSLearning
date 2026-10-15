// This wont execute in JS because prompt is a keyword which will execute in browser.


let num = prompt("Enter the number");
num = Number(num);

if (num % 2 === 0) {
    console.log(num + " is Even");
}
else {
    console.log(num + " is odd");
}