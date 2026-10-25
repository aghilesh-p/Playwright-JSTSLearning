// valid identifier

for (let _l = 0; _l < 10; _l++) {
    console.log("_l=", _l);
}

console.log("-------------------------------------");

for (let _ = 10; _ < 20; _++) {
    console.log("_ =", _);
}

/* invalid identifier - SyntaxError

for (let -i= 0; -i < 10; -i++) {
    console.log(-i);
}
    */

// wont give any result
// the condition is getting failed - so wont give any result.

console.log("-----------------------------------");

for (let sathvi = 0; sathvi > 10; sathvi++) {
    console.log(sathvi);
}