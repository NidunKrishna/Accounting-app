import React from 'react';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-item">
          <img src="https://i.pinimg.com/564x/bc/4f/63/bc4f637bfbde4de74802f358ae3f6dad.jpg" />
          <p>Employee Register</p>
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/564x/9c/a2/12/9ca212a188350d2789959190f9aa81de.jpg" />
          <p>Financial Dashboard</p>
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/564x/18/db/06/18db06037cc5eda6dbddc1f9405d5a9e.jpg" />
          <p>Trend Analysis</p>
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/564x/9f/52/f2/9f52f22daeeedd01240b34bec49e5079.jpg" />
          <p>Customer Details</p>
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/474x/b4/de/be/b4debeb80c3f441fbd36ee1e293c1256.jpg" />
          <p>Invoice Overview</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
