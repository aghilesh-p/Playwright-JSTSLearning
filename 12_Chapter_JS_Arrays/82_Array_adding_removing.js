let score = [10, 20, 30, 40];
console.log(score.length);
console.log("Array value", score);

// push - will Add at the end

score.push(50);
console.log(score.length);
console.log("Array value", score);

score.push(60, 70);
console.log(score.length);
console.log("Array value", score);

// pop - will delete at the end

score.pop();
console.log(score.length);
console.log("Array value", score);

// unshift - will add at the beginning

score.unshift(5);
console.log(score.length);
console.log("Array value", score);

score.unshift(2, 3);
console.log(score.length);
console.log("Array value", score);

// shift - will delete at the beginning

score.shift();
console.log(score.length);
console.log("Array value", score);

//splice(2,1) - will delete at the middle
//[3, 5, 10, 20, 30, 40, 50, 60]
//|0 | 1 | 2 | 3| 4| 5 | 6 | 7 |
//         ^
score.splice(2, 1);          // it will delete 10 from the array list
console.log(score.length);
console.log("Array value", score);

score.splice(2, 0, 15);     // add 15 at the index of 2 - 0 wont delete any value
console.log(score.length);
console.log("Array value", score);

score.splice(3, 2, 45, 62); // deleted 2 value and add 2 new values in the array
console.log(score.length);
console.log("New array value is", score);

score.splice(1, 6, 99);     // deleted 6 value and add 1 new values in the array
console.log(score.length);
console.log("Array value is", score);