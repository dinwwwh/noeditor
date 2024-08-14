import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    ignores: ['**/*.gen.ts'],
  },
  {
    rules: {
      'react/prefer-destructuring-assignment': ['off'],
    },
  },
  {
    files: ['src/**/*.css.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        name: '@vanilla-extract/recipes',
        importNames: ['recipe'],
        message: 'Please use the `recipe` function from `@fizzui/styles` instead.',
      }, {
        name: '@vanilla-extract/css',
        importNames: ['style'],
        message: 'Please use the `style` function from `@fizzui/styles` instead.',
      }],
    },
  },
)
