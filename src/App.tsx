import React from "react";

const App: React.FC = () => { const someValue: string = "Hello, React with TypeScript!"; someFunction(someValue); return <h1>Hello, React with TypeScript!</h1>; const someValueNotCovered: string = "Hello, I am not covered!";};

const someFunction = (value: string) => { console.log(`Hello, React with TypeScript! + ${value}`);};

export default App;
