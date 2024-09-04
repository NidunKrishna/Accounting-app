import React from 'react';
import Account from './Account'
import Customer from './Customers/page'
import Register from './Customers/Register'
import Details from './Customers/Display'
import EmpRegister from './Employee/EmpDetails'
import EmpShow from './Employee/Empshow'
import Landing from './Landing'
import Login from './Login'
import Trends from './Trends'
import Attendance from './Trends/Attendance'
import Follow from './Customers/page/Follow'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoice from './Invoice/InvoiceOverview'
// import Invoice from './Invoice/InvoiceOverview'
import Check from './Login/Check'
import Navbar from './homepage/components/home/index'
import Charts from './dashboard/components'
import TaxCalculator from './taxes/TaxCalculator'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='Customer' element={<Customer/>}/>
      <Route path='Register' element={<Register/>}/>
      <Route path='Details' element={<Details/>}/>
      <Route path='EmpRegister' element={<EmpRegister/>}/>
      <Route path='EmpShow' element={<EmpShow/>}/>
      <Route path='Login' element={<Login/>}/> 
      <Route path='Trends' element={<Trends/>}/>
      <Route path='Attendance' element={<Attendance/>}/>
      <Route path='Follow' element = {<Follow/>}/>
      <Route path='Invoice' element = {<Invoice/>}/>
      <Route path='Check' element = {<Check/>}/>
      <Route path='Invoice' element = {<Invoice/>}/>
      <Route path='Navbar' element = {<Navbar/>}/>
      <Route path='Charts' element = {<Charts/>}/>
      <Route path='TaxCalculator' element = {<TaxCalculator/>}/>

      </Routes>
    </BrowserRouter>
  );
};
export default App;