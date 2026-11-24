
// Objects = {key: value}

let a = {
    name: "Akil"
};

console.log(a.name);
console.log(a["name"]);

// Keys are case sensitive.

let result = {
    status: "Pass",
    Status: "Fail"
};

console.log(result["status"]);
console.log(result["Status"]);