import React from 'react';

const App = ({ account }) => {
  return (
    <div>
      <h2>Account Details</h2>
      <p>Account Name: {account.accountName}</p>
      <p>Account Number: {account.accountNumber}</p>
      <p>Balance: ${account.balance}</p>
      <p>Transactions:</p>
      <ul>
        {account.transactions.map((transaction, index) => (
          <li key={index}>{transaction.date}: {transaction.description} - ${transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
