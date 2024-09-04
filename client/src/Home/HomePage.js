import React, { useState } from 'react';
import Slider from 'react-slick';
import './HomePage.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/AboutAuth';
import{SmileOutlined , FrownOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const {user,logout} = useAuth();
  const navigate = useNavigate();
  // if(!user){
  //   return
  //   (
  //     <>
  //     <a><FrownOutlined />guest</a>
  //     </>
  //   )
  // }
  const [logged,setLogged] = useState(!user)
  const Status = () =>{
    if(!user){
      alert('Login to continue');
      navigate('/Login')
    }
    else{
      <Link to = '/'> </Link>
    }
  }
  const handleLogged = () =>{
    logout()
    setLogged(true)
  }
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <nav className="homepage-nav">
          {/* <a href="#global-taxes">Emp Register</a>
          <a href="#sap-business">Financial Dashboard</a>
          <a href="#audit-assurance">Trends Analysis</a>
          <a href="#global-outsourcing">Customer Details</a>
          <a href="#about-us">Invoice Overview</a> */}
          <a onClick={handleLogged} style={{cursor:'pointer'}}>Log out</a>
          {logged ? <FrownOutlined /> : <SmileOutlined />} {user ? user.username : 'guest'}
        </nav>
      </header>

      <section className="homepage-main">
        <div className="homepage-banner">
          <Slider {...settings} className="custom-slider">
            <div className="slide-item slide1">
              <div className="slide-content">
                <h1 className="homepage-title">Financial Insights</h1>
                <p className="homepage-subtitle">Transform data into actionable insights with our Financial Dashboard</p>
              </div>
            </div>
            <div className="slide-item slide2">
              <div className="slide-content">
                <h1 className="homepage-title">Customer Management</h1>
                <p className="homepage-subtitle">Efficiently manage customer relationships with Customer Details and Invoice Overview</p>
              </div>
            </div>
            <div className="slide-item slide3">
              <div className="slide-content">
                <h1 className="homepage-title">Market Trends</h1>
                <p className="homepage-subtitle">Stay informed with predictive insights and market trends analysis</p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="homepage-services">
          <h2 className="homepage-services-title">Our Services</h2>
          <div className="homepage-services-list">
            <div className="homepage-service">
              <h3>Employees Register</h3>
              <p>Efficiently manage and update employee records for streamlined operations</p>
              <button onClick={Status} >Know More</button>
            </div>
            <div className="homepage-service">
              <h3>Financial Dashboard</h3>
              <p>Gain insights into financial performance with dynamic charts and real-time data</p>
             <Link to='/Trends'><button>Know More</button></Link> 
            </div>
            <div className="homepage-service">
              <h3>Trend Analysis</h3>
              <p>Stay ahead with detailed analysis and predictive insights for making informed decisions with trends </p>
              <Link><button>Know More</button></Link>
            </div>
            <div className="homepage-service">
              <h3>Customer Details</h3>
              <p>Centralizes and manages comprehensive customer information for enhanced service delivery</p>
              <Link to='/Customer'><button>Know More</button></Link>
            </div>
            <div className="homepage-service">
              <h3>Invoice Overview</h3>
              <p>Offers a detailed summary of financial transactions and invoice statuses for efficient financial management</p>
              <button>Know More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
