import React from 'react';
import { useAuth  } from './AboutAuth'; 

const Dashboard = () => {
  const { user , logout} = useAuth();

if(!user){
  return <h1>Logged out</h1>

}
  return (
    <div>
      <h1>Welcome, {user ? user.username : 'Guest'}</h1>
      <button onClick={logout}>click</button>
    </div>
    
  );
};

export default Dashboard;
