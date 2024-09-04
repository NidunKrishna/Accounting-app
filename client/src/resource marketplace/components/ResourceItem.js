import React from 'react';
import '../styles/styles.css'; 

const ResourceItem = ({ resource, onDelete }) => {
  return (
    <div className="resource-card" >
      <h3  className="playwrite-ng-modern-unique-body">{resource.type}</h3>
      <p  className="playwrite-ng-modern-unique-body">{resource.description}</p>
      <p  className="playwrite-ng-modern-unique-body"> Price: ${resource.price}</p>
      <button onClick={() => onDelete(resource.id)}  className="playwrite-ng-modern-unique-body">Delete</button>
    </div>
  );
};

export default ResourceItem;
