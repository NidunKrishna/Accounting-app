import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import '../../Login/Form.css';
import { CardOne, CardTwo, CardThree } from './Card';
import Atmcard from './Atm';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Sep', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Oct', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Nov', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Dec', uv: 1890, pv: 4800, amt: 2181 },
];
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class Example extends PureComponent {
  render() {
    return (
      <div style={{ padding: '20px' ,backgroundColor:'#F7F3E1',height:'80vh',width:'auto'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          <CardOne />
          <CardTwo />
          <CardThree />
          {/* <div style={{width:'3px',height:'27.5vh',backgroundColor:'black'}}> </div> */}
          <div style={{ backgroundColor: '#F7F3E1', width: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', borderRadius: '8px' }}>
            <Atmcard />
          </div>
        </div>
        {/* <div style={{width:'118.9vh',height:'3px',backgroundColor:'black'}}> </div> */}

        <div style={{ width: '100%', marginTop: '20px' }}>
          <ResponsiveContainer width="100%" height={330} style={{ fontWeight:'bold',color:'white',justifyContent:'space-between'}} >
            <AreaChart
              width={600}
              height={400}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#F7F3E1" fill="blue" stackId='1' />
              <Area type="monotone" dataKey="pv" stroke="black" fill="#aqua" stackId='1' />
            </AreaChart>
            {/* <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="90%" data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
        {/* </RadialBarChart> */} 
          </ResponsiveContainer>
          
      
        </div>
      </div>
    );
  }
}
