import { useNavigate, Outlet } from 'react-router-dom';
import React from 'react';
import Det from './App';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LoadingOutlined,
  AreaChartOutlined,
  MenuUnfoldOutlined as AttendanceIcon
} from '@ant-design/icons';
const { Header, Content, Footer ,Sider } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const App = () => {
  const navigate = useNavigate();
const handleMenuClick = (e) =>{
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
 
}
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
        <Sider style={{height:'100vh',backgroundColor:'black'}}>
        <Menu
        style={{backgroundColor:"black"}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['5']}
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              icon: <AreaChartOutlined />,
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
          ]}
        />
     </Sider>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Det />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
=      </Footer>
    </Layout>
  );
};
export default App;