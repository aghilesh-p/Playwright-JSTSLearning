//cold code
let a = 5;
console.log("This is cold code value: " + a);


//hot code
for(let i = 0; i < 500; i++) {
    hotCodeFunction();
    console.log(i);
}

function hotCodeFunction() {
    console.log("This is hot code value:");
}
