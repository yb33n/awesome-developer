---
sidebar_position: 1
---

# Comparisons and Strict Equality `===` in JavaScript

In JavaScript, comparing values is a fundamental operation. Understanding how different comparison operators work, especially the strict equality operator `===`, is crucial for writing reliable and predictable code.

## Basic Comparison Operators

JavaScript provides several comparison operators:

- Less than (`<`)
- Greater than (`>`)
- Less than or equal to (`<=`)
- Greater than or equal to (`>=`)
- Equality (`==`)
- Strict equality (`===`)
- Inequality (`!=`)
- Strict inequality (`!==`)

## Comparing Different Data Types

### Number Comparisons

Comparing numbers is straightforward:

```javascript
console.log(5 > 3);  // true
console.log(5 < 3);  // false
console.log(5 >= 5);  // true
```

### String Comparisons

JavaScript compares strings lexicographically (dictionary-like order) based on their Unicode values:

```javascript
console.log('Z' > 'A');  // true
console.log('Glow' > 'Glee');  // true, o is greater than e. Stop here. 
console.log('Bee' > 'Be');  // true, longer string is considered greater.
console.log('a' > 'Z');  // true (lowercase is greater than uppercase)
console.log('2' < 'A');  // true (digits are less than letters)
```

The comparison is done character by character. If all characters are the same up to the end of the shorter string, the longer string is considered greater.

### Boolean Comparisons

Booleans can be compared, with `true` considered greater than `false`:

```javascript
console.log(true > false);  // true
console.log(false < true);  // true
```

### Comparing Different Types

When comparing different types, JavaScript performs type coercion:

```javascript
console.log("2" > 1);  // true (string "2" is converted to number 2)
console.log("01" == 1);  // true (string "01" is converted to number 1)
```

### Special Cases: null and undefined

Comparisons with `null` and `undefined` can be tricky:

```javascript
console.log(null == undefined);  // true
console.log(null === undefined);  // false
console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true
```

### NaN Comparisons

`NaN` (Not-a-Number) is not equal to anything, including itself:

```javascript
console.log(NaN == NaN);  // false
console.log(NaN === NaN);  // false
```

## 0 and 1 in Boolean Context

In boolean contexts, 0 is treated as `false`, and any non-zero number (including 1) is treated as `true`:

```javascript
console.log(Boolean(0));  // false
console.log(Boolean(1));  // true
console.log(Boolean(-1)); // true

if (0) {
    console.log("This won't run");
}

if (1) {
    console.log("This will run");
}
```

```javascript
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```

From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.

## Equality vs. Strict Equality

Now let's focus on the difference between equality (`==`) and strict equality (`===`).

### Equality (`==`)

The equality operator performs type coercion before comparison:

```javascript
console.log(5 == "5");  // true
console.log(1 == true);  // true
console.log(null == undefined);  // true
```

### Strict Equality (`===`)

The strict equality operator compares both value and type without coercion:

```javascript
console.log(5 === "5");  // false
console.log(1 === true);  // false
console.log(null === undefined);  // false
```

## Why Use Strict Equality?

Using `===` is generally recommended because:

1. It's more predictable and less prone to bugs.
2. It makes your intentions clearer in the code.
3. It avoids unexpected type coercion.

## Examples of Strict Equality

```javascript
// Null and Undefined
console.log(null === null);  // true
console.log(undefined === undefined);  // true
console.log(null === undefined);  // false

// Objects and Arrays
console.log({} === {});  // false (different objects)
console.log([] === []);  // false (different arrays)

let obj = {};
console.log(obj === obj);  // true (same object reference)
```

## Conclusion

Understanding how JavaScript handles comparisons between different data types is essential for writing robust code. While the equality operator (`==`) can be useful in certain situations, using the strict equality operator (`===`) is generally a safer choice. It helps prevent unexpected behavior due to type coercion and makes your code more robust and easier to understand.

Remember, when in doubt, use strict equality (`===`) for comparisons in JavaScript to ensure both value and type are considered in the comparison.