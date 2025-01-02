---
sidebar_position: 1
---

# TypeScript in Node.Js QuickStart

TypeScript has had *first-class* support for Node.js since its inception. This guide will walk you through setting up a Node.js project with TypeScript, explaining each step along the way.

> Note: Many of these steps are actually just common practice Node.js setup steps, but we'll add TypeScript-specific configurations as well.

## Setting Up Your Project

1. **Initialize a Node.js project**
   Run `npm init -y` to create a `package.json` file. This file will contain metadata about your project and its dependencies.

2. **Add TypeScript**
   Install TypeScript as a dev dependency: `npm install typescript --save-dev`
   This allows you to use TypeScript in your project and compile it to JavaScript.

3. **Add Node.js type definitions**
   Install type definitions for Node.js: `npm install @types/node --save-dev`
   These provide TypeScript with type information for built-in Node.js modules.

4. **Initialize TypeScript configuration**
   Create a `tsconfig.json` file with some key options:
   ```
   npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
   ```
   This command creates a TypeScript configuration file with the following settings:
   - `rootDir`: Specifies the root directory of input files (usually your source code).
   - `outDir`: Specifies the output directory for compiled JavaScript files.
   - `esModuleInterop`: Enables interoperability between CommonJS and ES Modules.
   - `resolveJsonModule`: Allows importing JSON files as modules.
   - `lib`: Specifies which library files to include in the compilation.
   - `module`: Sets the module system for the output JavaScript.

That's it for the basic setup! You can now start your IDE (e.g., `code .` for Visual Studio Code) and begin coding. With this setup, you can use all the built-in Node.js modules (e.g., `import * as fs from 'fs';`) with the safety and developer ergonomics of TypeScript.

All your TypeScript code should go in the `src` directory, and the generated JavaScript will be output to the `lib` directory.

## Bonus: Live Compile + Run

To enhance your development experience, you can set up live compilation and execution of your TypeScript code:

1. **Add ts-node**
   Install `ts-node`: `npm install ts-node --save-dev`
   This package allows you to run TypeScript code directly without a separate compilation step.

2. **Add nodemon**
   Install `nodemon`: `npm install nodemon --save-dev`
   Nodemon will watch your files for changes and automatically restart your application.

3. **Configure package.json scripts**
   Add the following scripts to your `package.json`:

   ```json
   "scripts": {
     "start": "npm run build:live",
     "build": "tsc -p .",
     "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
   }
   ```

   These scripts do the following:
   - `start`: Runs the live build process.
   - `build`: Compiles your TypeScript code to JavaScript.
   - `build:live`: Uses nodemon to watch for changes and re-runs your application using ts-node.

Now you can run `npm start`, and as you edit `index.ts`:
- nodemon will detect the changes and rerun ts-node
- ts-node will transpile your TypeScript code on-the-fly, using your `tsconfig.json` settings
- The transpiled JavaScript will be executed by Node.js

When you're ready to deploy your application, run `npm run build` to compile your TypeScript code to JavaScript.

## Compatibility with Build Tools

This setup is compatible with popular build tools:

- **Browserify**: Use the `tsify` plugin to bundle your TypeScript code for the browser.
- **Webpack**: Use `ts-loader` to include TypeScript files in your Webpack bundle.

## Additional Tips

- Consider adding a linter like ESLint with the TypeScript plugin for code quality checks.
- Use Jest or Mocha with ts-jest for unit testing your TypeScript code.
- Explore TypeScript-specific features like interfaces, enums, and generics to make your code more robust.
