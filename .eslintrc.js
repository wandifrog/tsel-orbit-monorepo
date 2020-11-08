const OFF = 0 // Turn the rule off
const WRN = 1 // Turn the rule on as a warning (doesn't affect exit code)
const ERR = 2 // Turn the rule on as an error (exit code will be 1)

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:json/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [],
  reportUnusedDisableDirectives: true,
  rules: {
    'prettier/prettier': OFF,
    'capitalized-comments': [WRN, 'always'],
    'eqeqeq': OFF,
    'indent': [ERR, 2],
    'no-console': WRN,
    'no-alert': WRN,
    'quotes': [ERR, 'single'],
    'semi': [ERR, 'never'],
    'comma-dangle': [ERR, 'never'],
    'array-element-newline': [ERR, 'consistent'],
    'comma-spacing': [ERR, { 'before': false, 'after': true }],
    'object-curly-spacing': [ERR, 'always'],
    'arrow-parens': [ERR, 'always'],
    'no-multi-spaces': [ERR],
    'react-native/no-inline-styles': OFF

    // 'no-unused-vars': WRN,
    // '@typescript-eslint/no-unused-vars': [OFF],
  }
}
