const anotherFunction = (value: string, repeat: number): string => {
  // Initialize an empty string to accumulate messages
  let result = "";

  // Log the initial message
  const initialMessage = `I am another function! + ${value}`;
  result += initialMessage + "\n";

  // Variable declaration
  const message = "Hello, World!";
  result += message + "\n";

  // Conditional statement
  if (value.length > 5) {
    const longMessage = "The value is longer than 5 characters.";
    console.log(longMessage);
    result += longMessage + "\n";
  } else {
    const shortMessage = "The value is 5 characters or shorter.";
    console.log(shortMessage);
    result += shortMessage + "\n";
  }

  // Loop statement
  for (let i = 0; i < repeat; i++) {
    const loopMessage = `Loop iteration: ${i}`;
    result += loopMessage + "\n";
  }

  // Try-catch block
  try {
    if (value === "error") {
      throw new Error("An error occurred!");
    }
    const noErrorMessage = "No error occurred.";
    result += noErrorMessage + "\n";
  } catch (error: any) {
    console.error(error.message);
    result += error.message + "\n";
  }

  // Function call
  const printMessage = (msg: string) => {
    console.log(msg);
    result += msg + "\n";
  };
  printMessage(message);

  // Return the accumulated result
  return result.trim();
};

export default anotherFunction;
