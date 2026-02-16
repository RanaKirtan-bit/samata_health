import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AppointmentCard from '../../components/AppointmentCard';

const UserAppointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const appointments = {
    upcoming: [
      {
        _id: '1',
        therapistName: 'Dr. Sarah Johnson',
        therapistImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        specialization: 'Clinical Psychology',
        date: 'Feb 20, 2026',
        time: '10:00 AM',
        sessionType: 'online',
        status: 'approved',
        price: 590
      }
    ],
    past: [
      {
        _id: '2',
        therapistName: 'Dr. Michael Chen',
        therapistImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        specialization: 'Anxiety & Stress',
        date: 'Feb 10, 2026',
        time: '2:00 PM',
        sessionType: 'in-person',
        status: 'completed',
        price: 650
      }
    ],
    cancelled: []
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Appointments</h1>

          <div className="mb-6">
            <div className="flex space-x-4 border-b border-gray-200">
              {['upcoming', 'past', 'cancelled'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium capitalize ${
                    activeTab === tab
                      ? 'border-b-2 border-teal-600 text-teal-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab} ({appointments[tab].length})
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {appointments[activeTab].length > 0 ? (
              appointments[activeTab].map((appointment) => (
                <AppointmentCard key={appointment._id} appointment={appointment} userType="user" />
              ))
            ) : (
              <div className="col-span-2 bg-white rounded-xl shadow-md p-12 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No {activeTab} appointments</h3>
                <p className="text-gray-600">You don't have any {activeTab} appointments at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserAppointments;
