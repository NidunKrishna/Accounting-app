import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Form from './Form';
import { Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import {Link} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Projects', '2', <DesktopOutlined />),
  getItem('Users', 'sub1', <UserOutlined />, [
    getItem('User List', '3'),
    getItem('Add User', '4'),
    getItem('User Roles', '5'),
  ]),
  getItem('Teams', 'sub2', <TeamOutlined />, [getItem('Team List', '6'), getItem('Create Team', '7')]),
  getItem('Documents', '8', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <div className="demo-logo-vertical" style={{ height: 64, margin: 16, background: '#001529', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography.Text strong style={{ color: '#fff', fontSize: '18px' }}>
            {collapsed ? 'CA' : 'Client Details'}
          </Typography.Text>
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 24px',
            background: colorBgContainer,
            boxShadow: '0 1px 4px rgba(0,21,41,.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Title level={4} style={{ margin: 0 }}>Dashboard</Title>
          <UserOutlined style={{ fontSize: '18px' }} />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <Breadcrumb style={{ marginBottom: '16px' }}>
            <Breadcrumb.Item><Link to='/Home'>Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Form />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            background: colorBgContainer,
            color: 'rgba(0, 0, 0, 0.45)',
            padding: '16px 50px',
          }}
        >
          ©2024 Company App by Nidun. All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;