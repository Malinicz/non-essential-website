import { validateEmail } from "./validateEmail";

describe("validateEmail", () => {
  it("should return false for invalid emails", () => {
    expect(validateEmail("not an email")).toEqual(false);
    expect(validateEmail("missing@domain")).toEqual(false);
    expect(validateEmail("missing@.com")).toEqual(false);
  });

  it("should return the email for valid emails", () => {
    expect(validateEmail("test@example.com")).toEqual(true);
    expect(validateEmail("UPPERCASE@EXAMPLE.COM")).toEqual(true);
    expect(validateEmail("with.periods@and.hyphens.com")).toEqual(true);
  });
});
