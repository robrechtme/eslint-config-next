# eslint-config-next

My personal —opinionated— ESLint config for Next.js projects.

## Installation

```sh
yarn add -D @robrechtme/eslint-config-next eslint prettier
```

Create an `.eslintrc` file:

```json
{
  "extends": "@robrechtme/next"
}
```

Create a `.prettierrc` file (TODO: publish this as well):

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSpacing": true,
  "useTabs": false
}
```

Create some `package.json` entries and start linting away!

```json
  "scripts": {
    "lint": "next lint",
    "lint:fix": "next lint --fix",
  }
```
