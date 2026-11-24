let a = {
    status: "Pass"
};
let b = a;      // Copy the reference
b.status = "Fail";
console.log(a.status);