// what will happen if we didnt use "break;" statement.
// it will print all the fallback cases.

let month = 3;

switch (month) {
    case 1:
        console.log("Jan");
    case 2:
        console.log("Feb");
    case 3:
        console.log("march");
    case 4:
        console.log("april");
    case 5:
        console.log("may");
    case 6:
        console.log("june");
    case 7:
        console.log("july");
    case 8:
        console.log("aug");
    case 9:
        console.log("sep");
    case 10:
        console.log("oct");
    case 11:
        console.log("nov");
    case 12:
        console.log("dec");
    default:
        console.log("Not a month");
}


/*
output:

march
april
may
june
july
aug
sep
oct
nov
dec
Not a month
*/