import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Checkbox, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';

const { TextArea } = Input;

const ClientForm = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [isDescriptionRequired, setIsDescriptionRequired] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:8000/api/clients', values);
      console.log('Data successfully submitted:', response.data);
    } catch (error) {
      console.log('Form submission failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0f2f5', padding: '20px' }}>
      <Card style={{ width: '100%', maxWidth: '600px' }} title="Client Information" extra="Please fill out the form below with your details.">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder="Your full name" />
          </Form.Item>

          <Form.Item
            name="company"
            label="Company"
            rules={[{ required: true, message: 'Please input your company name!' }]}
          >
            <Input placeholder="Your company name" />
          </Form.Item>

          <Form.Item
            name="quote"
            label="Quote"
          >
            <Input placeholder="A brief quote" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: isDescriptionRequired, message: 'Please input the description!' }]}
          >
            <TextArea rows={4} placeholder="Describe your project or requirements" />
          </Form.Item>

          <Form.Item>
            <Checkbox
              checked={isDescriptionRequired}
              onChange={(e) => setIsDescriptionRequired(e.target.checked)}
            >
              Description is required
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
              Submit
            </Button>
            <Button htmlType="button">
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ClientForm;