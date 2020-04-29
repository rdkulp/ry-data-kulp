import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VictoryPie, VictoryBar, VictoryChart, VictoryLine, VictoryAxis, VictoryTheme, VictoryStack, VictoryTooltip } from 'victory';


const data2020 = [
  {quarter: 1, earnings: 10000},
  {quarter: 2, earnings: 2000},
  {quarter: 3, earnings: 3200},
  {quarter: 4, earnings: 4600}
];

const data2021 = [
  {quarter: 1, earnings: 5000},
  {quarter: 2, earnings: 3800},
  {quarter: 3, earnings: 4300},
  {quarter: 4, earnings: 5400}
];

const data2022 = [
  {quarter: 1, earnings: 5200},
  {quarter: 2, earnings: 7300},
  {quarter: 3, earnings: 7000},
  {quarter: 4, earnings: 8200}
];

const data2023 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 9000},
  {quarter: 3, earnings: 8200},
  {quarter: 4, earnings: 13000}
];

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
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material}
          animate={{
            duration: 1500,
            onLoad: { duration: 1000 }
          }}
        >
          <VictoryAxis
            tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryStack
            colorScale={["#7F95FC","#A5DAFE", "#FEA5A5", "#71E2E2" ]}
          >
            <VictoryBar
              data={data2020}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2021}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2022}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2023}
              x={"quarter"}
              y={"earnings"}
            />
          </VictoryStack>
        </VictoryChart>
        <ul class="key">
          <li class="key-text"> 2020 </li>
          <li class="purple-key"></li>
          <li class="key-text"> 2021 </li>
          <li class="blue-key"></li>
          <li class="key-text"> 2022 </li>
          <li class="pink-key"></li>
          <li class="key-text"> 2023 </li>
          <li class="aqua-key"></li>
        </ul>
        </div>
        <div class="chart-container">
        <VictoryPie
          labelComponent={<VictoryTooltip/>}
          colorScale={["#7F95FC", "#A5DAFE" ]}
          data={[
            { x: "PPP Available", y: 10000 },
            { x: " ", y: 0 },
          ]}
          animate={{
            duration: 1500,
          }}
        />

        <ul class="key">
          <li class="key-text"> PPP Available </li>
          <li class="purple-key"></li>
          <li class="key-text"> PPP We Got </li>
          <li class="blue-key"></li>
        </ul>
        </div>
        <div class="chart-container">
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            style={{
              data: { stroke: "#7F95FC" },
              parent: { border: "1px solid #ccc"}
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 }
            ]}
          />
        </VictoryChart>
        <ul class="key">
          <li class="key-text"> 2020 </li>
          <li class="purple-key"></li>
          <li class="key-text"> 2021 </li>
          <li class="blue-key"></li>
          <li class="key-text"> 2022 </li>
          <li class="pink-key"></li>
          <li class="key-text"> 2023 </li>
          <li class="aqua-key"></li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
