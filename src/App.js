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
          A data viz exploration w/ React
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
          <p class="shaky-kpi">0.9 😬</p>
          </div>
          <div class="metric">
          <h2 class="metric-title">Bills due next 5 days</h2>
          <p class="kpi">Oat Milk Delivery - $276</p>
          </div>
          <div class="metric">
          <h2 class="metric-title">Outstanding Invoices</h2>
          <p class="kpi">$0</p>
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
