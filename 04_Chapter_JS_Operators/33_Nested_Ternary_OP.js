// Nested Ternary -> Multiple Conditions

// age = 26
// age > 16 -> drive 50cc with LLR , age > 18 -> Get LMV Licence

let age = 17;

let you_will_get = (age > 16) ?
            (age > 18 ? "allowed to Get LMV Licence" :
                "allowed to drive 50CC vehicle with LLR") :
                "Not allowed to Driving";

console.log(`You are ${you_will_get}`);