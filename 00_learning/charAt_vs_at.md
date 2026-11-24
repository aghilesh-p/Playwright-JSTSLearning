# `"abc".charAt(0)` vs `"abc".at(0)`

## Quick Comparison

| Feature | `charAt()` | `at()` |
|---|---|---|
| Example | `"abc".charAt(0)` | `"abc".at(0)` |
| Result | `"a"` | `"a"` |
| Supports positive indexes | Yes | Yes |
| Supports negative indexes | No; treated as no valid index | Yes; `-1` means the last character |
| Index out of range | Returns an empty string `""` | Returns `undefined` |
| Decimal/fractional index | Truncates toward zero after conversion | Truncates toward zero after conversion |
| Unicode behavior | Uses UTF-16 code units | Uses UTF-16 code units |
| Browser/JavaScript support | Long-standing compatibility | Added in ES2022; older environments may not support it |

## Comparison Table

| Operation | Result | Explanation |
|---|---:|---|
| `"abc".charAt(0)` | `"a"` | Returns the character at index `0`. |
| `"abc".at(0)` | `"a"` | Returns the character at index `0`. |
| `"abc".charAt(-1)` | `""` | `charAt()` does not support negative indexes. |
| `"abc".at(-1)` | `"c"` | `at()` supports negative indexes from the end. |
| `"abc".charAt(10)` | `""` | An out-of-range index returns an empty string. |
| `"abc".at(10)` | `undefined` | An out-of-range index returns `undefined`. |

## Example

```js
const text = "abc";

console.log(text.charAt(0)); // "a"
console.log(text.at(0));     // "a"

console.log(text.charAt(-1)); // ""
console.log(text.at(-1));     // "c"

console.log(text.charAt(10)); // ""
console.log(text.at(10));     // undefined
```

## Recommendation

- Use `charAt()` when broader legacy compatibility is required.
- Use `at()` when you need negative indexes, such as getting the last character with `text.at(-1)`.
