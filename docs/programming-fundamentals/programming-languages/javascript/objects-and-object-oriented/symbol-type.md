---
sidebar_position: 2
---

# Symbol Type: `Symbol()`

Symbol is a **primitive type** for unique identifiers.

`ES6` introduced a new primitive data type called **Symbol**, which represents a unique value. It is one of JavaScript's native data types, along with undefined, null, Boolean, String, Number, BigInt, and Object.


## Symbols Basic Syntax

```javascript
let s = Symbol();

typeof s // "symbol"
```

In the code above, variable s is a unique value. The result of the typeof operator indicates that variable s is of Symbol data type, not a string or any other type.

The Symbol() function can accept a string as a parameter, which describes the Symbol instance. This is mainly for easier identification when displayed in the console or converted to a string.

```javascript
let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```

In the code above, s1 and s2 are two Symbol values. Without parameters, they would both output as Symbol() in the console, making it difficult to distinguish them. With parameters, it's like adding a description to them, making it easier to identify which value is which when output.

If the parameter of Symbol is an object, it will call the toString() method of that object to convert it to a string before generating a Symbol value.

```javascript
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
sym // Symbol(abc)
```

Note that the parameter of the Symbol() function only describes the current Symbol value. Therefore, Symbol functions with the same parameter will return unequal values.

```javascript
// Without parameters
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// With parameters
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```

In the code above, s1 and s2 are both return values of the Symbol() function, and they have the same parameter, but they are not equal. In fact, if you call Symbol() 100 times, you will get 100 unequal values.

Symbol values cannot be used in operations with other types of values, or it will throw an error.

```javascript
let sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
`your symbol is ${sym}`
// TypeError: can't convert symbol to string
```

However, Symbol values can be explicitly converted to strings.

```javascript
let sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```

## Symbol.prototype.description

As mentioned earlier, when creating a Symbol value with the Symbol() function, you can add a description using a parameter.

```javascript
const sym = Symbol('foo');
```

In the code above, the description of the sym value is the string 'foo'.

However, reading this description previously required explicitly converting the Symbol to a string, like this:

```javascript
const sym = Symbol('foo');

String(sym) // "Symbol(foo)"
sym.toString() // "Symbol(foo)"
```

This method isn't very convenient. ES2019 provided an instance property called description for Symbol values, which directly returns the description of the Symbol value.

```javascript
const sym = Symbol('foo');

sym.description // "foo"
```

## Symbol as Property Names

Since each Symbol value is not equal to any other value, this means that as long as Symbol values are used as identifiers for object property names, it can be guaranteed that there won't be properties with the same name. This is very useful when an object is composed of multiple modules, as it can prevent a key from being accidentally rewritten or overwritten.

```javascript
let mySymbol = Symbol();

// First way
let a = {};
a[mySymbol] = 'Hello!';

// Second way
let a = {
  [mySymbol]: 'Hello!'
};

// Third way
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// All of the above methods yield the same result
a[mySymbol] // "Hello!"
```

The code above uses bracket notation and the Object.defineProperty() method to specify an object's property name as a Symbol value.

Note that when a Symbol value is used as an object's property name, the dot operator cannot be used.

```javascript
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
```

In the code above, because the dot operator is always followed by a string, it won't read mySymbol as the identifier name that the Symbol value represents. This leads to the property name of a actually being a string, not a Symbol value.

Similarly, when defining properties using Symbol values inside an object, the Symbol value must be placed inside square brackets.

```javascript
let s = Symbol();

let obj = {
  [s]: function (arg) { ... }
};

obj[s](123);
```

In the code above, if s is not placed in square brackets, the property's key name would be the string 's', not the Symbol value that s represents.

Using the enhanced object literal syntax, the obj object in the code above can be written more concisely:

```javascript
let obj = {
  [s](arg) { ... }
};
```

Symbol types can also be used to define a set of constants, ensuring that the values of these constants are all unequal.

```javascript
const log = {};

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');
```

Here's another example:

```javascript
const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
    }
}
```

The biggest advantage of using Symbol values for constants is that no other value can possibly have the same value, so it can be guaranteed that the switch statement above will work as designed.

One more point to note is that when Symbol values are used as property names, these properties are still public properties, not private properties.

## Example: Eliminating Magic Strings

Magic strings refer to specific strings or values that appear multiple times in the code and form strong coupling with the code. Well-styled code should try to eliminate magic strings and replace them with clear, meaningful variables.

```javascript
function getArea(shape, options) {
  let area = 0;

  switch (shape) {
    case 'Triangle': // magic string
      area = .5 * options.width * options.height;
      break;
    /* ... more code ... */
  }

  return area;
}

getArea('Triangle', { width: 100, height: 100 }); // magic string
```

In the code above, the string 'Triangle' is a magic string. It appears multiple times and forms "strong coupling" with the code, which is not conducive to future modifications and maintenance.

A common method to eliminate magic strings is to write them as variables.

```javascript
const shapeType = {
  triangle: 'Triangle'
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```

In the code above, we write 'Triangle' as the triangle property of the shapeType object, which eliminates the strong coupling.

Upon careful analysis, we can find that it doesn't matter what value shapeType.triangle equals, as long as it's ensured not to conflict with the values of other shapeType properties. Therefore, this is very suitable for using Symbol values.

```javascript
const shapeType = {
  triangle: Symbol()
};
```

In the code above, apart from setting the value of shapeType.triangle to a Symbol, no other places need to be modified.

## Property Name Enumeration

When Symbol values are used as property names, these properties will not appear in for...in, for...of loops, nor will they be returned by Object.keys(), Object.getOwnPropertyNames(), JSON.stringify().

However, they are not private properties. There's a method called Object.getOwnPropertySymbols() that can retrieve all Symbol property names of a specified object. This method returns an array, whose members are all Symbol values used as property names in the current object.

```javascript
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols
// [Symbol(a), Symbol(b)]
```

The code above is an example of the Object.getOwnPropertySymbols() method, which can retrieve all Symbol property names.

Here's another example comparing Object.getOwnPropertySymbols() method with for...in loop and Object.getOwnPropertyNames method:

```javascript
const obj = {};
const foo = Symbol('foo');

obj[foo] = 'bar';

for (let i in obj) {
  console.log(i); // No output
}

Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [Symbol(foo)]
```

In the code above, both for...in loop and Object.getOwnPropertyNames() method cannot get Symbol key names. You need to use the Object.getOwnPropertySymbols() method.

Another new API, the Reflect.ownKeys() method, can return all types of key names, including regular key names and Symbol key names.

```javascript
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]
```

Since properties with Symbol values as key names won't be enumerated by conventional methods, we can use this feature to define some non-private methods for objects that are intended for internal use only.

```javascript
let size = Symbol('size');

class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
    return instance[size];
  }
}

let x = new Collection();
Collection.sizeOf(x) // 0

x.add('foo');
Collection.sizeOf(x) // 1

Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']
Object.getOwnPropertySymbols(x) // [Symbol(size)]
```

In the code above, the size property of object x is a Symbol value, so Object.keys(x) and Object.getOwnPropertyNames(x) cannot retrieve it. This creates an effect of a non-private internal method.

## Symbol.for(), Symbol.keyFor()

Sometimes, we want to reuse the same Symbol value. The Symbol.for() method can achieve this. It accepts a string as a parameter, then searches for a Symbol value with that string as its name. If found, it returns that Symbol value; otherwise, it creates a new Symbol value with that string as its name and registers it globally.

```javascript
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
```

In the code above, s1 and s2 are both Symbol values, but they are generated by the Symbol.for method with the same parameter, so they are actually the same value.

`Symbol.for()` and `Symbol()` both generate new Symbol values. Their difference is that the former is registered in the global environment for searching, while the latter is not. Symbol.for() doesn't return a new Symbol value each time it's called, but first checks if the given key already exists. If it doesn't exist, it creates a new value. For example, if you call Symbol.for("cat") 30 times, it will return the same Symbol value each time, but calling Symbol("cat") 30 times will return 30 different Symbol values.

```javascript
Symbol.for("bar") === Symbol.for("bar")
// true

Symbol("bar") === Symbol("bar")
// false
```

In the code above, because the Symbol() syntax doesn't have a registration mechanism, it returns a different value each time it's called.

The Symbol.keyFor() method returns the key of a registered Symbol type value.

```javascript
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

In the code above, variable s2 belongs to an unregistered Symbol value, so it returns undefined.

Note that the name registered by Symbol.for() for a Symbol value is in the global environment, regardless of whether it's run in the global environment.

```javascript
function foo() {
  return Symbol.for('bar');
}

const x = foo();
const y = Symbol.for('bar');
console.log(x === y); // true
```

In the code above, Symbol.for('bar') is run inside a function, but the generated Symbol value is registered in the global environment. So, the second run of Symbol.for('bar') can retrieve this Symbol value.

This global registration feature of Symbol.for() can be used to get the same value in different iframes or service workers.

```javascript
iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);

iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
// true
```

In the code above, the Symbol value generated by the iframe window can be obtained on the main page.

## Example: Singleton Pattern for Modules

The Singleton pattern refers to calling a class and always returning the same instance.

For Node, module files can be seen as a class. How to ensure that every time this module file is executed, the same instance is returned?

It's easy to think of putting the instance in the top-level object global.

```javascript
// mod.js
function A() {
  this.foo = 'hello';
}

if (!global._foo) {
  global._foo = new A();
}

module.exports = global._foo;
```

Then, load the mod.js above.

```javascript
const a = require('./mod.js');
console.log(a.foo);
```

In the code above, variable a loads the same instance of A at any time.

However, there's a problem here: the global variable global._foo is writable, and any file can modify it.

```javascript
global._foo = { foo: 'world' };

const a = require('./mod.js');
console.log(a.foo);
```

The code above will cause all scripts that load mod.js to be inaccurate.

To prevent this situation, we can use Symbol.

```javascript
// mod.js
const FOO_KEY = Symbol.for('foo');

function A() {
  this.foo = 'hello';
}

if (!global[FOO_KEY]) {
  global[FOO_KEY] = new A();
}

module.exports = global[FOO_KEY];
```

In the code above, we can ensure that global[FOO_KEY] won't be accidentally overwritten, but it can still be rewritten.

```javascript
global[Symbol.for('foo')] = { foo: 'world' };

const a = require('./mod.js');
```

If the key name is generated using the Symbol method, then the external will not be able to reference this value, and of course, it cannot be rewritten.

```javascript
// mod.js
const FOO_KEY = Symbol('foo');

// The rest of the code is the same ......
```

The code above will cause other scripts to be unable to reference FOO_KEY. But this also has a problem: if this script is executed multiple times, each time FOO_KEY will be different. Although Node will cache the execution result of the script and generally won't execute the same script multiple times, users can manually clear the cache, so it's not absolutely reliable.

## Built-in Symbol Values

In addition to defining Symbol values for your own use, ES6 also provides 11 built-in Symbol values, which point to internal methods of the language.

### Symbol.hasInstance

The Symbol.hasInstance property of an object points to an internal method. When other objects use the instanceof operator to determine if they are instances of this object, this method will be called. For example, foo instanceof Foo internally actually calls `Foo[Symbol.hasInstance](foo)`.

```javascript
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof new MyClass() // true
```

In the code above, MyClass is a class, and new MyClass() will return an instance. The Symbol.hasInstance method of this instance will be automatically called when performing the instanceof operation, judging whether the left operand is an instance of Array.

Here's another example:

```javascript
class Even {
  static [Symbol.hasInstance](obj) {
    return Number(obj) % 2 === 0;
  }
}

// Equivalent to
const Even = {
  [Symbol.hasInstance](obj) {
    return Number(obj) % 2 === 0;
  }
};

1 instanceof Even // false
2 instanceof Even // true
12345 instanceof Even // false
```

### Symbol.isConcatSpreadable

The Symbol.isConcatSpreadable property of an object is equal to a boolean value, indicating whether the object can be spread when used with Array.prototype.concat().

```javascript
let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
arr1[Symbol.isConcatSpreadable] // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']
```

The code above shows that the default behavior of arrays is to spread, and Symbol.isConcatSpreadable defaults to undefined. When this property is equal to true, it also has the effect of spreading.

Array-like objects are the opposite; by default, they don't spread. Their Symbol.isConcatSpreadable property needs to be set to true for them to spread.

```javascript
let obj = {length: 2, 0: 'c', 1: 'd'};
['a', 'b'].concat(obj, 'e') // ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true;
['a', 'b'].concat(obj, 'e') // ['a', 'b', 'c', 'd', 'e']
```

The Symbol.isConcatSpreadable property can also be defined in classes:

```javascript
class A1 extends Array {
  constructor(args) {
    super(args);
    this[Symbol.isConcatSpreadable] = true;
  }
}
class A2 extends Array {
  constructor(args) {
    super(args);
  }
  get [Symbol.isConcatSpreadable] () {
    return false;
  }
}
let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
[1, 2].concat(a1).concat(a2)
// [1, 2, 3, 4, [5, 6]]
```

In the code above, class A1 is spreadable, while class A2 is not, so using concat gives different results.

Note the difference in the position of Symbol.isConcatSpreadable: A1 is defined on the instance, while A2 is defined on the class itself, but the effect is the same.

### Symbol.species

The Symbol.species property of an object points to a constructor function. When creating derived objects, this property will be used.

```javascript
class MyArray extends Array {
}

const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);

b instanceof MyArray // true
c instanceof MyArray // true
```

In the code above, the subclass MyArray inherits from the parent class Array. a is an instance of MyArray, and b and c are derived objects of a. You might think that b and c are generated by calling array methods, so they should be arrays (instances of Array), but in fact, they are also instances of MyArray.

The Symbol.species property is provided to solve this problem. Now, we can set the Symbol.species property for MyArray.

```javascript
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
```

In the code above, because the Symbol.species property is defined, the function returned by this property will be used as the constructor when creating derived objects. This example also shows that defining the Symbol.species property should use a getter. The default Symbol.species property is equivalent to the following writing:

```javascript
static get [Symbol.species]() {
  return this;
}
```

Now, let's look at the previous example again:

```javascript
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}

const a = new MyArray();
const b = a.map(x => x);

b instanceof MyArray // false
b instanceof Array // true
```

In the code above, the derived object generated by a.map(x => x) is no longer an instance of MyArray, but directly an instance of Array.

Here's another example:

```javascript
class T1 extends Promise {
}

class T2 extends Promise {
  static get [Symbol.species]() {
    return Promise;
  }
}

new T1(r => r()).then(v => v) instanceof T1 // true
new T2(r => r()).then(v => v) instanceof T2 // false
```

In the code above, T2 defined the Symbol.species property, while T1 didn't. This resulted in T1 calling its own constructor method when creating derived objects (then method), while T2 calls Promise's constructor method.

In summary, the role of Symbol.species is that when an instance object needs to call its own constructor again during runtime, it will call the constructor specified by this property. Its main use is that some libraries are modified based on the base class, so when subclasses use inherited methods, the author may hope to return instances of the base class, not instances of the subclass.

### Symbol.match

The Symbol.match property of an object points to a function. When str.match(myObject) is executed, if this property exists, it will be called and its return value will be returned.

```javascript
String.prototype.match(regexp)
// equivalent to
regexp[Symbol.match](this)

class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}

'e'.match(new MyMatcher()) // 1
```

### Symbol.replace

The Symbol.replace property of an object points to a method. When this object is called by the String.prototype.replace method, it will return the return value of this method.

```javascript
String.prototype.replace(searchValue, replaceValue)
// equivalent to
searchValue[Symbol.replace](this, replaceValue)
```

Here's an example:

```javascript
const x = {};
x[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(x, 'World') // ["Hello", "World"]
```

The Symbol.replace method will receive two parameters. The first parameter is the object that the replace method is acting on (in the above example, it's "Hello"), and the second parameter is the replacement value (in the above example, it's "World").

### Symbol.search

The Symbol.search property of an object points to a method. When this object is called by the String.prototype.search method, it will return the return value of this method.

```javascript
String.prototype.search(regexp)
// equivalent to
regexp[Symbol.search](this)

class MySearch {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}
'foobar'.search(new MySearch('foo')) // 0
```

### Symbol.split

The Symbol.split property of an object points to a method. When this object is called by the String.prototype.split method, it will return the return value of this method.

```javascript
String.prototype.split(separator, limit)
// equivalent to
separator[Symbol.split](this, limit)
```

Here's an example:

```javascript
class MySplitter {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    let index = string.indexOf(this.value);
    if (index === -1) {
      return string;
    }
    return [
      string.substr(0, index),
      string.substr(index + this.value.length)
    ];
  }
}

'foobar'.split(new MySplitter('foo'))
// ['', 'bar']

'foobar'.split(new MySplitter('bar'))
// ['foo', '']

'foobar'.split(new MySplitter('baz'))
// 'foobar'
```

The above method uses the Symbol.split method to redefine the behavior of the split method of string objects.

### Symbol.iterator

The Symbol.iterator property of an object points to its default iterator method.

```javascript
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
```

When an object undergoes a for...of loop, the Symbol.iterator method will be called, returning the default iterator of the object. For detailed introduction, see the chapter "Iterator and for...of loop".

```javascript
class Collection {
  *[Symbol.iterator]() {
    let i = 0;
    while(this[i] !== undefined) {
      yield this[i];
      ++i;
    }
  }
}

let myCollection = new Collection();
myCollection[0] = 1;
myCollection[1] = 2;

for(let value of myCollection) {
  console.log(value);
}
// 1
// 2
```

### Symbol.toPrimitive

The Symbol.toPrimitive property of an object points to a method. When this object is converted to a primitive type value, this method will be called, returning the corresponding primitive type value of the object.

Symbol.toPrimitive is called with a string parameter indicating the current operation mode. There are three modes in total:

- Number: The scenario needs to be converted to a number
- String: The scenario needs to be converted to a string
- Default: The scenario can be converted to a number or a string

```javascript
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};

2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'
```

### Symbol.toStringTag

The Symbol.toStringTag property of an object is used to set a string (setting it to other types of values is invalid but doesn't throw an error). When calling the Object.prototype.toString() method on the target object, if the Symbol.toStringTag property exists, the string set by this property will appear in the string returned by the toString() method, indicating the type of the object. In other words, this property can be used to customize the uppercase string after "object" in [object Object] or [object Array].

```javascript
// Example 1
({[Symbol.toStringTag]: 'Foo'}.toString())
// "[object Foo]"

// Example 2
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
let x = new Collection();
Object.prototype.toString.call(x) // "[object xxx]"
```

ES6 added Symbol.toStringTag property values for new built-in objects as follows:

- JSON[Symbol.toStringTag]：'JSON'
- Math[Symbol.toStringTag]：'Math'
- Module object M[Symbol.toStringTag]：'Module'
- ArrayBuffer.prototype[Symbol.toStringTag]：'ArrayBuffer'
- DataView.prototype[Symbol.toStringTag]：'DataView'
- Map.prototype[Symbol.toStringTag]：'Map'
- Promise.prototype[Symbol.toStringTag]：'Promise'
- Set.prototype[Symbol.toStringTag]：'Set'
- %TypedArray%.prototype[Symbol.toStringTag]：'Uint8Array' etc.
- WeakMap.prototype[Symbol.toStringTag]：'WeakMap'
- WeakSet.prototype[Symbol.toStringTag]：'WeakSet'
- %MapIteratorPrototype%[Symbol.toStringTag]：'Map Iterator'
- %SetIteratorPrototype%[Symbol.toStringTag]：'Set Iterator'
- %StringIteratorPrototype%[Symbol.toStringTag]：'String Iterator'
- Symbol.prototype[Symbol.toStringTag]：'Symbol'
- Generator.prototype[Symbol.toStringTag]：'Generator'
- GeneratorFunction.prototype[Symbol.toStringTag]：'GeneratorFunction'

### Symbol.unscopables

The Symbol.unscopables property of an object points to an object. This object specifies which properties will be excluded from the with environment when using the with keyword.

```javascript
Array.prototype[Symbol.unscopables]
// {
//   copyWithin: true,
//   entries: true,
//   fill: true,
//   find: true,
//   findIndex: true,
//   includes: true,
//   keys: true
// }

Object.keys(Array.prototype[Symbol.unscopables])
// ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'includes', 'keys']
```

The above code shows that arrays have 7 properties that will be excluded by the with command.

```javascript
// Without unscopables
class MyClass {
  foo() { return 1; }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
  foo(); // 1
}

// With unscopables
class MyClass {
  foo() { return 1; }
  get [Symbol.unscopables]() {
    return { foo: true };
  }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
  foo(); // 2
}
```

The above code specifies the Symbol.unscopables property to make the with syntax block not look for the foo property in the current scope, i.e., foo will point to the variable in the outer scope.

This concludes the comprehensive tutorial on Symbol in JavaScript. Symbol is a powerful feature introduced in ES6 that provides a way to create unique identifiers and can be particularly useful in certain scenarios such as creating non-string property keys, defining well-known symbols for customizing object behavior, and more.
