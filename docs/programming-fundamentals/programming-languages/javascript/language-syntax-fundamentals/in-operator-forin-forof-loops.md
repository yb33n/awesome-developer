---
sidebar_position: 3
---

# JavaScript: `in` Operator, `for...in`, and `for...of` Loops

## The `in` Operator

The `in` operator checks if a specified property exists in an object or if an index exists in an array.

### Syntax

```javascript
property in object
```

### Examples

1. Object Properties

```javascript
const car = { make: 'Toyota', model: 'Corolla', year: 2021 };

console.log('make' in car); // true
console.log('color' in car); // false
console.log('toString' in car); // true (inherited from Object.prototype)
```

2. Array Indices

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(0 in fruits); // true
console.log(3 in fruits); // false
console.log('length' in fruits); // true (array property)
```

3. Using with `undefined` and `null`

```javascript
console.log('toString' in undefined); // Throws TypeError
console.log('toString' in null); // Throws TypeError
```

## The `for...in` Loop

The `for...in` loop iterates over all enumerable properties of an object, including inherited properties.

### Syntax

```javascript
for (variable in object) {
  // code to be executed
}
```

### Examples

1. Iterating Over Object Properties

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Output:
// firstName: John
// lastName: Doe
// age: 30
```

2. Iterating Over Array Indices

```javascript
const colors = ['red', 'green', 'blue'];

for (let index in colors) {
  console.log(`Index ${index}: ${colors[index]}`);
}

// Output:
// Index 0: red
// Index 1: green
// Index 2: blue
```

3. Handling Inherited Properties

```javascript
const baseObj = { inherited: 'I am inherited' };
const derivedObj = Object.create(baseObj);
derivedObj.ownProp = 'I am own property';

for (let prop in derivedObj) {
  if (derivedObj.hasOwnProperty(prop)) {
    console.log(`Own property: ${prop}`);
  } else {
    console.log(`Inherited property: ${prop}`);
  }
}

// Output:
// Own property: ownProp
// Inherited property: inherited
```

## The `for...of` Loop

The `for...of` loop iterates over iterable objects such as arrays, strings, maps, sets, and more.

### Syntax

```javascript
for (variable of iterable) {
  // code to be executed
}
```

### Examples

1. Iterating Over an Array

```javascript
const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(fruit);
}

// Output:
// apple
// banana
// orange
```

2. Iterating Over a String

```javascript
const message = 'Hello';

for (let char of message) {
  console.log(char);
}

// Output:
// H
// e
// l
// l
// o
```

3. Iterating Over a Map

```javascript
const userRoles = new Map([
  ['John', 'Admin'],
  ['Jane', 'Editor'],
  ['Bob', 'Subscriber']
]);

for (let [user, role] of userRoles) {
  console.log(`${user} is a ${role}`);
}

// Output:
// John is a Admin
// Jane is a Editor
// Bob is a Subscriber
```

## Iterable Objects

An iterable object is any object that implements the iterable protocol, which means it has a `Symbol.iterator` method that returns an iterator object.

### Examples

1. Built-in Iterable: Set

```javascript
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);

for (let num of uniqueNumbers) {
  console.log(num);
}

// Output:
// 1
// 2
// 3
```

2. Custom Iterable: Range

```javascript
function* range(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

for (let num of range(0, 10, 2)) {
  console.log(num);
}

// Output:
// 0
// 2
// 4
// 6
// 8
// 10
```

3. Making an Object Iterable

```javascript
const book = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
  pages: 176,
  [Symbol.iterator]: function* () {
    yield this.title;
    yield this.author;
    yield this.pages;
  }
};

for (let info of book) {
  console.log(info);
}

// Output:
// JavaScript: The Good Parts
// Douglas Crockford
// 176
```

## Comparing `for...in` and `for...of`

Here's an extended comparison with more scenarios:

```javascript
console.log("1. Basic array iteration:");
const numbers = [10, 20, 30];

console.log("for...in:");
for (let index in numbers) {
  console.log(index); // Prints indices: 0, 1, 2
}

console.log("for...of:");
for (let value of numbers) {
  console.log(value); // Prints values: 10, 20, 30
}

console.log("\n2. Object iteration:");
const person = { name: 'Alice', age: 30 };

console.log("for...in (works):");
for (let key in person) {
  console.log(`${key}: ${person[key]}`); 
  // name: Alice
  // age: 30
}

console.log("for...of (doesn't work with plain objects):");
try {
  for (let value of person) {
    console.log(value);
  }
} catch (error) {
  console.log(`Error: ${error.message}`); // *
}

console.log("\n3. String iteration:");
const str = 'Hello';

console.log("for...in:");
for (let index in str) {
  console.log(`${index}: ${str[index]}`);
  /*
    0: H
    1: e
    2: l
    3: l
    4: o
   */
}

console.log("for...of:");
for (let char of str) {
  console.log(char);
  /*
    H
    e
    l
    l
    o
   */
}

console.log("\n4. With added non-enumerable property:");
Object.defineProperty(numbers, 'sum', {
  value: function() { return this.reduce((a, b) => a + b, 0); },
  enumerable: false
});

console.log("for...in (skips non-enumerable properties):");
for (let key in numbers) {
  console.log(key);
}

console.log("for...of (works as before):");
for (let value of numbers) {
  console.log(value);
}

console.log("\n5. With prototype chain:");
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return `${this.name} makes a sound.`; };

const dog = new Animal('Rex');

console.log("for...in (includes inherited properties):");
for (let prop in dog) {
  console.log(prop);
}

console.log("for...of (doesn't work with non-iterable objects):");
try {
  for (let value of dog) {
    console.log(value);
  }
} catch (error) {
  console.log(`Error: ${error.message}`);
}
```

This illustrates how `for...in` and `for...of` behave differently with various data types and scenarios, including arrays, objects, strings, non-enumerable properties, and prototype chain inheritance.
