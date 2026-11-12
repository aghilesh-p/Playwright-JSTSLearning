/* 
var is function scoped and it is hoisted to the top of the 
    -   function or global scope.
It can be re-declared and updated. 
It is not block scoped.
*/

var v = 10;
console.log("Initial declaration:", v);
function helloAll() {
    console.log("Hello welcome all");
    var v = 20;
    console.log("Declaration inside function:", v);
    if (true) {
        console.log("Inside if block");
        var v = 30;
        console.log("Declaration inside if block:", v);
    }
    console.log("Printing v at the end of function:", v);
}


helloAll();
console.log("Printing v in global scope:", v);