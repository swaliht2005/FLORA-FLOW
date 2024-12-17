import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loginsignupimg from "/src/assets/Loginsignupimg.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    OTP: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName) formErrors.firstName = "First Name is required";
    if (!formData.lastName) formErrors.lastName = "Last Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      formErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone Number must be 10 digits";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.OTP) {
      formErrors.OTP = "OTP is required";
    } else if (!/^\d{6}$/.test(formData.OTP)) {
      formErrors.OTP = "OTP must be a 6-digit number";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
    }
  };

  const handleSendOTP = () => {
    // Add logic for sending OTP here
    console.log("Sending OTP to:", formData.phone);
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src={Loginsignupimg}
        alt="Start Page"
        className="h-full w-full object-cover absolute top-0 left-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Form Container with Glassmorphism */}
      <div className="w-[90%] max-w-md sm:max-w-lg p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg relative z-10 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-slate-200 text-center">SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-3">
            <label htmlFor="firstName" className="block text-sm font-medium text-slate-200">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter your first name"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label htmlFor="lastName" className="block text-sm font-medium text-slate-200">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter your last name"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="block text-sm font-medium text-slate-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-200">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm password"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>

          {/* OTP */}
          <div className="mb-3">
            <label htmlFor="OTP" className="block text-sm font-medium text-slate-200">
              OTP
            </label>
            <input
              type="text"
              id="OTP"
              name="OTP"
              value={formData.OTP}
              placeholder="Enter OTP"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.OTP && <p className="text-red-500 text-xs">{errors.OTP}</p>}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleSendOTP}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none "
            >
              Send OTP
            </button>
           
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none  focus:ring-blue-300"
              type="submit"
            >
             <Link to="/homePage">
              Sign Up
              </Link>
            </button>
         
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-slate-200">
          Go to Login?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
       
        </p>
      </div>
    </div>
  );
};

export default SignUp;
