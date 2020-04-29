import React from 'react';
import {VictoryPie, VictoryChart, VictoryBar, VictoryLine, VictoryAxis, VictoryTheme, VictoryStack, VictoryTooltip } from 'victory';

function Chart(props) {

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

  return(
<>

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

</>
); }

function Pie(props) {
return(
<>
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
</>
); }

function Line(props) {
return(
<>
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
    <li class="key-text"> 🤹🏼‍ skills over time </li>
    <li class="purple-key"></li>
  </ul>
</>
); }

export { Chart, Pie, Line };
