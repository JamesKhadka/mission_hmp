import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import { Routes, Route } from 'react-router-dom'
import Hospital from '../pages/Hospital';
import ForgotPassword from '../pages/ForgotPassword';
import HospitalDetails from '../pages/HospitalDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProctedRoute from './ProctedRoute';




const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/home" element={<Home />} />

      <Route path="/hospital" element={<Hospital />} />

      <Route path="/hospital/:id" element={<HospitalDetails />} />

      <Route path="/doctors" element={<Doctors />} />

      <Route path="/doctors/:id" element={<DoctorDetails />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Signup />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/services" element={<Services />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/users/profile/me" element={<MyAccount />} />

      <Route path="/doctors/profile/me" element={<ProctedRoute allowedRoles={['doctor']}><Dashboard /></ProctedRoute>} />

    </Routes >
  )
}

export default Routers
