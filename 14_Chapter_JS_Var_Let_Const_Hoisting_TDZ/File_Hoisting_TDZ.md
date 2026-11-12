# JavaScript Hoisting and the Temporal Dead Zone (TDZ)

## What is hoisting?

Before JavaScript runs statements in a scope, it sets up the declarations in that scope. This behavior is called **hoisting**. It is a useful way to think about how declarations work; JavaScript does not literally move your source code to the top.

Different declarations are set up differently:

| Declaration | What is available before its line runs? | Result if used early |
| --- | --- | --- |
| `var` variable | The name is initialized with `undefined`. | Reading it gives `undefined`. |
| `let` or `const` variable | The name exists, but is uninitialized. | Reading it throws a `ReferenceError` (it is in the TDZ). |
| Function declaration | The function is available. | It can be called before its declaration. |

## `var` hoisting

The `var` declaration is hoisted and initialized to `undefined`. Its assignment still happens where it appears:

```js
console.log(greeting); // undefined

var greeting = "Hello!";
console.log(greeting); // "Hello!"
```

This is similar to JavaScript treating the code as:

```js
var greeting; // declaration is set up first
console.log(greeting); // undefined

greeting = "Hello!"; // assignment remains here
console.log(greeting); // "Hello!"
```

`var` is function-scoped (or global-scoped when declared outside a function), not block-scoped:

```js
if (true) {
  var status = "ready";
}

console.log(status); // "ready"
```

## `let` and `const` hoisting

`let` and `const` declarations are also set up before execution, but they are **not initialized** until execution reaches the declaration. Accessing one earlier throws a `ReferenceError`:

```js
console.log(age); // ReferenceError
let age = 25;
```

`const` follows the same rule and must also be initialized when declared:

```js
console.log(apiName); // ReferenceError
const apiName = "Demo API";
```

`let` and `const` are block-scoped:

```js
let color = "blue";

{
  // The inner `color` binding exists in this block but is not initialized yet.
  // It shadows the outer `color`, so this access throws a ReferenceError.
  console.log(color);
  let color = "green";
}
```

## What is the Temporal Dead Zone?

The **Temporal Dead Zone (TDZ)** is the time between entering a scope and the point where a `let` or `const` declaration is initialized. The name is in scope during this period, but JavaScript does not allow it to be accessed.

The TDZ is why this also throws, even though `typeof` normally works with undeclared names:

```js
console.log(typeof userName); // ReferenceError: userName is in the TDZ
let userName = "Sam";
```

By comparison, a name that has never been declared returns `"undefined"` with `typeof`:

```js
console.log(typeof notDeclared); // "undefined"
```

## Function declarations and function expressions

A function declaration is available before its line:

```js
sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}
```

A function expression or arrow function is not available as a function before its variable is initialized. The variable follows its own `var`, `let`, or `const` rules:

```js
runTest(); // ReferenceError: `runTest` is in the TDZ

const runTest = () => {
  console.log("Running test...");
};
```

## Quick rules to remember

- `var`: hoisted and initialized to `undefined`; function-scoped.
- `let`: block-scoped; accessing it before initialization throws a `ReferenceError`.
- `const`: same TDZ behavior as `let`; must be initialized at declaration.
- Function declarations can be called before their declaration.
- Function expressions and arrow functions are values assigned to variables, so the variable's declaration rules apply.
- Prefer `let` and `const` for predictable block-scoped behavior; use `const` when you do not need to reassign the binding.
