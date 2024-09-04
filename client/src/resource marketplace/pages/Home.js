import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; 

const Home = () => {
  return (
    <div className="home">
      <h1  className="playwrite-ng-modern-unique-title">Welcome to the Resource Marketplace</h1>
      <Link  className="playwrite-ng-modern-unique-body" to="/marketplace">Go to Marketplace</Link>
    </div>
  );
};

export default Home;
