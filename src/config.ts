export default {
  appPort: 3000,
  passwordPolicy: {
    hasNoSpaces: true,
    hasNoRepeatedCharacters: true,
    hasAtLeastNCharacters: 9,
    hasAtLeastNDigits: 1,
    hasAtLeastNUppercase: 1,
    hasAtLeastNLowercase: 1,
    hasAtLeastNSpecialCharacters: 1,
  },
};
