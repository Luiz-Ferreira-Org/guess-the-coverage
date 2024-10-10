import anotherFunction from "./anotherFunction";

describe("anotherFunction", () => {
  // Test the initial message log
  it("logs the initial message", () => {
    const result = anotherFunction("test", 3);
    expect(result).toContain("I am another function! + test");
  });

  // Test the variable declaration
  it("declares the message variable", () => {
    const result = anotherFunction("test", 3);
    expect(result).toContain("Hello, World!");
  });

  // Test the conditional statement
  it("logs the correct message based on value length", () => {
    const resultShort = anotherFunction("short", 3);
    expect(resultShort).toContain("The value is 5 characters or shorter.");

    const resultLong = anotherFunction("longerValue", 3);
    expect(resultLong).toContain("The value is longer than 5 characters.");
  });

  // Test the loop statement
  it("logs the loop iterations", () => {
    const result = anotherFunction("test", 3);
    expect(result).toContain("Loop iteration: 0");
    expect(result).toContain("Loop iteration: 1");
    expect(result).toContain("Loop iteration: 2");
  });

  // Test the try-catch block
  it("handles errors correctly", () => {
    const resultWithError = anotherFunction("error", 3);
    expect(resultWithError).toContain("An error occurred!");

    const resultWithoutError = anotherFunction("noError", 3);
    expect(resultWithoutError).toContain("No error occurred.");
  });

  // Test the function call
  it("calls the printMessage function", () => {
    const result = anotherFunction("test", 3);
    expect(result).toContain("Hello, World!");
  });
});
