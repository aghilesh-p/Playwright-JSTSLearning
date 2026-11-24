# JavaScript `slice()` Method - Complete Guide

The `slice()` method returns a shallow copy of a portion of an array into a new array without modifying the original array.

## Syntax

```javascript
array.slice(start, end);
```

### Parameters

- `start` → Starting index (included)
- `end` → Ending index (excluded)
- Returns a new array
- Does not modify the original array

---

## Example Array

```javascript
let age = [39, 72, 65, 43, 5, 28];
```

Positive indexes:

```text
 0   1   2   3   4   5
[39, 72, 65, 43, 5, 28]
```

Negative indexes:

```text
-6  -5  -4  -3  -2  -1
[39, 72, 65, 43, 5, 28]
```

# Part 1: Positive Indexes

Positive indexes count from the beginning of the array.

## Example 1: slice(2)

```javascript
age.slice(2); // [65, 43, 5, 28]
```

## Example 2: slice(1, 4)

```javascript
age.slice(1, 4); // [72, 65, 43]
```

## Example 3: slice(0, 3)

```javascript
age.slice(0, 3); // [39, 72, 65]
```

## Example 4: slice(3, 2)

```javascript
age.slice(3, 2); // []
```

Start index is greater than end index.

## Positive Index Rules

- Start index is included.
- End index is excluded.
- Omitting `end` copies to the end of the array.
- If `start >= end`, the result is an empty array.

# Part 2: Negative Indexes

Negative indexes count from the end of the array.

- `-1` = last element
- `-2` = second-last element
- `-3` = third-last element

## Example 1: slice(-3)

```javascript
age.slice(-3); // [43, 5, 28]
```

## Example 2: slice(-4, -1)

```javascript
age.slice(-4, -1); // [65, 43, 5]
```

## Example 3: slice(1, -2)

```javascript
age.slice(1, -2); // [72, 65, 43]
```

## Example 4: slice(-2, -1)

```javascript
age.slice(-2, -1); // [5]
```

## Conversion of Negative Indexes

For an array length of 6:

```javascript
-1 = 5
-2 = 4
-3 = 3
-4 = 2
```

```javascript
age.slice(-3, -1);
```

becomes:

```javascript
age.slice(3, 5); // [43, 5]
```

## Useful Shortcuts

```javascript
age.slice(-1); // [28]
age.slice(-2); // [5, 28]
age.slice(-3); // [43, 5, 28]
```

# Quick Summary

- Positive indexes count from the beginning.
- Negative indexes count from the end.
- Start index is included.
- End index is excluded.
- `slice()` never modifies the original array.
