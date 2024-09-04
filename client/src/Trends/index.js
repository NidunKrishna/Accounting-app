import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LoadingOutlined,
  MenuUnfoldOutlined as AttendanceIcon,
  FundOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import Graph from './graph'; 
import '../Login/Form.css'

const { Sider, Content ,Header} = Layout;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const colorBgContainer = '#fff'; 
  const borderRadiusLG = 'px'; 

  const handleMenuClick = (e) => {
    if (e.key === '1') {
      navigate('/');
    } else if (e.key === '2') {
      navigate('/Attendance');
    }
  };

  return (
    <Layout style={{backgroundColor:'#F7F3E1',height:'100vh',borderColor:'black'}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: 'black' }}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              icon: <FundOutlined />,
              label: 'Trends',
            },
            {
              key: '2',
              icon: <AttendanceIcon />,
              label: 'Attendance',
            },
          ]}
        />
      </Sider>
      <Layout style={{ height: '100vh', backgroundColor:'#F7F3E1' }}>
          <Header className='font-playwrite' style={{backgroundColor:'black',fontSize:'25px',borderStyle:'solid',borderRadius:'7px',height:'13vh',color:"#F7F3E1",marginRight:'1vh'}}>
          <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 84,
            color:'#F7F3E1'
          }}
        />
      <>DashBoard</> 
          </Header>
      
        <Content
          style={{
            margin: '18px 10px',
            paddingTop: 13,
            paddingLeft: 13,
            paddingRight: 13,
            maxHeight: '120vh',
            background: 'black',
            borderRadius: borderRadiusLG,
            backgroundColor:'black',

          }}
        >
            <Graph />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
