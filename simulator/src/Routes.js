import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimulationForm from './components/SimulationForm';
import SimulationResults from './components/SimulationResults';
import ProfitChart from './components/ProfitChart';
import ProfitHistogram from './components/ProfitHistogram';
import SensitivityTable from './components/SensitivityTable';
import Navbar from './components/Navbar';

const AppRoutes = () => {
  const [simulationData, setSimulationData] = useState(null);

  const handleSimulationSubmit = async (n_days) => {
    try {
      const response = await fetch('http://localhost:5000/simulate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ n_days }),
      });
      const data = await response.json();
      setSimulationData(data);
    } catch (error) {
      console.error('Error fetching simulation data:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<SimulationForm onSubmit={handleSimulationSubmit} />}
          />
          <Route
            path="/results"
            element={<SimulationResults data={simulationData} />}
          />
          <Route
            path="/chart"
            element={<ProfitChart dailyProfits={simulationData?.daily_profits} />}
          />
          <Route
            path="/histogram"
            element={<ProfitHistogram plotImage={simulationData?.plot_image} />}
          />
          <Route
            path="/sensitivity"
            element={<SensitivityTable sensitivityData={simulationData?.sensitivity} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
