import React, { useState } from 'react';
import './TaxCalculator.css';

const TaxCalculator = () => {
  const [invoiceValue, setInvoiceValue] = useState(5000);
  const [gstRate, setGstRate] = useState(18);
  const [importValue, setImportValue] = useState(10000);
  const [customsRate, setCustomsRate] = useState(10);
  const [manufactureValue, setManufactureValue] = useState(50000);
  const [exciseRate, setExciseRate] = useState(5);

  var calculateGST = () => {
    var gstAmount = (invoiceValue * gstRate) / 100;
    var totalAmountPayable = invoiceValue + gstAmount;
    return { gstAmount, totalAmountPayable };
  };

  var calculateCustomsDuty = () => {
    var customsDuty = (importValue * customsRate) / 100;
    return customsDuty;
  };

  var calculateExciseDuty = () => {
    var exciseDuty = (manufactureValue * exciseRate) / 100;
    return exciseDuty;
  };

  return (
    <div className="tax-calculator-container">
      <div className="tax-image"></div>
      <div className="tax-calculator">
        <h2>Tax Calculator</h2>
        <div className="calculator-section">
          <h3>GST Calculation</h3>
          <p>Invoice Value: ₹{invoiceValue}</p>
          <p>GST Rate: {gstRate}%</p>
          <p>GST Amount: ₹{calculateGST().gstAmount}</p>
          <p>Total Amount Payable: ₹{calculateGST().totalAmountPayable}</p>
        </div>
        <div className="calculator-section">
          <h3>Customs Duty Calculation</h3>
          <p>Import Value: ₹{importValue}</p>
          <p>Customs Duty Rate: {customsRate}%</p>
          <p>Customs Duty: ₹{calculateCustomsDuty()}</p>
        </div>
        <div className="calculator-section">
          <h3>Central Excise Duty Calculation</h3>
          <p>Manufacture Value: ₹{manufactureValue}</p>
          <p>Excise Duty Rate: {exciseRate}%</p>
          <p>Central Excise Duty: ₹{calculateExciseDuty()}</p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
