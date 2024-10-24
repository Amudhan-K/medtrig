import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProvidersPage from '../pages/ProvidersPage'; // Adjusted path
import PatientsPage from '../pages/PatientsPage'; // Adjusted path
import HealthSystemsPage from '../pages/HealthSystemsPage'; // Adjusted path

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/forProviders" element={<ProvidersPage />} />
      <Route path="/forPatients" element={<PatientsPage />} />
      <Route path="/forHealthSystems" element={<HealthSystemsPage />} />
    </Routes>
  );
};

export default AppRoutes;
