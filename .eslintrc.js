module.exports = {
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  extends: [
    'eslint:recommended', // Base ESLint rules
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
    'prettier', // Disable ESLint rules that conflict with Prettier
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Treat Prettier formatting issues as errors
    '@typescript-eslint/explicit-function-return-type': 'off', // Optional return types
    '@typescript-eslint/no-explicit-any': 'warn', // Warn about using 'any'
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused vars prefixed with _
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
