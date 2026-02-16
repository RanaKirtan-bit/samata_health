import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StatsCard from '../../components/StatsCard';

const TherapistDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Therapist Dashboard</h1>
            <p className="text-teal-50">Manage your appointments and schedule</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatsCard title="Pending Requests" value="3" color="yellow" />
            <StatsCard title="Today's Sessions" value="5" color="teal" />
            <StatsCard title="This Month" value="42" color="cyan" />
            <StatsCard title="Total Earnings" value="₹24,800" color="green" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default TherapistDashboard;
