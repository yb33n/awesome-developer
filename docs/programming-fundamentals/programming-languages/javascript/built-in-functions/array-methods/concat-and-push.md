---
sidebar_position: 2
---

# Array Manipulation - `concat()` and `push()`

`concat()` and `push()` for adding elements to arrays.

## Usage

Both `concat()` and `push()` are used to add elements to arrays, but they operate differently and have distinct use cases.

### `concat()` Usage

`concat()` is used to merge two or more arrays into a new array without modifying the original arrays.

```javascript
const newArray = array1.concat(array2, array3, ..., arrayN);
```

Example:
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);

console.log(newArray);  // Output: [1, 2, 3, 4, 5, 6]
console.log(array1);    // Output: [1, 2, 3] (unchanged)
console.log(array2);    // Output: [4, 5, 6] (unchanged)
```

- Creates a new array
- Does not modify the original arrays
- Can concatenate multiple arrays at once
- Can also add individual elements

### `push()` Usage

`push()` is used to add one or more elements to the end of an existing array, modifying the original array.

```javascript
array.push(element1, element2, ..., elementN);
```

Example with individual elements:
```javascript
const fruits = ['apple', 'banana'];
fruits.push('orange', 'grape');

console.log(fruits);  // Output: ['apple', 'banana', 'orange', 'grape']
```

Example of pushing an array into another array:
```javascript
const mainArray = [1, 2, 3];
const secondArray = [4, 5, 6];

mainArray.push(secondArray);

console.log(mainArray);  // Output: [1, 2, 3, [4, 5, 6]]
```

To add elements of one array to another individually:
```javascript
const mainArray = [1, 2, 3];
const secondArray = [4, 5, 6];

mainArray.push(...secondArray);

console.log(mainArray);  // Output: [1, 2, 3, 4, 5, 6]
```

- Modifies the original array
- Adds elements to the end of the array
- Returns the new length of the array
- Can add multiple elements at once

## Comparing `concat()` and `push()`

| Feature                   | `concat()` | `push()`              |
|---------------------------|------------|-----------------------|
| Modifies original array   | No         | Yes                   |
| Returns                   | New array  | New length            |
| Can add multiple elements | Yes        | Yes                   |
| Adds elements to          | New array  | End of existing array |

## When to Use Each Method

- Use `concat()` when:
    - You want to combine arrays without modifying the originals
    - You need to create a new array with combined elements
    - You're working with immutable data structures

- Use `push()` when:
    - You want to add elements to an existing array
    - You don't need to create a new array
    - You're okay with modifying the original array
