// TechnicalSupportPage.js
import React from 'react';
import ResourceItem from '../components/ResourceItem';
import '../styles/styles.css';

const TechnicalSupportPage = ({ resources }) => {
  // Filter resources to include only those of type 'Technical Support'
  const technicalSupportResources = resources.filter(resource => resource.type === 'Technical Support');

  return (
    <div className="technical-support-page">
      <h1 className="playwrite-ng-modern-unique-title2">Technical Support</h1>
      <div className="resource-list">
        {technicalSupportResources.length > 0 ? (
          technicalSupportResources.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))
        ) : (
          <p>No technical support resources available.</p>
        )}
      </div>
    </div>
  );
};

export default TechnicalSupportPage;
