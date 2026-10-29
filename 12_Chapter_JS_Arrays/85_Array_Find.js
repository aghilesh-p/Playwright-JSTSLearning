let num = [10, 20, 35, 40, 45];
let result = num.find(temp => temp > 30);
console.log(result);


let index = num.findIndex(temp => temp > 30);
console.log(index);

let lastnum = num.findLast(temp => temp > 30);
console.log(lastnum);

let lastindex = num.findLastIndex(temp => temp > 30);
console.log(lastindex);