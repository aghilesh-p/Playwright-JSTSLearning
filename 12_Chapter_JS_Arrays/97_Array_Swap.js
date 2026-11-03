let[first, second] = [10, 20];
console.log(first);  // 10
console.log(second); // 20

[first, second] = [second, first]; // swapping values
console.log(first);  // 20
console.log(second); // 10

let [a, b, c] = [100, 200, 300];
console.log(a); // 100
console.log(b); // 200
console.log(c); // 300

[a, b, c] = [c, a, b];
console.log(a); // 300
console.log(b); // 100
console.log(c); // 200

let p= 1, q= 2;
[p, q] = [q, p];
console.log(p); // 2
console.log(q); // 1

