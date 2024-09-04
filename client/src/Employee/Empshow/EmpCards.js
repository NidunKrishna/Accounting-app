import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const App = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    onFetch();
  }, []);

  const onFetch = () => {
    axios.get('http://localhost:8000/api/getemp')
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee details', error);
        alert('Cannot fetch employee details');
      });
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      justifyContent: 'center',
      marginLeft:'90px'
    }}>
      {details.map((detail, index) => (
        <Card
          key={index}
          style={{ width: '300px', height: '350px' }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title={detail.name}
            description={detail.email}
          />
        </Card>
      ))}
    </div>
  );
};

export default App;
