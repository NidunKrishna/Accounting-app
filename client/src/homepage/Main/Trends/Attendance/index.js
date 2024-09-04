import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LoadingOutlined,
  MenuUnfoldOutlined as AttendanceIcon
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import App from './App'
import Radar from './Radar'
const { Sider, Content } = Layout;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const colorBgContainer = '#fff'; 
  const borderRadiusLG = '8px'; 

  const handleMenuClick = (e) => {
    if (e.key === '1') {
      navigate('/Trends');
    } else if (e.key === '2') {
      navigate('/Attendance');
    }
    else if (e.key === '3') {
      navigate('/EmpRegister');
    }
    else if (e.key === '4') {
      navigate('/Customer');
    }
    else if (e.key === '5') {
      navigate('/Details');
    }
    else if (e.key === '6') {
      navigate('/EmpShow');
    }
    else if(e.key === '7'){
      navigate('/Invoice');
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: 'black' }}>
        <div className="demo-logo-vertical" />
        <Menu
        style={{backgroundColor:'black'}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              icon: <LoadingOutlined />,
              label: 'Trends',
            },
            {
              key: '2',
              icon: <AttendanceIcon />,
              label: 'Attendance',
            }, {
              key: '3',
              icon: <AttendanceIcon />,
              label: 'Register',
            }, {
              key: '4',
              icon: <AttendanceIcon />,
              label: 'ClientList',
            },{
              key: '5',
              icon: <AttendanceIcon />,
              label: 'Details',
            },
            {
              key: '6',
              icon: <AttendanceIcon />,
              label: 'Emp Details',
            },  {
              key: '7',
              icon: <AttendanceIcon />,
              label: 'Invoice',
            },
          ]}
        />
      </Sider>
      <Layout style={{ height: '100vh' }}>
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
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            display:'flex',
            justifyContent:'space-between'
          }}
        >
           <App />
           <Radar />
          {/* <Outlet /> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
