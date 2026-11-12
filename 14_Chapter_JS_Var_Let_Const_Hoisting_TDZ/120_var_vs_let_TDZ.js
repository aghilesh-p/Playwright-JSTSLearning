var a = "Akil";


if (true) {
    console.log(a);
    var a = "Gayu";
    console.log(a);
}

let b = "sathvi";

if (true) {
    console.log(b);     // ReferenceError: Cannot access 'b' before initialization. Enters into TDZ 
    let b = "punith";
    console.log(b);
}