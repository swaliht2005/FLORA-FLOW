
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from "../Login&Signup/StartPage";
import SignUp from '../Login&Signup/SignUP'; 
import Login from '../Login&Signup/Login'; 

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default MainRoutes;
