const { eslint } = require('@vladislaw9/eslint');

module.exports = {
  ...eslint.react,
  ignorePatterns: ['vite.config.ts'],
  overrides: [
    ...eslint.react.overrides,
    {
      extends: ['plugin:@tanstack/eslint-plugin-query/recommended'],
      files: ['**/src/**/.{ts,tsx}'],
      settings: {
        atomPostfix: ''
      },
      parserOptions: {
        tsconfigRootDir: __dirname
      }
    }
  ]
};
