// ###  Function Expression wont allow Hoisting

greet();        //TypeError: greet is not a function

var greet = function () {
    console.log("Hello Everyone!!");
}

greet();

