import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return <h1>Hello, React with TypeScript!</h1>;
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}