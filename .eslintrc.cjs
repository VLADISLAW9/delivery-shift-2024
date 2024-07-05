const { eslint } = require('@vladislaw9/eslint');

module.exports = {
  ...eslint.react,
  ignorePatterns: ['vite.config.ts'],
  overrides: [
    ...eslint.react.overrides,
    {
      extends: ['plugin:@tanstack/eslint-plugin-query/recommended'],
      files: ['**/*.{ts,tsx}'],
      settings: {
        atomPostfix: ''
      },
      parserOptions: {
        tsconfigRootDir: __dirname
      },
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        "@typescript-eslint/no-misused-promises": 'off'
      }
    }
  ]
};
