import React from 'react';
import './ProfitHistogram.css'

const ProfitHistogram = ({ plotImage }) => {
  if (!plotImage) {
    return <p>No plot image available.</p>;
  }

  return (
    <div className="histogram-container">
      <img src={`data:image/png;base64,${plotImage}`} alt="Profit Histogram" />
    </div>
  );
};

export default ProfitHistogram;
