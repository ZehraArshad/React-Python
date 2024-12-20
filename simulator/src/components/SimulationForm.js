import React, { useState } from 'react';


const SimulationForm = ({ onSubmit }) => {
  const [n_days, setNDays] = useState(365);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(n_days);
  };

  return (
    <div className='hero-section'>
      <h1>Welcome to SimuLAB</h1>
      <p>
        At SimuLAB, we help you create value by predicting future profits and sales. 
      </p>

      <form id="simulation-form" onSubmit={handleSubmit}>
        <label htmlFor="n_days"> Prediction for the next </label>
        <input
          type="number"
          id="n_days"
          name="n_days"
          value={n_days}
          placeholder='days'
          min="1"
          onChange={(e) => setNDays(e.target.value)}
        />
        <button className='hero-button' type="submit">Run Simulation</button>
      </form>
    </div>
  );
};

export default SimulationForm;
