---
sidebar_position: 4
---

# Array.from() in JavaScript

`Array.from()` is a powerful static method in JavaScript that creates a new, shallow-copied Array instance from an array-like or iterable object.

## Syntax

```javascript
Array.from(arrayLike[, mapFn[, thisArg]])
```

- `arrayLike`: An array-like or iterable object to convert to an array.
- `mapFn` (optional): Map function to call on every element of the array.
- `thisArg` (optional): Value to use as `this` when executing `mapFn`.

## Basic Usage

### Converting Array-like Objects

```javascript
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const newArray = Array.from(arrayLike);
console.log(newArray); // ['a', 'b', 'c']
```

### Converting Iterables

```javascript
const set = new Set(['foo', 'bar', 'baz']);
const arrayFromSet = Array.from(set);
console.log(arrayFromSet); // ['foo', 'bar', 'baz']
```

## Advanced Usage

### Using with Map Function

```javascript
const numbers = [1, 2, 3, 4];
const doubled = Array.from(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### Creating an Array of Numbers

```javascript
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

console.log(range(0, 4, 1)); // [0, 1, 2, 3, 4]
```

## Modern JavaScript Utilization

### With Spread Operator

While `Array.from()` is powerful, the spread operator can sometimes be used as an alternative:

```javascript
const iterable = 'hello';
const spreadArray = [...iterable];
console.log(spreadArray); // ['h', 'e', 'l', 'l', 'o']
```

### With Arrow Functions and Destructuring

```javascript
const getPairs = Array.from({ length: 5 }, (_, i) => [i, i * 2]);
console.log(getPairs); // [[0, 0], [1, 2], [2, 4], [3, 6], [4, 8]]

// Destructuring in a loop
for (const [index, value] of getPairs) {
    console.log(`Index: ${index}, Value: ${value}`);
}
```

### With Async Operations

```javascript
const urls = ['https://api.example.com/1', 'https://api.example.com/2'];
const fetchData = async () => {
    const responses = await Promise.all(
        Array.from(urls, url => fetch(url))
    );
    const data = await Promise.all(
        Array.from(responses, response => response.json())
    );
    console.log(data);
};
```
