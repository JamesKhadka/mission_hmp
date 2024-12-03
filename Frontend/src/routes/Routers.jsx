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
import CheckoutSuccess from '../pages/CheckoutSuccess';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminLayout from '../pages/Admin/AdminLayout';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AdminDoctor from '../pages/Admin/AdminDoctor';
import AdminAppointment from '../pages/Admin/AdminAppointment';
import AdminSchedule from '../pages/Admin/AdminSchedule';
import AdminPatients from '../pages/Admin/AdminPatients';


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

      <Route path="/checkout-success" element={<CheckoutSuccess />} />

      <Route path="/users/profile/me" element={<ProctedRoute allowedRoles={['patient']}><MyAccount /></ProctedRoute>} />

      <Route path="/doctors/profile/me" element={<ProctedRoute allowedRoles={['doctor']}><Dashboard /></ProctedRoute>} />

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/admin" element={<AdminLayout />} />




    </Routes>
  )
}

export default Routers
