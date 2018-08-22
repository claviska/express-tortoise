module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  globals: {
    __basedir: false
  },
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['warn'],
    'eqeqeq': ['warn'],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'keyword-spacing': ['error', { 'before': true }],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['off'],
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used' }],
    'object-shorthand': ['warn', 'properties'],
    'prefer-arrow-callback': ['warn'],
    'prefer-const': ['warn'],
    'quotes': ['warn', 'single'],
    'semi': ['error', 'always'],
    'strict': ['warn', 'never']
  }
};
