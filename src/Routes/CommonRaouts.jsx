
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Login&Signup/LandingPage';
import SignUp from '../Login&Signup/SignUP'; 
import Login from '../Login&Signup/Login'; 
import HomePage from '../Costomer/HomePage';


function CommonRaouts() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/homePage"  element = {<HomePage/>} />
    </Routes>
  );
}

export default CommonRaouts;
