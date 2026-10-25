//Array type of is - object -

let fruit = [];
console.log(typeof fruit);

let browser = ["chrome", "firefox", "edge","safari"];
console.log(browser.length);        // length of the array

console.log(browser[0]);            // gives value of the array based on index
console.log(browser.at(0));         // gives value of the array based on the -ive index

console.log(browser[-1]);           // -ive index supports with .at() only
                                    // gives result as undefined

console.log(browser.at(-1));        // gives value of the array based on the -ive index                                    