import React from 'react';
import  Navbar from '../components/Carousel'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Carousel from '../components/Navbar'
import  Home from '../components/home'

const App = () => {
    return (
      <>
      <Navbar />
      <Carousel />
      <Home/>
      </>
  );
};

export default App; 