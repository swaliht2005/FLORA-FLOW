import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detailse from '../Costomer/Detailse'; 
import Chating from '../Costomer/Chating';
import Profile from '../Costomer/Profile';
import Favorite from '../Costomer/Favorite';
import Notification from '../Costomer/Notification';

function CustomerRoutes() {
  return (
    <Routes>
     <Route path="/details" element={<Detailse />} />
      <Route path="/chatting" element={<Chating />} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
      <Route path='/notification'element={<Notification/>}/>
    </Routes>
  );
}

export default CustomerRoutes;
