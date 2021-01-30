import config from "../config";

describe("Config variables", () => {
  const configTests: { [key: string]: () => void } = {
    appPort: () => {
      expect(config.appPort).toBe(3000);
    },
    passwordPolicy: () => {
      expect(config.passwordPolicy).toEqual({
        hasNoSpaces: true,
        hasNoRepeatedCharacters: true,
        hasAtLeastNCharacters: 9,
        hasAtLeastNDigits: 1,
        hasAtLeastNUppercase: 1,
        hasAtLeastNLowercase: 1,
        hasAtLeastNSpecialCharacters: 1,
      });
    },
  };

  it("Should have a test for each variable in config", () => {
    const variablesInTests = Object.keys(configTests).sort();
    const variablesInConfig = Object.keys(config).sort();

    expect(variablesInTests).toEqual(variablesInConfig);
  });

  it("Should test config variables", () => {
    Object.entries(configTests).forEach(([_variable, testFn]) => {
      testFn();
    });
  });
});
