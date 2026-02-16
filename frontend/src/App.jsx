import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Common Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// User Pages
import UserDashboard from './pages/user/UserDashboard';
import SearchTherapists from './pages/user/SearchTherapists';
import TherapistProfile from './pages/user/TherapistProfile';
import BookAppointment from './pages/user/BookAppointment';
import UserAppointments from './pages/user/UserAppointments';

// Therapist Pages
import TherapistDashboard from './pages/therapist/TherapistDashboard';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageTherapists from './pages/admin/ManageTherapists';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* ========== PUBLIC ROUTES ========== */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* ========== USER ROUTES ========== */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/therapists" element={<SearchTherapists />} />
          <Route path="/user/therapist/:id" element={<TherapistProfile />} />
          <Route path="/user/book/:therapistId" element={<BookAppointment />} />
          <Route path="/user/appointments" element={<UserAppointments />} />

          {/* ========== THERAPIST ROUTES ========== */}
          <Route path="/therapist/dashboard" element={<TherapistDashboard />} />

          {/* ========== ADMIN ROUTES ========== */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/therapists" element={<ManageTherapists />} />

          {/* ========== 404 NOT FOUND ========== */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-teal-600 mb-4">404</h1>
                <p className="text-xl text-gray-700 mb-8">Page Not Found</p>
                <a href="/" className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition">
                  Go Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
