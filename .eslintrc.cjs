module.exports = {
  root: true,
  env: { browser: true, es6: true },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',"jsx-a11y","prettier"],
  rules: {
    "prettier/prettier": [
      1,
      {
        jsxSingleQuote: false,
        tabWidth: 2,
        singleQuote: false,
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
}
