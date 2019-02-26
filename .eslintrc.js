module.exports = {
  extends: ['airbnb-base', 'prettier', 'prettier/standard'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 'off',
    'valid-jsdoc': [2, { requireReturn: false }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],

    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
  },
  globals: {
    Class: false,
  },
};
