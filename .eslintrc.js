

const OFF = 0
const WRN = 1
const ERR = 2

module.exports = {
  root: true,
  extends: '@react-native-community',
  reportUnusedDisableDirectives: true,
  rules: {
    'no-console': WRN,
    'eqeqeq': OFF,
    'indent': [ERR, 2],
    'no-extra-semi': [ERR, 2],
    'quotes': [ERR, 'single', { allowTemplateLiterals: true }],
    'capitalized-comments': [WRN, 'always'],
  }
};
