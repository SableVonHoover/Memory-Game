import React from 'react';
import logo from './logo.svg';
import './App.css';
import TheGame from './components/TheGame.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Tarot Memory game</h1>
          <p className="lead">Try to remember which card you've already clicked. Choosing a duplicate is a loss.</p>
        </div>
      </header>
      <div>
        <TheGame></TheGame>
      </div>
    </div>
    );
  }

export default App;
