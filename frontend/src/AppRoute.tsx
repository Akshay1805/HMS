import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Applink from "./Applink";
import Doctor_dash from "../src/js/Pages/doctor-dashboard/doctor-dashboard";
import DoctorLogin from "../src/js/Pages/Login/DoctorLogin/DoctorLogin";
import PatientLogin from "../src/js/Pages/Login/PatientLogin/PatientLogin";
import Home from './js/Pages/Home/Home';
import Patient_dash from './js/Pages/patient-dashboard/patient-dashboard';
import Doc_setting from './js/Pages/Doctor-settiming/doctor-settiming';
//import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  
  
  // Your authentication logic should set isAuthenticated to true upon successful login

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Applink />} />
        <Route path='/doctor_login' element={<DoctorLogin />} />
        <Route path='/patient_login' element={<PatientLogin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/patient_dashboard' element={<Patient_dash />} />
        <Route path='/doctor_set_timing' element={<Doc_setting />} />        <Route
          path='/doctor_dashboard'
          element={<Doctor_dash/>}
          
        />
      </Routes>
    </Router>
  );
}

export default App;
