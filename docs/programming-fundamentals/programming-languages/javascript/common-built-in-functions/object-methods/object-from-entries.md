---
sidebar_position: 1
---

# `Object.fromEntries()`: Converting Key-Value Pairs to Objects

`Object.fromEntries()` is a static method in JavaScript used to transform a list of key-value pairs into an object. It serves as the inverse operation of `Object.entries()` and was introduced in ES2019 (ES10).

## Basic Usage

```javascript
const entries = [['name', 'Alice'], ['age', 30]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: 'Alice', age: 30 }
```

## Features

1. Accepts any object that implements the iterable protocol, such as arrays or Maps.
2. Commonly used to convert Maps to plain objects.
3. Useful for transforming and manipulating object properties.

## Examples

### Working with Map objects

```javascript
const map = new Map([['name', 'Bob'], ['age', 25]]);
const obj = Object.fromEntries(map);
console.log(obj); // { name: 'Bob', age: 25 }
```

### Transforming object properties

```javascript
const object = { x: 42, y: 50 };
const newObject = Object.fromEntries(
  Object.entries(object).map(([key, value]) => [key, value * 2])
);
console.log(newObject); // { x: 84, y: 100 }
```

## Handling Mismatched Key-Value Pairs

`Object.fromEntries()` attempts to handle irregular inputs with some error tolerance:

1. **Missing value**: Property value is set to `undefined`
   ```javascript
   const obj = Object.fromEntries([['name', 'Alice'], ['age']]);
   console.log(obj); // { name: 'Alice', age: undefined }
   ```

2. **Extra values**: Additional elements are ignored
   ```javascript
   const obj = Object.fromEntries([['name', 'Bob', 'extra'], ['age', 30, 'ignored']]);
   console.log(obj); // { name: 'Bob', age: 30 }
   ```

3. **Empty arrays**: Are ignored
   ```javascript
   const obj = Object.fromEntries([['name', 'Charlie'], [], ['age', 35]]);
   console.log(obj); // { name: 'Charlie', age: 35 }
   ```

4. **Non-array elements**: Throws a TypeError
   ```javascript
   try {
     Object.fromEntries([['name', 'David'], 'notAnArray']);
   } catch (e) {
     console.error(e); // TypeError: Iterator value notAnArray is not an entry object
   }
   ```

5. **Non-iterable objects**: Throws a TypeError
   ```javascript
   try {
     Object.fromEntries(123);
   } catch (e) {
     console.error(e); // TypeError: 123 is not iterable
   }
   ```

## Important Notes

- If there are duplicate keys, the latter value will overwrite the former.
- This method may not be supported in older JavaScript environments.
- It's best to ensure the provided data format is correct to avoid unexpected results.

`Object.fromEntries()` is particularly useful in scenarios where you need to convert lists of key-value pairs into objects, especially when handling API responses or performing data transformations in functional programming.
