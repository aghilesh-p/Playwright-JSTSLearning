let l = 10;
console.log("Value of l in initial declaration:", l);
function printHello() {
    console.log("Hello All");
    let l = 20;
    console.log("Value of l in function:", l);
    if (true) {
        let l = 5;
        console.log("Value of l inside if block:", l);
    }
    console.log("Value of l at the end of function:", l);
}
printHello();
console.log("Value of l in global scope:", l);

