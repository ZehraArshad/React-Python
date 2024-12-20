import React from 'react';
import Plot from 'react-plotly.js';
import './ProfitHistogram.css'
const ProfitChart = ({ dailyProfits }) => {
  if (!dailyProfits) {
    return <p className="plot-container">No daily profits data available.</p>;

  }

  return (
    <div className="histogram-container">
      <h2>Daily Profit Over Time</h2>
      <Plot
        data={[
          {
            x: Array.from({ length: dailyProfits.length }, (_, i) => i + 1),
            y: dailyProfits,
            type: 'scatter',
            mode: 'lines',
            marker: { color: '#de7354' },
          },
        ]}
        layout={{ xaxis: { title: 'Day' }, yaxis: { title: 'Profit' } }}
      />
    </div>
  );
};

export default ProfitChart;
