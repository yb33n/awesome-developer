---
sidebar_position: 3
---

# TypeScript Module Resolution

Module resolution is a crucial aspect of TypeScript that determines how the compiler locates and interprets imports in your code. Understanding this process is essential for managing dependencies and structuring your TypeScript projects effectively.

## What is Module Resolution?

Module resolution is the process by which the TypeScript compiler determines what file to import when it encounters an import statement or require call. This process is critical for:

- Correctly linking dependencies
- Ensuring type information is properly associated with imported modules
- Maintaining a clean and organized project structure

## Module Resolution Strategies

TypeScript supports two main module resolution strategies:

1. Classic
2. Node

### Classic Resolution

The Classic resolution strategy is simple but less commonly used in modern TypeScript projects. It's primarily used for backward compatibility.

How it works:
1. For relative imports, it looks for `.ts`, `.tsx`, and `.d.ts` files relative to the importing file.
2. For non-relative imports, it searches up the directory tree for matching files.

Example:
```typescript
import { foo } from "./foo";
// Looks for: ./foo.ts, ./foo.tsx, ./foo.d.ts
```

### Node Resolution

The Node resolution strategy mimics how Node.js resolves modules. It's the default and recommended strategy for most TypeScript projects.

How it works:
1. For relative imports, it behaves similarly to Classic resolution but also considers `package.json` and `index` files.
2. For non-relative imports, it looks in `node_modules` directories up the directory tree.

Example:
```typescript
import { bar } from "bar";
// Looks in node_modules/bar according to Node.js resolution rules
```

## Configuring Module Resolution

You can configure module resolution in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "baseUrl": "./src",
    "paths": {
      "@utils/*": ["utils/*"],
      "@models/*": ["models/*"]
    }
  }
}
```

- `moduleResolution`: Specifies the resolution strategy ("node" or "classic").
- `baseUrl`: Sets the base directory for resolving non-relative module names.
- `paths`: Allows you to define custom path mappings.

## Path Mapping

Path mapping is a powerful feature that allows you to define custom module resolution rules:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@app/*": ["*"],
      "@lib/*": ["lib/*"]
    }
  }
}
```

With this configuration:
```typescript
import { helper } from "@lib/helper";
// Resolves to: src/lib/helper.ts
```

## Resolution for Declaration Files (.d.ts)

TypeScript also resolves declaration files (.d.ts) for type information:

1. It looks for a `.d.ts` file alongside the JavaScript file.
2. It checks for declarations in `@types` packages in `node_modules/@types`.

## The `typeRoots` and `types` Options

You can further customize type resolution:

```json
{
  "compilerOptions": {
    "typeRoots": ["./typings", "./node_modules/@types"],
    "types": ["node", "jest"]
  }
}
```

- `typeRoots`: Specifies directories to include type definitions from.
- `types`: Lists specific type packages to include.

## Resolving Ambient Modules

Ambient modules are modules declared in `.d.ts` files without a corresponding implementation. They're often used for declaring types for JavaScript libraries:

```typescript
// global.d.ts
declare module "my-library" {
    export function doSomething(): void;
}
```

TypeScript will resolve these ambient declarations when you import from these modules.

## Troubleshooting Module Resolution

Common issues and solutions:

1. **Module not found**: Check file paths, `tsconfig.json` settings, and ensure the module is installed.
2. **Incorrect types**: Verify you have the correct `@types` package installed.
3. **Path mapping issues**: Double-check your `baseUrl` and `paths` configurations.

Use the `--traceResolution` flag with the TypeScript compiler to see detailed module resolution information:

```bash
tsc --traceResolution
```

## Best Practices

1. Use the Node resolution strategy for most projects.
2. Leverage path mapping for cleaner imports in large projects.
3. Be consistent with relative vs. non-relative imports.
4. Use ambient declarations judiciously for external JavaScript libraries.
5. Keep your `node_modules` and `@types` packages up to date.
