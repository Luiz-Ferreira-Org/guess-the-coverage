import newFunction from "./newFunction";

describe("newFunction", () => {
  // Test if the function returns the correct concatenated string
  it("returns the correct concatenated string", () => {
    const expectedResult =
      "Statement 1Statement 2Statement 3Statement 4Statement 5Statement 6Statement 7Statement 8Statement 9Statement 10";
    const result = newFunction();
    expect(result).toBe(expectedResult);
  });
});
