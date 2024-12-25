---
sidebar_position: 2
---

# TypeScript File Types and Library Declarations

TypeScript uses different file extensions for various purposes. Two important file types are `.ts` (or `.tsx`) and `.d.ts`. 

## .ts and .tsx Files

### TypeScript (.ts) Files

`.ts` files are the primary TypeScript source files. They contain TypeScript code that will be compiled into JavaScript.

```typescript
// example.ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}

let user = "Alice";
console.log(greet(user));
```

### TypeScript React (.tsx) Files

`.tsx` files are used specifically for TypeScript files that include JSX, typically in React applications.

```typescript
// component.tsx
import React from 'react';

interface Props {
    name: string;
}

const Greeting: React.FC<Props> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```

## .d.ts Files (Declaration Files)

`.d.ts` files are TypeScript declaration files. They contain type information but no implementation. These files are crucial for describing the shape of JavaScript code to TypeScript.

### Purpose of Declaration Files

1. **Defining Types for JavaScript Libraries**: They allow TypeScript to understand the types of JavaScript libraries.
2. **Sharing Type Definitions**: They can be shared separately from the implementation.
3. **Improving IDE Support**: They enable better autocomplete and type checking in IDEs.

Example of a declaration file:

```typescript
// greeter.d.ts
declare function greet(name: string): string;
declare class Greeter {
    constructor(greeting: string);
    greet(name: string): string;
}
```

## Libraries and TypeScript

When working with libraries in TypeScript, understanding these file types becomes even more important.

### Using Libraries with TypeScript

1. **Typed Libraries**: Many libraries come with built-in TypeScript support, providing their own `.d.ts` files.

2. **DefinitelyTyped**: For libraries without built-in types, the DefinitelyTyped repository provides community-maintained type definitions.

   Installation example:
   ```bash
   npm install --save-dev @types/lodash
   ```

3. **Creating Custom Type Definitions**: For libraries without available types, you can create your own `.d.ts` files.

### Developing Libraries with TypeScript

When developing a library using TypeScript:

1. Use `.ts` files for your source code.
2. Configure your `tsconfig.json` to generate declaration files:

   ```json
   {
     "compilerOptions": {
       "declaration": true,
       "outDir": "./dist"
     }
   }
   ```

3. This will produce `.js` files for the implementation and `.d.ts` files for type declarations.

4. Include both in your package.json:

   ```json
   {
     "main": "dist/index.js",
     "types": "dist/index.d.ts"
   }
   ```
