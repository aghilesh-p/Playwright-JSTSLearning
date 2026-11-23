let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("staging"));
console.log(url.includes("production"));

console.log(url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log(url.endsWith("true"));


console.log(url.indexOf("w"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("a"));
console.log(url.indexOf("nobody"));
console.log(url.indexOf("login"));