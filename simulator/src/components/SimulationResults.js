import React from 'react';
import ProfitChart from './ProfitChart';
import './SimulationResults.css'; // Import the CSS file

const SimulationResults = ({ data }) => {
  if (!data) {
    return <p className="results-container">No simulation data available. Please run a simulation.</p>;
  }

  return (
    <div className="results-container">
      <h2>Simulation Results</h2>
      <div className="profit-summary">
        <div className="profit-info">
          <p>Total Profit:</p>
          <span id="total-profit">{data.total_profit.toFixed(2)}</span>
        </div>
        <div className="profit-info">
          <p>Average Daily Profit:</p>
          <span id="average-profit">{data.average_profit.toFixed(2)}</span>
        </div>
      </div>
      <ProfitChart dailyProfits={data.daily_profits} />
    </div>
  );
};

export default SimulationResults;
