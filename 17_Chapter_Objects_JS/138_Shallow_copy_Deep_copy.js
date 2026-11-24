// Call by reference: one object, two names
let a = {
    status: "Pass"
};
let b = a;
b.status = "Fail";
console.log(a.status);
console.log(b.status);

// Shallow copy (...spread): new object, but the inner object is shared

let user1 = {
    name: "Akil",
    address: {
        city: "Cbe"
    }
};
let copy1 = { ...user1 };
copy1.name = "Sathvi";
copy1.address.city = "POY";
console.log(user1.name);
console.log(user1.address.city);
console.log(copy1.name);
console.log(copy1.address.city);

//deep copy (structuredClone): everything is new

let user2 = {
    name: "Punit",
    address: {
        city: "ED"
    }
};
let copy2 = structuredClone(user2);
copy2.name = "Gaayu";
copy2.address.city = "VG";
console.log(user2.name);
console.log(user2.address.city);
console.log(copy2.name);
console.log(copy2.address.city);
