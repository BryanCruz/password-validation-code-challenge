const isPasswordValidMockFn = jest.fn();
jest.mock("../service", () => ({
  isPasswordValid: isPasswordValidMockFn,
}));

import { validatePassword } from "../controller";

describe("App controller", () => {
  it("Should validate passwords", () => {
    isPasswordValidMockFn.mockReturnValueOnce(false).mockReturnValueOnce(true);

    expect(validatePassword("abc")).toEqual({ isValid: false });
    expect(validatePassword("abc")).toEqual({ isValid: true });
  });
});
