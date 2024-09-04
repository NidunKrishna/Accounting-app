import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, DoughnutController, PointElement, ArcElement } from 'chart.js'; // Import necessary components from chart.js
import styled, { createGlobalStyle } from 'styled-components';
import './Charts.css'; // Import your Charts.css file here
import PeepingImage from '../assets/peeping-image.svg'; // Import your SVG image

// Register necessary components and scales globally
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  DoughnutController,
  PointElement,
  ArcElement
);

// Define the global style for the Google Font
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+NG+Modern:wght@100..400&display=swap');

  body {
    font-family: 'Playwrite NG Modern', cursive;
    background-color: #fffee0;
    margin: 0;
    padding: 0;
  }
`;

const Charts = () => {
  // Sample data for transactions and account info
  var transactions = [
    { amount: 1000, category: 'Salaries', date: '2024-06-28' },
    { amount: 500, category: 'Extra', date: '2024-06-27' },
    { amount: 1500, category: 'Utilities', date: '2024-06-26' },
    { amount: 2000, category: 'Rent', date: '2024-06-25' },
  ];

  var accountInfo = {
    accountNumber: '1234567890',
    accountType: 'Savings Account',
    currentBalance: 7000,
    lastTransaction: '2024-06-28',
  };

  // Sample chart data and options
  var barChartData1 = {
    labels: transactions.map(transaction => transaction.category),
    datasets: [
      {
        label: 'Transactions',
        data: transactions.map(transaction => transaction.amount),
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 1,
      },
    ],
  };

  var barChartData2 = {
    labels: ['Current Balance', 'Past Balance'],
    datasets: [
      {
        label: 'Balance',
        data: [7000, 5000],
        backgroundColor: ['#000000', '#ffffff'],
        borderWidth: 1,
      },
    ],
  };

  var doughnutChartData = {
    labels: ['Profit', 'Expenses'],
    datasets: [
      {
        label: 'Profit Percentage',
        data: [60, 40],
        backgroundColor: ['#000000', '#ffffff'],
        borderWidth: 1,
      },
    ],
  };

  var lineChartData = {
    labels: ['June 21', 'June 22', 'June 23', 'June 24', 'June 25'],
    datasets: [
      {
        label: 'Net Amount',
        data: [2000, 1500, 1800, 1200, 2500],
        fill: false,
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        pointBackgroundColor: '#000000',
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#000000',
        pointHoverBorderColor: '#ffffff',
      },
    ],
  };

  // Options for chart customization
  var chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#000000',
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuad',
    },
    scales: {
      x: {
        type: 'category', // Specify the scale type as 'category' for X-axis
      },
      y: {
        type: 'linear', // Specify the scale type as 'linear' for Y-axis
        grid: {
          borderDash: [5, 5], // Define the pattern for dashed lines [dash length, gap length]
        },
      },
    },
  };

  return (
    <>
      <GlobalStyle />
      <h2 className="dashboard-header">Dashboard</h2>
      <div className="charts-container">       
        <div className="account-info">
          <h3 className="account-title">Account Information</h3>
          {/* SVG Image */}
          <img src={PeepingImage} alt="Peeping" className="peeping-image" />
          <div className="info-item">
            <h4>Account Number:</h4>
            <p>{accountInfo.accountNumber}</p>
          </div>
          <div className="info-item">
            <h4>Account Type:</h4>
            <p>{accountInfo.accountType}</p>
          </div>
          <div className="info-item">
            <h4>Current Balance:</h4>
            <p>${accountInfo.currentBalance}</p>
          </div>
          <div className="info-item">
            <h4>Last Transaction:</h4>
            <p>{accountInfo.lastTransaction}</p>
          </div>
        </div>
        <div className="charts">
          <div className="chart-row">
            <div className="chart-column">
              <div className="chart-container">
                <Bar data={barChartData1} options={chartOptions} />
              </div>
            </div>
            <div className="chart-column">
              <div className="chart-container">
                <Bar data={barChartData2} options={chartOptions} />
              </div>
            </div>
          </div>
          <div className="chart-row">
            <div className="chart-column">
              <div className="chart-container">
                <Doughnut data={doughnutChartData} options={chartOptions} />
              </div>
            </div>
            <div className="chart-column">
              <div className="chart-container">
                <Line data={lineChartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
