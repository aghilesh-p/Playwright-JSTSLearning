let browser = ["chrome", "firefox", "safari", "opera", "edge"];
console.log(browser.length);

browser.pop();
console.log(browser);
console.log(browser.length);

let remove_first = browser.shift();
console.log("Removed browser",remove_first);
console.log(browser);
console.log(browser.length);

for (i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera doesnt support automation now!");
    } else {
        console.log("browser supports automation!");
    }
}