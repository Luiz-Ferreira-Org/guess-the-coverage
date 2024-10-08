import React from "react";

const App: React.FC = () => {
  const someValue: string = "Hello, React with TypeScript!";
  someFuction(someValue);

  return <h1>Hello, React with TypeScript!</h1>;
};

const someFuction = (value: string) =>
  console.log(`Hello, React with TypeScript! + ${value}`);

export default App;
