import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';

const ClientListPage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = () => {
    axios.get('http://localhost:8000/api/client')
      .then(response => {
        setClients(response.data);
      })
      .catch(err => {
        console.error('Error fetching clients:', err);
      });
  };

  const handleActivate = (name) => {
    updateStatus(name, true); 
  };

  const handleDeactivate = (name) => {
    updateStatus(name, false); 
  };

  const updateStatus = (name, status) => {
    axios.post('http://localhost:8000/api/alter', { name, status })
      .then(response => {
        console.log('Status updated successfully');
        fetchClients();
      })
      .catch(err => {
        console.error('Error updating status:', err);
      });
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Company', dataIndex: 'company', key: 'company' },
    { title: 'Description', dataIndex: 'Des', key: 'Des' },
    { title: 'Quote', dataIndex: 'Quote', key: 'Quote' },
    {
      title: 'Status',
      key: 'Status',
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={() => handleActivate(record.name)}>
            Completed
          </Button>
          <Button style={{ marginLeft: 10 }} onClick={() => handleDeactivate(record.name)}>
            Not Completed
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', marginTop: '5vh' }}>
      <Table dataSource={clients} columns={columns} rowKey="name" />
    </div>
  );
};

export default ClientListPage;
