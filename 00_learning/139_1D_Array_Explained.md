# JavaScript One-Dimensional Array: A Beginner-Friendly Guide

This note explains the array in `18_Chapter_Multi_Dimensional_Array/139_1D_Array_eg.js`:

```js
let result = ["pass", "fail", "waiting"];

console.log(result);
// console.log(result[0][0]);
// console.log(result[0][2]);
// console.log(result[0][3]);
```

## What is an array?

An array is like a row of numbered boxes. Each box can hold a value, and the boxes stay in order.

```js
let result = ["pass", "fail", "waiting"];
```

| Index (box number) | Value |
| ---: | --- |
| 0 | `"pass"` |
| 1 | `"fail"` |
| 2 | `"waiting"` |

JavaScript starts counting array indexes at **0**. So the first item is at index `0`, not index `1`.

## Reading the array

Use square brackets and an index to get one item:

```js
console.log(result[0]); // "pass"
console.log(result[1]); // "fail"
console.log(result[2]); // "waiting"
```

`console.log(result)` prints the whole array:

```text
[ 'pass', 'fail', 'waiting' ]
```

Trying to read an index that is not in the array gives `undefined`:

```js
console.log(result[3]); // undefined
```

There are three items, at indexes `0`, `1`, and `2`; index `3` has no item.

## The two indexes in `result[0][0]`

The original file has three commented-out examples. A line beginning with `//` is a comment, so JavaScript skips it. If you remove the comments, these expressions run:

```js
console.log(result[0][0]); // "p"
console.log(result[0][2]); // "s"
console.log(result[0][3]); // "s"
```

Read `result[0][0]` from left to right:

1. `result[0]` gets the first array item: `"pass"`.
2. `[0]` then gets the first character of that string: `"p"`.

The characters in `"pass"` also use indexes starting at zero:

| Character index | Character |
| ---: | :--- |
| 0 | `"p"` |
| 1 | `"a"` |
| 2 | `"s"` |
| 3 | `"s"` |

So `result[0][3]` is the fourth character of `"pass"`, which is `"s"`. This is still a one-dimensional array: the array contains strings, and the second index accesses a character inside one of those strings.

## How many items?

The `.length` property tells you how many items the array contains:

```js
console.log(result.length); // 3
```

The length is `3`, but the last index is `2`. For an array with at least one item, the last index is `length - 1`.

```js
console.log(result[result.length - 1]); // "waiting"
```

## Changing an item

Assign a new value at an index to replace that item:

```js
result[1] = "pass";

console.log(result); // ["pass", "pass", "waiting"]
```

Only the item at index `1` changed.

## Adding and removing items

`push()` adds an item to the end of the array:

```js
result.push("skipped");

console.log(result); // ["pass", "fail", "waiting", "skipped"]
```

`pop()` removes and returns the last item:

```js
let lastResult = result.pop();

console.log(lastResult); // "waiting"
console.log(result);     // ["pass", "fail"]
```

These methods change the existing array.

## Checking for a value

`includes()` answers whether the array contains a particular value:

```js
console.log(result.includes("pass"));    // true
console.log(result.includes("cancelled")); // false
```

## Going through every item

A `for` loop can visit each item using its index:

```js
for (let i = 0; i < result.length; i++) {
  console.log("Index:", i, "Value:", result[i]);
}
```

For the original `result` array, the output is:

```text
Index: 0 Value: pass
Index: 1 Value: fail
Index: 2 Value: waiting
```

You can also use `for...of` when you only need each value, not its index:

```js
for (let status of result) {
  console.log(status);
}
```

## One-dimensional versus two-dimensional arrays

A one-dimensional array is one row of items:

```js
let colors = ["red", "green", "blue"];
console.log(colors[1]); // "green"
```

A two-dimensional array contains arrays inside an array, like rows and columns:

```js
let seats = [
  ["A1", "A2"],
  ["B1", "B2"]
];

console.log(seats[0][1]); // "A2"
```

Here, `seats[0]` gets the first inner array (`["A1", "A2"]`), and `[1]` gets `"A2"` from that row. In the original `result[0][0]`, the outer array item is a string, not another array.

## Quick recap

- An array stores ordered values.
- Indexes start at `0`.
- `result[1]` gets the second array item.
- `result.length` gives the number of items.
- `result[0][1]` can access inside a value if that value is itself indexable, such as a string or another array.
- A comment beginning with `//` is ignored by JavaScript.
