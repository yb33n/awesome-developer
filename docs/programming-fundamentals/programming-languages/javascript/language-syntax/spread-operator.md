---
sidebar_position: 1
---

# Spread Operator (...)

The spread syntax, introduced in ES6 (ECMAScript 2015), is a powerful feature in JavaScript that allows an iterable (such as an array or object) to be expanded in places where zero or more arguments or elements are expected. It's denoted by three dots (`...`).

## 1. Object Spread Syntax

The object spread syntax allows you to quickly copy all enumerable properties from one object to another.

```javascript
const person = { name: 'John' };
const newProps = { age: 30, greet() { console.log(`Hello, my name is ${this.name}`); } };

const updatedPerson = { ...person, ...newProps };

// Output: { name: 'John', age: 30, greet: [Function: greet] }
console.log(updatedPerson);
```

In this example, we create a new object `updatedPerson` that contains all properties from both `person` and `newProps` objects.

## 2. Array Spread Syntax

Similarly, the array spread syntax can be used to expand an array into its elements.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];

// Output: [1, 2, 3, 4, 5, 6]
console.log(combinedArr);
```

Here, we create a new array `combinedArr` that contains all elements from both `arr1` and `arr2`.

## 3. Function Arguments

The spread syntax can be used to pass an array as arguments to a function.

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

// Output: 6
console.log(sum(...numbers));
```

## 4. Copying Arrays

You can use spread syntax to create a shallow copy of an array.

```javascript
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

// Output: [1, 2, 3]
console.log(copyArray);
```

## 5. Concatenating Arrays

Spread syntax provides a more concise way to concatenate arrays.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatenated = [...arr1, ...arr2];

// Output: [1, 2, 3, 4, 5, 6]
console.log(concatenated);
```

## 6. Spreading String

The spread operator can be used to spread a string into an array of its characters.

```javascript
const str = "Hello";
const chars = [...str];

// Output: ['H', 'e', 'l', 'l', 'o']
console.log(chars);
```

## 7. Rest Parameters

While not exactly the same as spread syntax, rest parameters use the same `...` notation to collect multiple arguments into an array.

```javascript
function myFunc(...args) {
  return args.reduce((sum, current) => sum + current, 0);
}

// Output: 15
console.log(myFunc(1, 2, 3, 4, 5));
```

## 8. Merging Objects with Overwriting

When spreading objects, properties with the same key are overwritten by the last object that defines them.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };

// Output: { a: 1, b: 3, c: 4 }
console.log(merged);
```

The spread syntax is a versatile feature in JavaScript that can simplify many common operations involving arrays and objects. It's particularly useful for creating copies of data structures, combining multiple structures, and passing variable numbers of arguments to functions.
