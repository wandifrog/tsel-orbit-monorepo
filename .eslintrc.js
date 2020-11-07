

const OFF = 0
const WRN = 1
const ERR = 2

module.exports = {
  root: true,
  extends: ['prettier', '@react-native-community'],
  plugins: ['prettier'],
  reportUnusedDisableDirectives: true,
  rules: {
    'prettier/pretiier': [ERR],
    'no-console': WRN,
    'eqeqeq': OFF,
    'indent': [ERR, 2],
    // 'semi': ['error', 'never'],
    'quotes': [ERR, 'single', { allowTemplateLiterals: true }],
    'capitalized-comments': [WRN, 'always']
  }
}
