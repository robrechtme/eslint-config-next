/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "@next/next/no-img-element": "off",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "arrow-body-style": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc" },
      },
    ],
    "jsx-uses-react": "off",
    "object-shorthand": "error",
    "prettier/prettier": "error",
  },
};
