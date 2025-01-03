---
sidebar_position: 1
description: Various Ways to Define Functions in JavaScript
---

# Various Ways to Define Functions in JavaScript

## Different syntaxes for defining object methods

```javascript
const def1 = {
    height,
    age,

    say(name) {
        return name;
    },
    walk() {
        // do something
    },
    see() {
        // do something
    }
}

const def2 = {
    height: height,
    age: age,
    say: function say(name) {
        return name;
    },
    walk: function walk() {
        // do something
    },
    see: function see() {
        // do something
    }
}

class def3 {
    height;
    age;

    say(name) {
        return name;
    }
    
    walk() {
        // do something
    }

    see() {
        // do something
    }
}
```

1. `const def1` uses ES6's enhanced object literal syntax, including property shorthand (`height`, `age`) and method shorthand (`say()`, `walk()`, `see()`). This syntax is more concise.

2. `const def2` uses the traditional object literal syntax, with properties defined using `key: value` format and methods defined using `methodName: function() {...}`. This syntax is more verbose.

3. `class def3` uses the class syntax introduced in ES6, defining a class named `def3`. Within the class, properties (`height`, `age`) and methods (`say()`, `walk()`, `see()`) can be defined directly. This approach is more object-oriented and aligns with traditional object-oriented programming paradigms.

In summary:
- `const def1` and `const def2` are different syntaxes for defining object literals, with the former being more concise and the latter more traditional.
- `class def3` uses class syntax, which is more object-oriented and suitable for larger codebases and complex object structures.

## Defining Functions and Arrow Functions

1. **Function Expressions**

    - Using `function` keyword:

      ```js
      const myFunc = function() { /* ... */ };
      ```

    - Arrow function:

      ```js
      const myFunc = () => { /* ... */ };
      ```

2. **Methods in Object Literals**

    - Using `function` keyword:

      ```js
      const obj = {
        myMethod: function() { /* ... */ }
      };
      ```

    - Arrow function (not recommended for methods):

      Arrow functions can't be used here as they don't have their own `this` value.

3. **Prototype Methods (ES5 and earlier)**

    - Using `function` keyword:

      ```js
      function MyClass() { /* ... */ }
      MyClass.prototype.myMethod = function() { /* ... */ };
      ```

    - Arrow function:

      Arrow functions can't be used here as they can't be constructors.

4. **Callback Functions in Higher-Order Functions**

    - Using `function` keyword:

      ```js
      arr.forEach(function(item) { /* ... */ });
      ```

    - Arrow function:

      ```js
      arr.forEach(item => { /* ... */ });
      ```

5. **Immediately Invoked Function Expressions (IIFE)**

    - Using `function` keyword:

      ```js
      (function() { /* ... */ })();
      ```

    - Arrow function:

      ```js
      (() => { /* ... */ })();
      ```

6. **Functions as Parameters**

    - Using `function` keyword:

      ```js
      function myFunc(callback) {
        /* ... */
        callback();
      }
 
      myFunc(function() { /* ... */ });
      ```

    - Arrow function:

      ```js
      function myFunc(callback) {
        /* ... */
        callback();
      }
 
      myFunc(() => { /* ... */ });
      ```

7. **Creating Functions with the `Function` Constructor**

    - Using `function` keyword:

      ```js
      const myFunc = new Function('a', 'b', 'return a + b');
      ```

    - Arrow function:

      Arrow functions can't be used with the `Function` constructor.
