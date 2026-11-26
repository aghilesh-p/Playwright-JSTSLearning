# JavaScript Star Patterns: Beginner-Friendly Guide

This guide explains the three programs in `18_Chapter_Multi_Dimensional_Array`:

- `143_Right_Hand_Pattern.js`
- `144_Left_Hand_Pattern.js`
- `145_Pyramid_Pattern.js`

Each program repeats a simple job: build one row of stars, print it, then build the next row.

## A quick picture of nested loops

Think of the outer loop as choosing the row. The inner loop decides how many characters to put in that row.

```text
outer loop: row 1
  inner loop: print the row's characters
outer loop: row 2
  inner loop: print the row's characters
...
```

The outer loop runs once per row. The inner loop runs again from the beginning for each new row.

## 143: Increasing triangle

The program sets `n` to `8`. Its outer loop counts `i` from `0` up to `7`. For each row, the inner loop prints a star for every `j` from `0` to `i`.

```js
let n = 8;

for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log("");
}
```

The first row has `i = 0`, so the inner loop prints one star. The next row has `i = 1`, so it prints two stars. In general, each row has `i + 1` stars.

<figure>
<figcaption>Shape printed by 143_Right_Hand_Pattern.js</figcaption>
<pre>
*
**
***
****
*****
******
*******
********
</pre>
</figure>

| Row | `i` | Stars (`i + 1`) |
| ---: | ---: | ---: |
| 1 | 0 | 1 |
| 2 | 1 | 2 |
| 3 | 2 | 3 |
| 8 | 7 | 8 |

`process.stdout.write("*")` prints a star without moving to the next line. After all stars for a row are printed, `console.log("")` moves to a new line.

## 144: Decreasing triangle

This program starts `i` at `n` (which is `5`) and counts down to `1`. The inner loop prints `i` stars, so each new row has one fewer star.

```js
let n = 5;

for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log("");
}
```

<figure>
<figcaption>Shape printed by 144_Left_Hand_Pattern.js</figcaption>
<pre>
*****
****
***
**
*
</pre>
</figure>

| Row | `i` | Stars |
| ---: | ---: | ---: |
| 1 | 5 | 5 |
| 2 | 4 | 4 |
| 3 | 3 | 3 |
| 4 | 2 | 2 |
| 5 | 1 | 1 |

The stars all start at the left. The pattern gets shorter because `i` counts down. The name “left hand” is the filename's label; the code itself determines the exact shape shown above.

## 145: Pyramid

This program builds a whole row in a string before printing it. For each row, it adds some spaces first and then adds stars.

```js
let n = 3;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row = row + "*";
    }
    console.log(row);
}
```

For each row:

- The first inner loop adds `n - i` spaces.
- The second inner loop adds `2 * i - 1` stars.
- `console.log(row)` prints the completed row and starts the next line.

With `n = 3`, the rows are built like this:

| `i` (row) | Spaces (`n - i`) | Stars (`2 * i - 1`) | Row |
| ---: | ---: | ---: | :--- |
| 1 | 2 | 1 | `  *` |
| 2 | 1 | 3 | ` ***` |
| 3 | 0 | 5 | `*****` |

<figure>
<figcaption>Pyramid diagram (the dot characters stand for spaces)</figcaption>
<pre>
··*
·***
*****
</pre>
</figure>

The actual output uses spaces, not dots:

```text
  *
 ***
*****
```

The number of stars grows by two each row: `1`, `3`, then `5`. The spaces shrink by one each row: `2`, `1`, then `0`. That is what makes the shape look centered.

## Why are there two loops?

One loop controls **how many rows** to print. A second loop controls **how many characters** go in a row.

- In program 143, the inner loop prints stars.
- In program 144, the inner loop prints fewer stars on each row.
- In program 145, one inner loop adds spaces and another adds stars.

## A small JavaScript note

In `143_Right_Hand_Pattern.js`, `i` and `j` are used without `let`, `const`, or `var`. That can create global variables in non-strict JavaScript, and it can cause an error in strict mode. It is safer to declare them in the loops, as the other examples do:

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log("");
}
```

## Quick recap

- The outer loop decides how many rows are printed.
- The inner loop decides what characters go in each row.
- `process.stdout.write()` prints without starting a new line.
- `console.log()` prints a line and then starts the next one.
- The pyramid uses leading spaces to center its stars.
