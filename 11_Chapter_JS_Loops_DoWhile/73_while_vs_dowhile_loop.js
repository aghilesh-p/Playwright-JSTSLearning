// while loop Vs do_while loop

// while loop - will check the condition first

let a = 10;
while (a < 10) {        // the condition gets failed and doesnt execute anything
    console.log(a);
    a++;
}

let i = 15;                 // initialization
do {
    console.log(i);         // prints the value first   
    i++;                    // increment it by +1
} while (i < 17);           // condition check - if true - go in loop or terminate.

