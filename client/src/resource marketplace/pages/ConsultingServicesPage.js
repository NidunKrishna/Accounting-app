// ConsultingServicesPage.js
import React from 'react';
import ResourceItem from '../components/ResourceItem';
import '../styles/styles.css';

const ConsultingServicesPage = ({ resources }) => {
  // Filter resources to include only those of type 'Consulting Services'
  const consultingServicesResources = resources.filter(resource => resource.type === 'Consulting Services');

  return (
    <div className="consulting-services-page">
      <h1 className="playwrite-ng-modern-unique-title2">Consulting Services</h1>
      <div className="resource-list">
        {consultingServicesResources.length > 0 ? (
          consultingServicesResources.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))
        ) : (
          <p>No consulting services resources available.</p>
        )}
      </div>
    </div>
  );
};

export default ConsultingServicesPage;
