// WorkplacePage.js
import React from 'react';
import ResourceItem from '../components/ResourceItem';
import '../styles/styles.css';

const WorkplacePage = ({ resources }) => {
  // Filter resources to include only those of type 'Workplace'
  const workplaceResources = resources.filter(resource => resource.type === 'Workplace');

  return (
    <div className="workplace-page">
      <h1 className="playwrite-ng-modern-unique-title2">Workplace Resources</h1>
      <div className="resource-list">
        {workplaceResources.length > 0 ? (
          workplaceResources.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))
        ) : (
          <p>No workplace resources available.</p>
        )}
      </div>
    </div>
  );
};

export default WorkplacePage;
