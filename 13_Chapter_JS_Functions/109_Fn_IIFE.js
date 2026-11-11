// IIFE - Immediately Invoked Function Expression

function greet() {          //normal function   
    console.log("Hello");
}
greet();

(function () {              // Anonymous function - function without a name
    console.log("Hi, Anonymous Function called immediately");
})();


(()=>{                      // Anonymous Arrow function
    console.log("Hi, Arrow Function called immediately");
})();

