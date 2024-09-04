import React from 'react';
import ResourceForm from '../components/ResourceForm';
import ResourceList from '../components/ResourceList';
import '../styles/styles.css'; 

const Marketplace = ({ resources, setResources }) => {
  return (
    <div className="marketplace-bg">
    <div className="marketplace">
      <h2  className="playwrite-ng-modern-unique-title">Marketplace</h2>
      <ResourceForm setResources={setResources} />
      <ResourceList resources={resources} setResources={setResources} />
    </div></div>
  );
};

export default Marketplace;
