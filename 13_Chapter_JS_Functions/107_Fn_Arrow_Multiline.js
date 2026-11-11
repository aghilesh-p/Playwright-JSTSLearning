const score = (n) => {
    if (n > 60) return "Pass";
    return "Fail";
}

console.log(score(50));
console.log(score(70));