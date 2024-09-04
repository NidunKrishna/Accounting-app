import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Table} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme } from 'antd';
  const { Header, Sider, Content } = Layout;
const App = () => {
    const [details,setDetails] = useState('')
     useEffect(()=>{
        axios.get('http://localhost:8000/api/GetPending').then( response => {
            setDetails(response.data);
        })

     },[])
      
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
<Layout style={{height:'100vh'}}>
    <h1>Pending List</h1>
        <Content style={{height:'100vh',paddingTop:'10vh'}}>
            <Table style={{fontSize:'70px'}}dataSource={details} columns={columns}  />;
            </Content>
            </Layout>
        
    );
};

export default App;