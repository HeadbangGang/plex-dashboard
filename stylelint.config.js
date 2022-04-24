module.exports = {
  extends: 'stylelint-config-standard',
  customSyntax: 'postcss-less',
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx'
  ],
  rules: {
    'length-zero-no-unit': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null
  }
}
