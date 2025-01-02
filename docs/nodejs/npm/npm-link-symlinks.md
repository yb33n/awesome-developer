---
sidebar_position: 3
---

# Command `npm link`: Create Symlinks Between Projects and Packages

`npm link` is a powerful command that allows developers to create symlinks between projects and packages. This feature is invaluable when you're developing multiple interconnected packages or when you want to test local changes to a package before publishing. In this article, we'll explore how to use `npm link`, its benefits, potential pitfalls, and best practices.

## What is npm link?

`npm link` is a two-step process that creates a symbolic link between a globally-installed package and your local project. It's particularly useful when you're developing a package and want to test it in another project without repeatedly publishing and updating.

## Basic Usage

### Step 1: Creating a global link

Navigate to the root directory of the package you're developing and run:

```bash
npm link
```

This creates a symbolic link in the global `node_modules` folder, pointing to your package.

### Step 2: Linking to your project

In the project where you want to use the linked package, run:

```bash
npm link [package-name]
```

Replace `[package-name]` with the name specified in the `package.json` of your linked package.

## Advanced Usage and Tips

### Working with scoped packages

For scoped packages, use the full name including the scope:

```bash
npm link @myorg/my-package
```

### Linking multiple packages

You can link multiple packages to a project:

```bash
npm link package1 package2 @myorg/package3
```

### Unlinking

To unlink a package from your project:

```bash
npm unlink [package-name]
```

To remove the global link:

```bash
cd /path/to/package
npm unlink
```

### Checking linked packages

To see which packages are linked in your project:

```bash
npm ls -g --depth=0 --link=true
```

## Best Practices and Considerations

1. **Version Control**: Don't commit the symlinks to version control. Add `node_modules` to your `.gitignore`.

2. **Peer Dependencies**: Be aware that `npm link` doesn't install peer dependencies automatically. You might need to install them manually in your project.

3. **Hoisting Issues**: In projects using npm v3+, linked modules are hoisted to the top-level `node_modules`. This can cause issues if your package expects to find its dependencies in its own `node_modules` folder.

4. **Rebuilding Native Modules**: If your linked package includes native modules, you may need to rebuild them after linking:

   ```bash
   npm rebuild [package-name]
   ```

5. **Workspace Awareness**: In monorepos using Workspaces, `npm link` might not behave as expected. Consider using Workspace features instead.

6. **Cleaning Up**: Always unlink packages when you're done testing to avoid confusion later.

## Troubleshooting

### Symlink not working

If the symlink isn't working, ensure you have the necessary permissions and that your Node.js version supports symlinks.

### Module not found errors

If you encounter "module not found" errors, try clearing the npm cache:

```bash
npm cache clean --force
```

### Unexpected behavior

If you experience unexpected behavior, it could be due to version mismatches. Ensure that the versions of dependencies in your linked package match those in your project.

## Alternatives to npm link

1. **yarn link**: If you're using Yarn, `yarn link` provides similar functionality.

2. **Local path dependencies**: You can specify a local path in your `package.json`:

   ```json
   "dependencies": {
     "my-package": "file:../path/to/my-package"
   }
   ```

3. **npm pack**: Create a tarball of your package and install it directly:

   ```bash
   cd /path/to/my-package
   npm pack
   cd /path/to/my-project
   npm install /path/to/my-package/my-package-1.0.0.tgz
   ```

## Conclusion

`npm link` is a powerful tool for local package development and testing. While it can greatly streamline your development workflow, it's important to use it judiciously and be aware of its limitations. By following best practices and understanding how it works, you can leverage `npm link` to enhance your development process and easily test local package changes before publication.
