import React, { createContext, useContext, useState, useRef} from 'react';
import './Form.css';
import { Button, Form, Input, Layout } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { useAuth } from './AboutAuth';
const { Header } = Layout;

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

const FormComponent = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const submitButtonRef = useRef(null);

  const onFinish = async (values) => {
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/Auth', values);
      if (response.status === 200) {
        console.log('verified');
        login(values);
        navigate('/Navbar');
      } else {
        alert('not verified');
      }
      console.log('Success:', values);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while verifying.');
      console.log(values);
    } finally {
      setIsLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ borderStyle: 'solid', borderTopColor: 'white', borderTopLeftRadius: '15vh' }}>
      {isLoading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <ReactLoading type="spinningBubbles" color="#000" />
        </div>
      )}
      <Header
        style={{
          width: '70vh',
          height: '55vh',
          backgroundColor: 'black',
          borderTopLeftRadius: '5vh',
          backgroundSize: 'cover',
        }}
      >
        <h1
          className="font-playwrite"
          style={{ color: '#FEF3C9', paddingTop: 90, fontSize: '6vh' }}
        >
          Welcome back
        </h1>
        <p
          className="font-playwrite"
          style={{ color: '#FEF3C9', fontSize: '2vh' }}
        >
          To access and monitor your bank's statistics, please log in with your credentials.
        </p>
      </Header>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 900,
          marginBottom: '20vh',
          marginLeft: '10vh',
          marginTop: '4vh',
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="font-playwrite"
            style={{ backgroundColor: 'black', color: '#F7F3E1', width: '25vh' }}
            ref={submitButtonRef}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const App = () => (
  <LoadingProvider>
    <FormComponent />
  </LoadingProvider>
);

export default App;
