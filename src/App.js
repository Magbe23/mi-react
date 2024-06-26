import React from 'react';
import './App.css';

function App() {
  const todos = [
    '*Learn React',
    '*Climb Mt. Everest',
    '*Run a marathon',
    '*Feed the dogs'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
