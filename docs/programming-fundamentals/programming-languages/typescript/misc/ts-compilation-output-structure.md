---
sidebar_position: 1
---

# TypeScript Compilation Output Structure with Relative Path in `baseUrl` and `rootDir`

## Problem Description

In a TypeScript project, importing a JSON file directly from the project's root (or outside the `src` directory) alongside the usage of path aliases defined in `tsconfig.json` leads to an unexpected change in the compilation output directory structure. Specifically, when a JSON file (e.g., `tsconfig.json`) is imported into a TypeScript file, the compiled JavaScript output and associated directories are nested within an additional `src` directory inside the `dist` output directory, deviating from the intended output structure.

### Project Structure

Before the issue arises, the project directory is structured as follows:

```
project-root/
├── src/
│   ├── utils/
│   │   └── math.ts
│   └── index.ts
├── tsconfig.json
```

### Initial Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@utils/*": ["src/utils/*"]
    },
    "outDir": "./dist"
  }
}
```

### Import Statements

```typescript
// Within src/index.ts
import { add1, add2 } from '@utils/math';
```

With the above setup, the output files are correctly placed in `dist/index.js` and `dist/utils/math.js`. However, upon importing a JSON file from the project root:

```typescript
// Modified src/index.ts
import { add1, add2 } from '@utils/math';
import ts from 'tsconfig.json';
```

The output structure unexpectedly changes, resulting in `dist/src/index.js`, `dist/src/utils/math.js`, and `dist/tsconfig.json`.

## Cause of the Issue

The issue stems from TypeScript's handling of non-code assets (like JSON files) and the relative paths based on the `baseUrl` and `outDir` settings in `tsconfig.json`. When importing files from outside the `src` directory, TypeScript attempts to preserve the original directory structure relative to the `baseUrl`, leading to the creation of an additional `src` directory in the output.

## Solution

To resolve the issue, adjust the `tsconfig.json` by specifying the `rootDir` option and refining the `paths` configuration:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist",
    "rootDir": "./src",
    "paths": {
      "@utils/*": ["utils/*"]
    },
    "resolveJsonModule": true,
    "esModuleInterop": true
  },
  "include": [
    "src/**/*"
  ]
}
```

### Key Adjustments

- **`rootDir`**: Specifies the root directory of source files, helping TypeScript to maintain the intended output structure without adding unnecessary directories.
- **`include`**: Ensures only files within the `src` directory are included for compilation, preventing the compiler from processing files outside `src` and affecting the output structure.
- **Path Adjustments**: Refining path aliases to align with the `rootDir` setting ensures that imports resolve correctly without altering the output structure.
