
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from "../Login&Signup/StartPage";
import SignUp from '../Login&Signup/SignUP'; 
import Login from '../Login&Signup/Login'; 
import HomePage from '../Costomer/HomePage';
import About from '../Admin/About'
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homePage"  element = {<HomePage/>} />
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default MainRoutes;
