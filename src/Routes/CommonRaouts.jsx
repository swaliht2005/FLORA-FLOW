
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Login&Signup/LandingPage';
import SignUp from '../Login&Signup/SignUP'; 
import Login from '../Login&Signup/Login'; 
import HomePage from '../Costomer/HomePage';
import About from '../Admin/About'
import Detailse from '../Costomer/Detailse';
import Chating from '../Costomer/Chating';
import Profile from '../Costomer/Profile';
import Favorite from '../Costomer/Favorite';
function CommonRaouts() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/homePage"  element = {<HomePage/>} />
      <Route path="/about" element={<About/>}/>
      <Route path='/detailse' element={<Detailse/>} />
      <Route path='/chating' element={<Chating/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
    </Routes>
  );
}

export default CommonRaouts;
