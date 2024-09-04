import React from 'react';

const History = ({ transactions, setSelectedAccount }) => {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} onClick={() => setSelectedAccount(transaction.account)}>
            {transaction.date}: {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
