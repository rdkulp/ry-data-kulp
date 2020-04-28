import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VictoryPie, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A data exploration using React
        </p>
        <a
          className="App-link"
          href="https://rhombusrose.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to Rhombus Rose Website
        </a>
      </header>
    </div>
  );
}

export default App;
