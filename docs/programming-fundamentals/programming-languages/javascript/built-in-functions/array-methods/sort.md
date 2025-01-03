---
sidebar_position: 3
---

# Array Sorting - sort()

## Understanding the Comparison Function ECMAScript Specification

> If `comparefn` is not `undefined` and not a function, a `TypeError` is thrown.
>
> If `comparefn` is `undefined`, elements are sorted in ascending, ASCII character order.
>
> Otherwise, `comparefn` should be called with two arguments `x` and `y`. If `comparefn(x,y)` is less than 0, `x` should be sorted before `y`; if 0, the order remains unchanged; if greater than 0, `x` should be sorted after `y`.

## Array.prototype.sort()

The `sort()` method in JavaScript arrays uses a comparison function to determine the order of elements. The ECMAScript specification defines the behavior of this function:

1. If `comparefn` is undefined, elements are sorted as strings.
2. If `comparefn` is provided, it should return:
    - A negative value if `a` should be sorted before `b`
    - A positive value if `a` should be sorted after `b`
    - Zero if the order of `a` and `b` should remain unchanged

## Example Usage

```javascript
inventors.sort((a, b) => a.year - b.year);
```

In this example, `(a, b) => a.year - b.year` is the comparison function:
- If the result is positive, `a.year` > `b.year`, so `a` is sorted after `b`
- If the result is negative, `a.year` < `b.year`, so `a` is sorted before `b`
- If the result is zero, the order remains unchanged

## Why This Works

The comparison function's return value determines the sorting order:
- Negative return: `a` before `b`
- Positive return: `a` after `b`
- Zero: order unchanged

This behavior is consistent across all JavaScript engines, ensuring uniform sorting results.

## Best Practices

- Always provide a comparison function for non-string sorting
- Ensure the comparison function returns appropriate negative, positive, or zero values
- Be aware of the default string-based sorting when no comparison function is provided

