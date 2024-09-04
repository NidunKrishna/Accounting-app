import React from 'react';
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import Employee from '../../Asset/employee.png'
import Job from '../../Asset/job.png'
import Profit from '../../Asset/accruals.png'
import Gain from '../../Asset/profit.png'
import Wallet from '../../Asset/wallet.png'
import '../../Login/Form.css'
export function CardOne() {
  return (
    <Card style={{
      height:'20vh',
      width:'35vh',
      borderStyle:'solid',
      boxShadow:'2px 3px #dedcdc',
      backgroundColor:"#F7F3E1",
      borderWidth:'2px',
      borderColor:"black"

    }}
    >
      <Meta
      className='font-playwrite'
        avatar={<Avatar src={Employee} />}
        title="Employee count"
      
      />
      <h1 style={{marginLeft:'7vh',fontWeight:'100'}}
      >{<Avatar src = {Job} style={{height:'5vh',width:'8vh'}}/>}800</h1>
          </Card>
  );
}

export function CardTwo() {
  return (
    <Card style={{
      height:'20vh',
        width:'35vh',
        boxShadow:'2px 1px #dedcdc',
        backgroundColor:"#F7F3E1",
        borderStyle:'solid',
        borderColor:"black",
        borderWidth:'2px' ,
        borderColor:"black"


    }}
    >
      <Meta
        avatar={<Avatar src = {Profit}/>}
        title="Profit"
        className='font-playwrite'
      />
      <h1 style={{marginLeft:'7vh',fontWeight:'100'}}
      >{<Avatar src = {Gain} style={{height:'5vh'}}/>}    4000$</h1>
          
    </Card>
  );
}

export function CardThree() {
  return (
    <Card style={{
      height:'20vh',
        width:'35vh',
        boxShadow:'2px 1px #dedcdc',
        backgroundColor:"#F7F3E1",
        borderWidth:'2px',
        borderColor:"black"



    }}
    >
       <Meta
        avatar={<Avatar src = {Wallet}/>}
        title="Account balance"
        className='font-playwrite'
      />
    </Card>
  );
}
