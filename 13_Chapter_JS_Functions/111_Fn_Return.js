function getStatus(code) {
    if (code >= 200 && code <= 300) {
        return "Success";
    } else if (code >= 400 && code <= 500) {
        return "Client Error";
    } else if (code > 500) {
        return "Server Error";
    } else {
        return "Unknown Status";
    }
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(502));
console.log(getStatus(true));