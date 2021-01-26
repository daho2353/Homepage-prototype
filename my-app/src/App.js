import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home.js';
import Resume from './Resume.js';

function App() {
  return (
    <div className="App">
      <h2> Damian Howard </h2> 
      <nav>
        <button> Home </button>
        <button> Resume </button>
        <button> Portfolio </button>
      </nav>
      <Home/>
      <Resume/>
    </div>
  );
}

export default App;
