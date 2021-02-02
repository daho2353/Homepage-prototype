import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home.js';
import Resume from './Resume.js';
import Portfolio from './Portfolio.js';
import { useState } from 'react';



function App() {
  const[currentPage, setPage] = useState('Home');
  console.log(currentPage)
  return (
    <div className="App">
      <h2> Damian Howard </h2> 
      <nav>
        <button onClick = {() => setPage('Home')}> Home </button>
        <button onClick = {() => setPage('Resume')}> Resume </button>
        <button onClick = {() => setPage("Portfolio")}> Portfolio </button>
      </nav>
      <Home activeCheck = {currentPage} />
      <Resume activeCheck= {currentPage} />
      <Portfolio activeCheck= {currentPage}/>
    </div>
  );
}

export default App;
