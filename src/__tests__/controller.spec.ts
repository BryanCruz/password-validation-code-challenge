import { validatePassword } from "../controller";

describe("App controller", () => {
  it("Should validate passwords", () => {
    expect(validatePassword("abc")).toEqual({ isValid: false });
  });
});
