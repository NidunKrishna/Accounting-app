import React from 'react';
import ResourceItem from './ResourceItem';
import '../styles/styles.css'; 

const ResourceList = ({ resources, setResources }) => {
  const handleDelete = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  }

  return (
    <div className="resource-list">
      {resources.length === 0 ? (
        <p className="playwrite-ng-modern-unique-body">No resources available</p>
      ) : (
        resources.map((resource) => (
          <ResourceItem key={resource.id} resource={resource} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default ResourceList;
