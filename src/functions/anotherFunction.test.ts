import anotherFunction from "./anotherFunction";

describe("anotherFunction", () => {
  // Test if the function logs the correct message
  it("logs the correct message", () => {
    // Mock console.log to capture the log message
    console.log = jest.fn();

    // Call the function with a test value
    const testValue = "testValue";
    anotherFunction(testValue);

    // Verify that the correct message is logged
    expect(console.log).toHaveBeenCalledWith(
      `I am another function! + ${testValue}`
    );
  });
});
