---
sidebar_position: 1
---

# Install ESLint9, Integrate Prettier into project

## Resources
- [Website: ESLint Org](https://eslint.org/)
- [Repository: eslint](https://github.com/eslint/eslint)
- [Article: Prettier Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)
- [Repository: eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [Repository: eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [Repository: eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - Up until now _(2025/01/06)_, airbnb still not support eslint9, see: [airbnb/javascript: ISSUE: eslint v9 support](https://github.com/airbnb/javascript/issues/2961)

These packages have different purposes:

**eslint-plugin-prettier**
- runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

**eslint-config-prettier**
- turns off all rules that are unnecessary or might conflict with Prettier. It's mean that if you use some eslint-config(your own or third party) and this config have conflicts with prettier rules - it should resolve this conflicts by turn off this rules.


## Steps by Steps

```shell
npm init @eslint/config@latest

npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier 
```

## Configure ESLint (flat file): `eslint.config.js`
```javascript
import globals from 'globals';
import eslint from '@eslint/js';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';
import eslintConfigBase from './eslint.config.base.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. Basic settings
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },

  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ignores: ['node_modules']
  },
  // 2. ESLint recommended configuration

  eslint.configs.recommended,
  // 3. Your custom base configuration
  eslintConfigBase,
  // 4. Prettier-related configurations
  prettierPluginRecommended,
  prettierConfig
];
```

> When defining the ESLint configuration array, the order is indeed important, as later configurations will override or extend earlier ones.

The rationale for this order is:

1. First, set basic global variables and file patterns, which are usually not overridden by other configurations.
2. Then apply `ESLint's recommended` configuration, which provides a good starting point.
3. Next, apply your `custom base configuration` (eslintConfigBase). This allows you to customize on top of the ESLint recommended configuration.
4. Finally, apply `Prettier-related configurations`. This ensures that Prettier's rules are not overridden by other configurations and can correctly handle any potential rule conflicts.

Note that `prettierPluginRecommended` usually already includes the configuration from `eslint-config-prettier`, so you might not need to include prettierConfig separately. However, it's safe to keep it if you find any formatting-related conflicts.

This order should ensure that your custom rules are applied while allowing Prettier's formatting rules to correctly override any potentially conflicting ESLint rules.

## `package.json` Scripts
```javascript
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
```

As:

**eslint-plugin-prettier**
- runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

We don't need to config prettier command like `--check` or `--write`, linter will handle and report the issues.

When run `npm run lint`, the prettier rules will report as below:

```shell
 4:27  error    Delete `,`                                prettier/prettier
 5:3   error    Delete `··`                               prettier/prettier
```
