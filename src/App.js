import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart, Pie, Line} from './components/charts';

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
          Back to Website
        </a>
      </header>
      <div>
        <h1>Steady Ledger Dashboard (Fictional)</h1>
        <div class="overview">
          <div class="metric">
          <h2 class="metric-title">Current Ratio</h2>
          </div>
          <div class="metric">
          <h2 class="metric-title">Bills due next 5 days</h2>
          </div>
          <div class="metric">
          <h2 class="metric-title">Outstanding Invoices</h2>
          </div>
        </div>
        <div class="chart-container">
          <Chart></Chart>
        </div>
        <div class="chart-container">
        <Pie></Pie>
        </div>
        <div class="chart-container">
          <Line></Line>
        </div>
      </div>
    </div>
  );
}

export default App;
