import React from 'react';
import './SensitivityTable.css';

const SensitivityTable = ({ sensitivityData }) => {
  if (!sensitivityData || !sensitivityData.Variable || !sensitivityData.PercentSens) {
    return <p>No sensitivity data available.</p>;
  }

  return (
    <div className="sensitivity-container">
      <h2>Sensitivity Analysis</h2>
      <p>
        Sensitivity analysis determines how different values of an independent variable affect a particular 
        dependent variable under a given set of assumptions. In other words, sensitivity analyses study how 
        various sources of uncertainty in a mathematical model contribute to the model's overall uncertainty.
      </p>
      <table id="sensitivity-table">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Percent Sensitivity</th>
          </tr>
        </thead>
        <tbody>
          {sensitivityData.Variable.map((variable, index) => (
            <tr key={index}>
              <td>{variable}</td>
              <td>{sensitivityData.PercentSens[index].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensitivityTable;

