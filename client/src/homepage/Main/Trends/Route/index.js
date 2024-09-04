import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Graph from '../../Trends';
import Attendance from '../Attendance'; 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Trends />} />
      <Route path="/Attendance" element={<Attendance />} />
    </Routes>
  </Router>
);

export default App;
