import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Current from './Current';
import Details from './Details';
import History from './History';

const App = () => {
  const [balance, setBalance] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/balance')
      .then(response => setBalance(response.data))
      .catch(error => console.error('Error fetching balances:', error));

    axios.get('http://localhost:8000/api/transactions')
      .then(response => setTransaction(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div>
      <h1>Account Section</h1>
      <Current balances={balance} />
      <History transactions={transaction} setSelectedAccount={setSelectedAccount} />
      {selectedAccount && <Details account={selectedAccount} />}
    </div>
  );
};

export default App;
