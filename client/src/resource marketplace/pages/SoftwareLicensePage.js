// SoftwareLicensePage.js
import React from 'react';
import ResourceItem from '../components/ResourceItem';
import '../styles/styles.css';

const SoftwareLicensePage = ({ resources }) => {
  // Filter resources to include only those of type 'Software License'
  const softwareLicenseResources = resources.filter(resource => resource.type === 'Software License');

  return (
    <div className="software-license-page">
      <h1 className="playwrite-ng-modern-unique-title2">Software License</h1>
      <div className="resource-list">
        {softwareLicenseResources.length > 0 ? (
          softwareLicenseResources.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))
        ) : (
          <p>No software license resources available.</p>
        )}
      </div>
    </div>
  );
};

export default SoftwareLicensePage;
