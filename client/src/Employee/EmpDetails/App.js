import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Select, Layout } from 'antd';
import Women from '../../Asset/Women.png';
import Bg from '../../Asset/bg.jpg';
import '../../Login/Form.css'
const { Sider, Content } = Layout;
const { TextArea } = Input;

const EmployeeDetailsForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);

  const onSubmit = (values) => {
    axios.post('http://localhost:8000/api/empdetails', values)
      .then(response => {
        console.log('response', response.data);
        alert('Data sent successfully');
      })
      .catch(error => {
        console.error("error sending details", error);
        alert("Cannot send data");
      });
  };

  return (
    <Layout style={{ height: '89vh' , backgroundColor:'#F7F3E1'}}>
      <Sider style={{ background: 'black', height: '89vh' }} width={200}>
        <img src={Women} style={{ height: '89vh' }} />
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <h1 className='font-playwrite' style={{color:'black',paddingLeft:'70px'}}> Employee Register-----------------------------</h1>
        <Form
          layout="vertical"
          disabled={componentDisabled}
          style={{
            maxWidth: 850,
            margin: '0 auto',
            marginTop: '9vh'
          }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input the employee name!' }]}
          >
            <Input placeholder="Name" style={{ borderColor: 'black' }} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input the employee email!', type: 'email' }]}
          >
            <Input placeholder="Email" style={{ borderColor: 'black' }} />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input the employee phone number!' }]}
          >
            <Input placeholder="Phone" style={{ borderColor: 'black' }} />
          </Form.Item>
          <Form.Item
            name="position"
            rules={[{ required: true, message: 'Please select the employee position!' }]}
          >
            <Select placeholder="Position" style={{ borderColor: 'black' }}>
              <Select.Option value="developer">Developer</Select.Option>
              <Select.Option value="designer">Designer</Select.Option>
              <Select.Option value="manager">Manager</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="department"
            rules={[{ required: true, message: 'Please input the employee department!' }]}
          >
            <Input placeholder="Department" style={{ borderColor: 'black' }} />
          </Form.Item>
          <Form.Item
            name="joiningDate"
            rules={[{ required: true, message: 'Please select the joining date!' }]}
          >
            <Input type='date' placeholder="Joining Date" style={{ borderColor: 'black' }} />
          </Form.Item>
          <Form.Item
            name="address"
          >
            <TextArea placeholder="Address" rows={4} style={{ borderColor: 'black' }} />
          </Form.Item>
          <Form.Item>
            <Button  htmlType="submit" style={{backgroundColor:'black',color:'#F7F3E1',width:'15vh'}} className='font-playwrite'>Submit</Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default EmployeeDetailsForm;
