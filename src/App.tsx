import React from 'react';
import './App.css';
import AppNavBar from './components/appNavbar';
import BarChart from './components/barChart';
import { ThemeProvider } from '@emotion/react';
import customTheme from "./components/customTheme"

//height: 90%;
//width: 36%

const Chart = () => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return <div className="ChartContainer" style={{"height": "89%", "width": "96%"}}>
      <BarChart/>
    </div>
  } else {
    return <div className="ChartContainer" style={{"height": "89%", "width": "36%"}}>
      <BarChart/>
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <AppNavBar />
      </ThemeProvider>
      <Chart/>
    </div>
  );
}

export default App;
