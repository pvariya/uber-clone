import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import CaptainSignUp from './pages/CaptainSignup';
import Strat from './pages/Strat';
import Home from './pages/Home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Strat />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path="/user/logout" element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        } />



      </Routes>
    </div>
  );
};

export default App;
