import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Show from './Show'
import Follow from './Follow'
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
  const [collapsed, setCollapsed] = useState(false);
  const [selectedkeys ,setSelectedKeys] = useState('');
  const {
    token: {borderRadiusLG },
  } = theme.useToken();
 const rendercontent = () =>{
  switch (selectedkeys){
    case '1':
      return <Show />
    case '2':
      return <Follow />
      default:
        return <Show />;
  }

 }

  return (
    <Layout style={{height:'100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:'black'}}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          style={{backgroundColor:'black',fontFamily:"Playwrite NG Modern"}}
          defaultSelectedKeys={['1']}
          onClick={(e)=>setSelectedKeys(e.key)}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Current Clients',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Follow ups',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Pending Requests',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background:'#f7f3e1',
            height:'13vh'
          }}
        >
            <div  style={{display:'flex',justifyContent:'space-between'}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              
            }}
          />
            <h1 style={{marginRight:'90vh',paddingBottom:'2vh',fontFamily:"Playwrite NG Modern"}}>Client Page</h1>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            borderRadius: borderRadiusLG,
            
          }}
        >
          
       {rendercontent()}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;