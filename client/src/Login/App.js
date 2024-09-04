import React, { useLayoutEffect, useRef } from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import Form from './Form';
import LazyLoad from 'react-lazyload';
import Image from '../Asset/manager.png';

const cardStyle = {
  width: 620,
};

const imgStyle = {
  display: 'block',
  height: '100vh',
  width: 'auto',
  marginTop: '5vh',
  marginLeft: '8vh',
};

const App = () => {
  const imgRef = useRef(null);

 
  useLayoutEffect(() => {
    imgRef.current.style.backgroundImage=`url(${Image})`;
 
   
  }, [imgRef]);

  return (
    <Card
      style={cardStyle}
      bodyStyle={{
        padding: 0,
        overflow: 'hidden',
        height: '100vh',
        width: '200vh',
        backgroundColor: '#F7F3E1',
      }}
    >
      <Flex justify="space-between">
        
          <img
            alt="avatar"
            src={Image}
            style={imgStyle}
            id="img"
            {...imgRef.current}
            ref={imgRef}
          />
    
        <Flex
          vertical
          justify="space-between"
          style={{
            backgroundColor: '#F7F3E1',
            width: '200vh',
          }}
        >
          <Form />
        </Flex>
      </Flex>
    </Card>
  );
};

export default App;
