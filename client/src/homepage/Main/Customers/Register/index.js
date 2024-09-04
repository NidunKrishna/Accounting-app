import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
import { Flex, Spin } from 'antd';


const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};
const App = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  const [loaded , setLoaded ] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoaded(false)
    }, 2000);
  })
  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick, form]);
  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
      axios.post('http://localhost:8000/api/clients',values).then(response => {
        console.log('inserted',response)
      })
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  if(loaded){
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
 <Flex align="center" gap="middle">
    <Spin size="small" style={{color:'black'}} />
    <Spin />
    <Spin size="large" />
  </Flex></div>
    
    );
  }
  return (
    <>
    <Form
      form={form}
      name="dynamic_rule"
      style={{
        maxWidth: 600,
        marginLeft:'60vh',
        marginTop:'5vh'
      }}
    >
      <Form.Item
        {...formItemLayout}
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="company"
        label="Company"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="Quote"
        label="Quote"
        rules={[
          {
            required: checkNick,
            message: 'Please input your nickname',
          },
        ]}
      >
        <Input placeholder="Please input your nickname" />
      </Form.Item>
      <Form.Item
      style={{
        width:'140vh'
      }}
        {...formItemLayout}
        name="Des"
        label="descprition"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Checkbox checked={checkNick} onChange={onCheckboxChange}>
        Description is required
        </Checkbox>
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={onCheck}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};
export default App;