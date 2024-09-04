import React from 'react';
import CarouselComponent from '../Carousel/index';
import Navbar from '../Navbar/index'; 
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
      <Navbar /> {}
      <div className="header">
      <h1 className="playwrite-ng-modern-unique-title">Welcome to <br></br> TechBooks Manager</h1>
      <p className="playwrite-ng-modern-unique-body">
        Manage your finances efficiently and stay on top of your transactions.
      </p>
      </div>
      <CarouselComponent /> {}
    </div></div>
  );
};

export default Home;



