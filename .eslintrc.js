module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': ['error', 'single'],
    'semi': ['warn', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'indent': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'no-unused-vars': ['warn'],
    'prefer-const': ['warn'],
    'require-await': ['warn'],
    'no-unreachable': ['warn'],
    'vue/html-self-closing': ['warn', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'never'
    }],
    'vue/multi-word-component-names': 'off',
    'no-multi-spaces': ['error', {
      'exceptions': { 'VariableDeclarator': true }
    }],
    'vue/no-unused-vars': ['warn'],
    'vue/no-unused-components': ['warn'],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/comment-directive': 'off',
    'vue/no-mutating-props': ['warn']
  }
}