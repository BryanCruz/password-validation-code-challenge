describe("Service module with default policy", () => {
  const { isPasswordValid } = jest.requireActual("../service");

  it("Should check if password is valid", () => {
    expect(isPasswordValid("")).toBe(false);
    expect(isPasswordValid("aa")).toBe(false);
    expect(isPasswordValid("ab")).toBe(false);
    expect(isPasswordValid("AAAbbbCc")).toBe(false);
    expect(isPasswordValid("AbTp9!foo")).toBe(false);
    expect(isPasswordValid("AbTp9!foA")).toBe(false);
    expect(isPasswordValid("AbTp9 fok")).toBe(false);
    expect(isPasswordValid("AbTp9 !fok")).toBe(false);
    expect(isPasswordValid("AbTp9!fok")).toBe(true);
  });

  it("Should check for special characters", () => {
    const specialCharacters = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "+",
    ];

    expect(
      specialCharacters.map((s) => isPasswordValid(`AbTp9${s}fok`))
    ).toEqual(specialCharacters.map((_s) => true));
  });
});

describe("Service module with some rules changed", () => {
  jest.mock("../config", () => ({
    passwordPolicy: {
      hasNoSpaces: false,
      hasNoRepeatedCharacters: false,
      hasAtLeastNCharacters: 4,
      hasAtLeastNDigits: 2,
      hasAtLeastNUppercase: 1,
      hasAtLeastNLowercase: 1,
      hasAtLeastNSpecialCharacters: 0,
    },
  }));

  jest.resetModules();

  const { isPasswordValid } = jest.requireActual("../service");

  it("Should check if password is valid", () => {
    expect(isPasswordValid("")).toBe(false);
    expect(isPasswordValid("aa")).toBe(false);
    expect(isPasswordValid("ab")).toBe(false);
    expect(isPasswordValid("AAAbbbCc")).toBe(false);
    expect(isPasswordValid("AbTp9!foo")).toBe(false);
    expect(isPasswordValid("AbTp9!foA")).toBe(false);
    expect(isPasswordValid("AbTp9 fok")).toBe(false);
    expect(isPasswordValid("AbTp99 !fok")).toBe(true);
    expect(isPasswordValid("aD12")).toBe(true);
    expect(isPasswordValid("aD12!")).toBe(true);
    expect(isPasswordValid("aD11!")).toBe(true);
    expect(isPasswordValid("AbTp90!fok")).toBe(true);
  });
});
