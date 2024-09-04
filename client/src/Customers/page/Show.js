import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

const App = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/GetCustomer')
            .then(response => {
                setDetails(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching the customer details:', error);
            });
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Description',
            dataIndex: 'Des',
            key: 'Des',
        },
        {
            title: 'Quote',
            dataIndex: 'Quote',
            key: 'Quote',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    return (
        <div>
            <h1 style={{fontFamily:"Playwrite NG Modern"}}>Customer Details</h1>
            <Table dataSource={details} columns={columns} rowKey="id"  />
            
        </div>
    );
};

export default App;
