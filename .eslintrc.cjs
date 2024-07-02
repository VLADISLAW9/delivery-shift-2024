const { eslint } = require('@vladislaw9/eslint');

module.exports = {
  ...eslint.react,
  overrides: [
    ...eslint.react.overrides,
    {
      extends: ['plugin:@tanstack/eslint-plugin-query/recommended'],
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      settings: {
        atomPostfix: ''
      },
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      }
    }
  ]
};
