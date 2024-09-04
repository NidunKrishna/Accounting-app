// ResourceForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const resourceTypes = [
  'Workplace',
  'Tools and Machinery',
  'Equipment',
  'Software License',
  'Freelancer Services',
  'Technical Support',
  'Consulting Services',
  'Legal Services'
];

const ResourceForm = ({ setResources }) => {
  const [resource, setResource] = useState({
    type: '',
    description: '',
    price: 0
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resource.type) {
      setResources((prevResources) => [
        ...prevResources,
        { ...resource, id: Date.now() }
      ]);
      setResource({ type: '', description: '', price: 0 });

      // Redirect to the appropriate page based on resource type
      switch (resource.type) {
        case 'Workplace':
          navigate('/workplace');
          break;
        case 'Tools and Machinery':
          navigate('/tools');
          break;
        case 'Equipment':
          navigate('/equipment');
          break;
        case 'Software License':
          navigate('/software-license');
          break;
        case 'Freelancer Services':
          navigate('/freelancer-services');
          break;
        case 'Technical Support':
          navigate('/technical-support');
          break;
        case 'Consulting Services':
          navigate('/consulting-services');
          break;
        case 'Legal Services':
          navigate('/legal-services');
          break;
        default:
          navigate('/marketplace');
          break;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="resource-form">
      <select
        value={resource.type}
        onChange={(e) => setResource({ ...resource, type: e.target.value })}
        required
      >
        <option value="" className='playwrite-ng-modern-unique-title' disabled>Select Resource Type</option>
        {resourceTypes.map((type) => (
          <option className='playwrite-ng-modern-unique-title' key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input className='playwrite-ng-modern-unique-title'
        type="text"
        placeholder="Description"
        value={resource.description}
        onChange={(e) => setResource({ ...resource, description: e.target.value })}
      />
      <input className='playwrite-ng-modern-unique-title'
        type="integer"
        placeholder="Price"
        value={resource.price}
        onChange={(e) => setResource({ ...resource, price: Number(e.target.value) })}
      />
      <button className="playwrite-ng-modern-unique-title" type="submit">Add Resource</button>
    </form>
  );
};

export default ResourceForm;
