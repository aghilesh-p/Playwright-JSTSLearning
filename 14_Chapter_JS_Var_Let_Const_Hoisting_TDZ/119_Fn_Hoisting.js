// Function declaration and calling function is allowed - which are FULLY HOISTING 


function getUserStatus() {
    console.log(status);
    var status = "Active";
    console.log(status);
}

getUserStatus();


sayHello();

function sayHello() {
    console.log("Hello World!!");
}