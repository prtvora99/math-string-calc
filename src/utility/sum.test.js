import add from "./sum";

describe("String Sum Calculator", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the sum of two numbers separated by a comma", () => {
    expect(add("1,5")).toBe(6);
  });

  test("should handle an n number of digits", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });
});
