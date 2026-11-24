# Function Spread as Argument

This example shows two related JavaScript features:

- Spread operator (`...`) used while calling a function
- Rest parameter (`...`) used while defining a function

## Code

```js
function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3, 4, 5];
console.log(add(...num));

function hasError(...codes) {
    return codes.some(code => code >= 400);
}

let responseCodes = [200, 201, 404, 500];
console.log(hasError(...responseCodes));

let responseCodes2 = [200, 201, 302];
console.log(hasError(...responseCodes2));
```

## Explanation

### 1) Spread in a function call

```js
console.log(add(...num));
```

Here, `num` is an array:

```js
[1, 2, 3, 4, 5]
```

Using `...num` expands the array into individual values:

```js
add(1, 2, 3, 4, 5)
```

The function is defined as:

```js
function add(a, b, c) {
    return a + b + c;
}
```

Only the first three arguments are used, so JavaScript calculates:

```js
1 + 2 + 3 = 6
```

The extra values `4` and `5` are ignored because the function only accepts three parameters.

### 2) Rest parameter in a function definition

```js
function hasError(...codes) {
    return codes.some(code => code >= 400);
}
```

The `...codes` syntax collects all arguments passed to the function into an array named `codes`.

Example:

```js
hasError(...responseCodes)
```

This passes:

```js
hasError(200, 201, 404, 500)
```

So inside the function:

```js
codes = [200, 201, 404, 500]
```

Then:

```js
codes.some(code => code >= 400)
```

checks whether any code is greater than or equal to 400. Since `404` and `500` satisfy that condition, the output is:

```js
true
```

For `responseCodes2 = [200, 201, 302]`, none of the values are `>= 400`, so the result is:

```js
false
```

## Summary

This file demonstrates:

- `...arr` in function calls = spread array values as individual arguments
- `...args` in function definitions = gather multiple arguments into one array

This is very useful when working with dynamic lists of values in JavaScript.
