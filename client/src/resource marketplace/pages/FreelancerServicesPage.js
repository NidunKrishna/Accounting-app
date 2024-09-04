// FreelancerServicesPage.js
import React from 'react';
import ResourceItem from '../components/ResourceItem';
import '../styles/styles.css';

const FreelancerServicesPage = ({ resources }) => {
  // Filter resources to include only those of type 'Freelancer Services'
  const freelancerServicesResources = resources.filter(resource => resource.type === 'Freelancer Services');

  return (
    <div className="freelancer-services-page">
      <h1 className="playwrite-ng-modern-unique-title2">Freelancer Services</h1>
      <div className="resource-list">
        {freelancerServicesResources.length > 0 ? (
          freelancerServicesResources.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))
        ) : (
          <p>No freelancer services resources available.</p>
        )}
      </div>
    </div>
  );
};

export default FreelancerServicesPage;
