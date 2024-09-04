import React, { useEffect, useState } from 'react';
import Bg from '../../Asset/bg.jpg';
import App from './App'
import Linear from '../../Asset/linear.png';
import { Flex, Spin } from 'antd';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading,setLoading] = useState(true);
  const {
    token: {colorBgContainer, borderRadiusLG }
  } = theme.useToken();

useEffect (()=>{
  setTimeout(() => {
    setLoading(false);
  }, 2000);
})
if(loading){
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <Flex align="center" gap="middle">
  <Spin size="small" />
  <Spin />
  <Spin size="large" />
</Flex>
</div>
  )
}

  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Layout style={{marginLeft:'5vh',height:'89vh',borderBottomLeftRadius:'9vh'}}>
        <Sider style={{backgroundColor:'black',borderBottomLeftRadius:'8vh'}}>
            <img src={Linear} style={{height:'20vh'}} />
            <h1 className='font-playwrite' style={{color:'#F7F3E1',paddingLeft:'70px'}}> 
            Want to become a cool employee? Register your details here and join the fun team!
            </h1>

          <div className="demo-logo-vertical" />
        </Sider>
        <Layout>
          <Content
            style={{
              maxHeight: 5000, 
              background:colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <App />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Index;
