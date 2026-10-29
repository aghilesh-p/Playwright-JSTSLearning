let score = [45, 68, 12, 55, 41, 4, 1, 6];
console.log(score);
console.log("lexicographic sort", score.sort());
score.sort((a, b) => a - b);         //ascending order
console.log("ascending order", score);

score.sort((a, b) => b - a);         //decending order
console.log("decending order", score);

let numb = [20, 1, 10, 2];
console.log(numb);
console.log("lexicographic sort", numb.sort());
numb.sort((a, b) => a - b);
console.log(numb);

let neg = [11, 6, -3, 4, -6, -11, 1];
console.log(neg);
console.log("lexicographic sort", neg.sort());
neg.sort((a, b) => a - b);
console.log(neg);


let fruits = ["orange", "pineapple", "apple", "peach", "banana", "apricot"];
console.log(fruits);

console.log("lexicographic sort", fruits.sort());
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);

let stringss = ["cccc", "bbaa", "aaaa", "bbbb", "bbba", "aaab", "caaa"];
console.log(stringss);
console.log("lexicographic sort", stringss.sort());
stringss.sort((a, b) => a.localeCompare(b));
console.log(stringss);

let alpanum = ["file2", "file10", "file1", "file3", "file22"];
console.log(alpanum);
console.log("lexicographic sort", alpanum.sort());
alpanum.sort(new Intl.Collator(undefined, { numeric: true }).compare);
console.log(alpanum);