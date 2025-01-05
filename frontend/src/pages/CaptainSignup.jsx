import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicalColor, setVehicalColor] = useState('');
  const [vehicalPlate, setVehicalPlate] = useState('');
  const [vehicalCapacity, setVehicalCapacity] = useState('');
  const [vehicalType, setVehicalType] = useState('');
  const { setCaptain } = useContext(CaptainDataContext); 

  const submitForm = async (e) => {
    e.preventDefault(); 
  
    const captaindata = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicalColor,
        plate: vehicalPlate,
        capacity: parseInt(vehicalCapacity),
        vehicleType: vehicalType
      },
    };
  
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captaindata);
    
      if (res.status === 201) {
        const data = res.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      alert("email already exists");
    }
  };
  

  return (
    <div className="p-5 h-screen flex flex-col justify-between items-center">
      <div>
        <img
          className="w-16 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Driver Icon"
        />
        <form onSubmit={submitForm}>
          <h3 className="text-lg w-full font-medium mb-2">What's our Captain's name</h3>
          <div className="flex gap-4 mb-6">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              required
              placeholder="First Name"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              required
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="Password"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex gap-4 mb-6">
            <input
              value={vehicalColor}
              onChange={(e) => setVehicalColor(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              required
              placeholder="Vehicle Color"
            />
            <input
              value={vehicalPlate}
              onChange={(e) => setVehicalPlate(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              required
              placeholder="Vehicle Plate Number"
            />
          </div>
          <div className="flex gap-4 mb-6">
            <input
              value={vehicalCapacity}
              onChange={(e) => setVehicalCapacity(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              required
              placeholder="Seating Capacity"
            />
            <select
              value={vehicalType}
              onChange={(e) => setVehicalType(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg"
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="motorcycle">motorcycle</option>
            </select>
          </div>
          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg"
            type="submit"
          >
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
