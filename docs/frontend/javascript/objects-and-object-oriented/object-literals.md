---
sidebar_position: 1
---

# Object Literals

Object literals provide a concise syntax for creating objects in JavaScript. They use curly braces `{}` to define an object, containing one or more key-value pairs. Each pair consists of a property name (key) and a property value, separated by a colon `:`. Multiple key-value pairs are separated by commas `,`.

The basic syntax for object literals is as follows:

```javascript
const obj = {
  key1: value1,
  key2: value2,
  // ...
  keyN: valueN
};
```

Here, `key1`, `key2`, ..., `keyN` are property names (keys) that can be strings or valid identifier names. `value1`, `value2`, ..., `valueN` are the corresponding property values, which can be any valid JavaScript expression, including other objects, arrays, or functions.

For example:

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  isStudent: false,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

In this example, we define an object named `person` with four properties:
- `name` with a string value `'John Doe'`
- `age` with a number value `30`
- `isStudent` with a boolean value `false`
- `greet` with a function value

Object literals also support enhanced syntax, such as computed property names, shorthand property names, and method definition shorthand. These syntaxes were introduced in ES6 (ECMAScript 2015) to make object literals more concise and readable.

For example:

```javascript
const name = 'John Doe';
const age = 30;

const person = {
  name, // equivalent to name: name
  age, // equivalent to age: age
  ['full' + 'Name']: `${name} Smith`, // computed property name
  greet() { // method definition shorthand
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

In this example, we use shorthand property syntax for `name` and `age`. We also use computed property name syntax `['full' + 'Name']` to dynamically define a property name. Lastly, we use method definition shorthand syntax `greet() { ... }` to define a method.

## Parentheses-Wrapped Object Literal Form

The `({ ... })` syntax is a parentheses-wrapped form of object literals.

In JavaScript, when an object literal appears in certain contexts, such as being returned from a function or immediately executed, it may cause syntactic ambiguity or parsing errors. To avoid this, we can wrap the object literal in parentheses.

For example, when returning an object literal from an arrow function, parentheses are needed to avoid ambiguity:

```javascript
const getObject = () => ({ name: 'John', age: 30 });
```

Without parentheses, JavaScript would parse it as:

```javascript
const getObject = () => { name: 'John', age: 30 }; // Syntax error
```

Another common scenario is using object literals in immediately invoked function expressions:

```javascript
const person = (({ name, age }) => ({ name, age }))({ name: 'John', age: 30 });
```

In this example, the outer parentheses `(({ name, age }) => ({ name, age }))` form an immediately invoked function expression, while the inner parentheses `({ name, age })` are the parentheses-wrapped form of the object literal.

## Syntax Explanation

```javascript
const person = (
  // This is an Immediately Invoked Function Expression (IIFE)
  ({ name, age }) => ({ name, age })
)(
  // This is the parameter object passed to the IIFE
  { name: 'John', age: 30 }
);
```

1. `(({ name, age }) => ({ name, age }))` is an IIFE. It defines an arrow function that takes an object as a parameter and uses object destructuring to extract the `name` and `age` properties. The function then returns a new object containing these properties.

2. `({ name: 'John', age: 30 })` is an object literal passed as an argument to the IIFE.

3. The IIFE is executed immediately with the provided object literal as its argument. It extracts the `name` and `age` properties and returns a new object with these properties.

4. The result (a new object with `name` and `age` properties) is assigned to the constant `person`.

Simplified versions:

```javascript
const countFunc = (a, b) => a + b; // countFunc is a function
const count = ((a, b) => a + b)(1, 2); // count is 3

// With objects
const personFunc = ({name, age}) => ({name, age}); // Defines a function that takes an object, destructures name and age, and returns a new object with these properties
const person = (({name, age}) => ({name, age}))({name: 'John', age: 18});
```

