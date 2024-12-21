---
sidebar_position: 1
---

# Falsy Values in JavaScript

JavaScript has several values that are considered "falsy" in conditional contexts:

- `undefined`
- `null`
- `0`
- `NaN`
- `''` (empty string)
- `false`

These values are treated as `false` when used in boolean contexts, such as in `if` statements.

## Example: Checking Object Properties

Consider this code snippet:

```javascript
const dataList = ['car', 'car', 'trunk'];
const dataObj = {};

dataList.forEach(item => {
    if (!dataObj[item]) {
        console.log(item + ': not exist');
        dataObj[item] = 0;
    } else {
        dataObj[item] += 1;
    }
});
console.log(dataObj);
```

### Key Points:

1. `if (!dataObj[item])` checks if `dataObj[item]` is falsy.
2. This condition is true for `undefined` (when the property doesn't exist) and other falsy values.
3. After setting `dataObj[item] = 0`, subsequent checks will still evaluate to `true` because `0` is falsy.

## Comparison: `!dataObj[item]` vs `dataObj[item] === undefined`

- `if (!dataObj[item])`: Checks if the value is any falsy value.
- `if (dataObj[item] === undefined)`: Strictly checks if the value is `undefined`.

### Differences:

1. `!dataObj[item]` will be `true` for `undefined`, `null`, `0`, `NaN`, `''`, and `false`.
2. `dataObj[item] === undefined` is only `true` when the property doesn't exist or is explicitly set to `undefined`.

## Best Practices

1. Use strict equality (`===`) when specifically checking for `undefined`.
2. Be aware of falsy values in conditional checks.
3. Consider using `Object.hasOwnProperty()` or the `in` operator for checking property existence.
