// LegalServicesPage.js
import React from 'react';
import ResourceItem from '../components/ResourceItem';
import '../styles/styles.css';

const LegalServicesPage = ({ resources }) => {
  // Filter resources to include only those of type 'Legal Services'
  const legalServicesResources = resources.filter(resource => resource.type === 'Legal Services');

  return (
    <div className="legal-services-page">
      <h1 className="playwrite-ng-modern-unique-title2">Legal Services</h1>
      <div className="resource-list">
        {legalServicesResources.length > 0 ? (
          legalServicesResources.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))
        ) : (
          <p>No legal services resources available.</p>
        )}
      </div>
    </div>
  );
};

export default LegalServicesPage;
