import config from "../config";

describe("Config variables", () => {
  const configTests: { [key: string]: () => void } = {
    appPort: () => {
      expect(config.appPort).toBe(3000);
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
