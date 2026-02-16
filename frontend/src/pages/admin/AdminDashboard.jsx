import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StatsCard from '../../components/StatsCard';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-teal-50">Manage platform users and therapists</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatsCard title="Total Users" value="1,234" color="teal" />
            <StatsCard title="Total Therapists" value="156" color="cyan" />
            <StatsCard title="Pending Approval" value="8" color="yellow" />
            <StatsCard title="Total Appointments" value="3,456" color="green" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/admin/users" className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Manage Users</h3>
              <p className="text-gray-600 text-sm">View and manage users</p>
            </Link>
            <Link to="/admin/therapists" className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Manage Therapists</h3>
              <p className="text-gray-600 text-sm">Approve therapists</p>
            </Link>
            <Link to="/admin/appointments" className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">All Appointments</h3>
              <p className="text-gray-600 text-sm">Monitor appointments</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AdminDashboard;
