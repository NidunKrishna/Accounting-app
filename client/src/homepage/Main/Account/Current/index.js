
import React from 'react';

const App = ({ balances }) => {
  return (
    <div>
      <h2>Current Balances</h2>
      <ul>
        {balances.map((balance, index) => (
          <li key={index}>{balance.accountName}: ${balance.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
