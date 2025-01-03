---
sidebar_position: 5
---

# Monorepo Support in npm Projects

Monorepos, or monolithic repositories, are a development approach where multiple projects are stored in a single repository. npm has evolved to support monorepo structures, primarily through features configured in `package.json`. This article explores how to set up and manage a monorepo using npm and `package.json` configurations.

## Workspaces

Workspaces are the primary feature in npm for managing monorepos. They allow you to set up multiple packages in a single repository.

### Enabling Workspaces

In your root `package.json`:

```json
{
  "name": "my-monorepo",
  "workspaces": [
    "packages/*"
  ]
}
```

This configuration tells npm that all directories under the `packages/` folder are separate packages within the monorepo.

### Workspace Structure

A typical monorepo structure might look like:

```
my-monorepo/
├── package.json
├── packages/
│   ├── package-a/
│   │   └── package.json
│   └── package-b/
│       └── package.json
```

### Installing Dependencies

With workspaces enabled, `npm install` at the root will install dependencies for all packages, optimizing by hoisting shared dependencies to the root `node_modules`.

## Package References

Workspaces allow packages within the monorepo to reference each other easily.

In `packages/package-b/package.json`:

```json
{
  "name": "package-b",
  "dependencies": {
    "package-a": "^1.0.0"
  }
}
```

npm will symlink `package-a` into `package-b`'s `node_modules`, using the local version instead of downloading from the registry.

## Scripts

### Running Scripts Across Workspaces

npm allows running scripts across all workspaces:

```bash
npm run test --workspaces
```

Or for a specific workspace:

```bash
npm run test --workspace=package-a
```

### Defining Workspace-Specific Scripts

In the root `package.json`:

```json
{
  "scripts": {
    "test": "npm run test --workspaces"
  }
}
```

This runs the `test` script in all workspaces.

## Private Packages

For packages not intended to be published:

In `packages/internal-tool/package.json`:

```json
{
  "name": "internal-tool",
  "private": true
}
```

## Versioning

### Independent Versioning

Each package can have its own version in its respective `package.json`.

### Synchronized Versioning

For synchronized versioning, use a tool like `lerna` or maintain versions manually.

## Shared Configurations

### Sharing Babel Config

In root `package.json`:

```json
{
  "babel": {
    "presets": ["@babel/preset-env"]
  }
}
```

Packages can extend this in their own `package.json` or `.babelrc` files.

### Sharing ESLint Config

In root `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["eslint:recommended"]
  }
}
```

## Dependencies Management

### Specifying Workspace Protocol

In a package's `package.json`, use the `workspace:` protocol to reference another workspace package:

```json
{
  "dependencies": {
    "package-a": "workspace:^"
  }
}
```

This ensures you're always using the local version during development.

## Publishing

### Configuring Publishing

In each package's `package.json`:

```json
{
  "publishConfig": {
    "access": "public"
  }
}
```

This is useful for scoped packages that should be public.

## Workspace-Aware Commands

npm v7+ introduced workspace-aware versions of common commands:

- `npm install -w package-a`: Install dependencies for a specific workspace
- `npm update -w package-a`: Update dependencies for a specific workspace
- `npm run build --workspace=package-a`: Run a script in a specific workspace

## Best Practices

1. **Consistent Naming**: Use consistent naming conventions across packages.
2. **Shared Configurations**: Utilize shared configurations for linting, testing, and building.
3. **Clear Documentation**: Maintain clear documentation on how to work with the monorepo.
4. **Dependency Management**: Regularly audit and update shared dependencies.
5. **CI/CD Integration**: Set up CI/CD pipelines that understand the monorepo structure.

## Conclusion

Monorepo support in npm, primarily through `package.json` configurations and workspaces, offers a powerful way to manage complex projects with multiple interconnected packages. By leveraging these features, developers can create more maintainable, efficient, and consistent codebases. While there are challenges in managing monorepos, the benefits of code sharing, easier dependency management, and coordinated releases often outweigh the complexities.