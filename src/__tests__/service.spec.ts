import { isPasswordValid } from "../service";

describe("Service module", () => {
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
});
