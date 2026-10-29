# Lexicographic Sort in JavaScript

Lexicographic sorting compares values like words in a dictionary: it looks at the first character, then the next character if the first ones match, and so on.

JavaScript's default `Array.prototype.sort()` converts array elements to strings and sorts those strings in ascending order. It changes the original array.

## Strings

```js
const fruits = ["pear", "apple", "orange"];
fruits.sort();

console.log(fruits); // ["apple", "orange", "pear"]
```

Each word is compared character by character, so `"apple"` comes before `"orange"`, which comes before `"pear"`.

## Using `localeCompare()`

`localeCompare()` compares two strings and returns a negative number when the first string should come before the second, a positive number when it should come after, or `0` when they compare as equal. Use it as the comparator for `sort()`:

```js
const strings = ["cccc", "bbaa", "aaaa", "bbbb", "bbba", "aaab", "caaa"];

strings.sort((a, b) => a.localeCompare(b));

console.log(strings); // ["aaaa", "aaab", "bbaa", "bbba", "bbbb", "caaa", "cccc"]
```

The strings are compared from left to right. For example, `"aaaa"` comes before `"aaab"` because the first three characters match and `"a"` comes before `"b"` at the next character. For these lowercase strings, plain `sort()` gives the same order. `localeCompare()` is useful when comparisons should follow language-aware rules, such as for accented or uppercase letters.

## Numbers

Without a comparison function, numbers are sorted as strings, not by numeric value:

```js
const numbers = [20, 1, 10, 2];
numbers.sort();

console.log(numbers); // [1, 10, 2, 20]
```

As strings, `"10"` comes before `"2"` because `"1"` comes before `"2"`. To sort numbers by their numeric value, provide a comparison function:

```js
const numbers = [20, 1, 10, 2];
numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 10, 20]
```

## Alphanumeric strings

Digits inside strings are also compared as characters by default:

```js
const files = ["file2", "file10", "file1"];
files.sort();

console.log(files); // ["file1", "file10", "file2"]
```

After the shared `"file"` prefix, `"1"` comes before `"2"`, so `"file10"` comes before `"file2"`. For a more human-friendly order that treats digit sequences as numbers, use `Intl.Collator` with its `numeric` option:

```js
const files = ["file2", "file10", "file1"];
files.sort(new Intl.Collator(undefined, { numeric: true }).compare);

console.log(files); // ["file1", "file2", "file10"]
```

Use the default sort for dictionary-like string ordering, a numeric comparator for numbers, and `Intl.Collator` with `numeric: true` when sorting strings that contain numbers.
