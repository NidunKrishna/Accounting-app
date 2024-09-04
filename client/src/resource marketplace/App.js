// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import WorkplacePage from './pages/WorkplacePage';
import ToolsPage from './pages/ToolsPage';
import EquipmentPage from './pages/EquipmentPage';
import SoftwareLicensePage from './pages/SoftwareLicensePage';
import FreelancerServicesPage from './pages/FreelancerServicesPage';
import TechnicalSupportPage from './pages/TechnicalSupportPage';
import ConsultingServicesPage from './pages/ConsultingServicesPage';
import LegalServicesPage from './pages/LegalServicesPage';
import './styles/styles.css';

const App = () => {
  const [resources, setResources] = useState([]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace resources={resources} setResources={setResources} />} />
          <Route path="/workplace" element={<WorkplacePage resources={resources} />} />
          <Route path="/tools" element={<ToolsPage resources={resources} />} />
          <Route path="/equipment" element={<EquipmentPage resources={resources} />} />
          <Route path="/software-license" element={<SoftwareLicensePage resources={resources} />} />
          <Route path="/freelancer-services" element={<FreelancerServicesPage resources={resources} />} />
          <Route path="/technical-support" element={<TechnicalSupportPage resources={resources} />} />
          <Route path="/consulting-services" element={<ConsultingServicesPage resources={resources} />} />
          <Route path="/legal-services" element={<LegalServicesPage resources={resources} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
