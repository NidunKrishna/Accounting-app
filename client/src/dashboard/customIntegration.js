// customIntegration.js

import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

function renderDashboard() {
  const rootElement = document.createElement('div');
  rootElement.id = 'dashboard-root';
  document.body.appendChild(rootElement);

  ReactDOM.render(
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>,
    rootElement
  );
}

renderDashboard();
