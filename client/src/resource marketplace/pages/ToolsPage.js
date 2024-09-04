// ToolsPage.js
import React from 'react';
import ResourceItem from '../components/ResourceItem';
import '../styles/styles.css';

const ToolsPage = ({ resources }) => {
  // Filter resources to only include those with the type 'Tools and Machinery'
  const toolsResources = resources.filter(resource => resource.type === 'Tools and Machinery');

  return (
    <div className="tools-page">
      <h1>Tools and Machinery</h1>
      <div className="resource-list">
        {toolsResources.length > 0 ? (
          toolsResources.map(resource => (
            <ResourceItem key={resource.id} resource={resource} />
          ))
        ) : (
          <p>No tools and machinery resources available.</p>
        )}
      </div>
    </div>
  );
};

export default ToolsPage;
