// EquipmentPage.js
import React from 'react';
import ResourceItem from '../components/ResourceItem';
import '../styles/styles.css';

const EquipmentPage = ({ resources }) => {
  // Filter resources to include only those of type 'Equipment'
  const equipmentResources = resources.filter(resource => resource.type === 'Equipment');

  return (
    <div className="equipment-page">
      <h1 className="playwrite-ng-modern-unique-title2">Equipment</h1>
      <div className="resource-list">
        {equipmentResources.length > 0 ? (
          equipmentResources.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))
        ) : (
          <p>No equipment resources available.</p>
        )}
      </div>
    </div>
  );
};

export default EquipmentPage;
