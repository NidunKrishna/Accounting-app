import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <h2 className="playwrite-ng-modern-unique-title">TechBooks Manager</h2>
      </div>
      <ul className="navbar-links">
        <li className="playwrite-ng-modern-unique-body"><a href="/EmpRegister">Emp Register</a></li>
        <li className="playwrite-ng-modern-unique-body"><a href="/Charts">Financial Dashboard</a></li>
        <li className="playwrite-ng-modern-unique-body"><a href="/Trends">Trend Analysis</a></li>
        <li className="playwrite-ng-modern-unique-body"><a href="/TaxCalculator">Generated taxes</a></li>
        <li className="playwrite-ng-modern-unique-body"><a href="/Customer">Customer Details</a></li>
        <li className="playwrite-ng-modern-unique-body"><a href="http://localhost:3002/">Invoice Overview</a></li>
        <li className="playwrite-ng-modern-unique-body"><a href="http://localhost:3001/">Resource MarketPlace</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
