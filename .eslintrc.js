const OFF = 0
const WRN = 1
const ERR = 2

module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: [],
  reportUnusedDisableDirectives: true,
  rules: {
    'prettier/prettier': OFF,
    'capitalized-comments': [WRN, 'always'],
    'eqeqeq': OFF,
    'indent': [ERR, 2],
    'no-console': WRN,
    'no-alert': OFF,
    'quotes': [ERR, 'single'],
    'semi': [ERR, 'never'],
    'comma-dangle': [ERR, 'never'],
    'array-element-newline': [ERR, 'consistent'],
    'no-unused-vars': WRN,
    '@typescript-eslint/no-unused-vars': [OFF]
    // 'array-element-newline': [ERR, { 'multiline': true, 'minItems': 3 }]
    // '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars-experimental': 'error',
    // 'no-unused-vars': [OFF, 'all']
    // '@typescript-eslint/no-unused-vars'
  }
}
