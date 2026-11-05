const score = (n) => {
    if (n > 60) return "pass";
    return "Fail";
}

console.log(score(50));