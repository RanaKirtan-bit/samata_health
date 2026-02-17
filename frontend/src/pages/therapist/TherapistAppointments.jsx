import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AppointmentCard from '../../components/AppointmentCard';

const TherapistAppointments = () => {
  const [filter, setFilter] = useState('upcoming');
  
  const [appointments, setAppointments] = useState([
    {
      _id: '1',
      userName: 'John Doe',
      userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      specialization: 'Client',
      date: 'Feb 25, 2026',
      time: '10:00 AM',
      sessionType: 'online',
      status: 'approved',
      price: 590
    },
    {
      _id: '2',
      userName: 'Emily Smith',
      userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      specialization: 'Client',
      date: 'Feb 26, 2026',
      time: '02:00 PM',
      sessionType: 'in-person',
      status: 'approved',
      price: 650
    },
    {
      _id: '3',
      userName: 'Michael Brown',
      userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      specialization: 'Client',
      date: 'Feb 20, 2026',
      time: '11:00 AM',
      sessionType: 'online',
      status: 'completed',
      price: 590
    },
    {
      _id: '4',
      userName: 'Sarah Wilson',
      userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      specialization: 'Client',
      date: 'Feb 18, 2026',
      time: '04:00 PM',
      sessionType: 'online',
      status: 'completed',
      price: 590
    },
    {
      _id: '5',
      userName: 'David Lee',
      userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      specialization: 'Client',
      date: 'Feb 15, 2026',
      time: '10:00 AM',
      sessionType: 'in-person',
      status: 'completed',
      price: 650
    },
    {
      _id: '6',
      userName: 'Lisa Anderson',
      userImage: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
      specialization: 'Client',
      date: 'Feb 27, 2026',
      time: '03:00 PM',
      sessionType: 'online',
      status: 'approved',
      price: 590
    }
  ]);

  const upcomingAppointments = appointments.filter(a => a.status === 'approved');
  const pastAppointments = appointments.filter(a => a.status === 'completed');
  const rejectedAppointments = appointments.filter(a => a.status === 'rejected');

  const stats = {
    total: appointments.length,
    upcoming: upcomingAppointments.length,
    completed: pastAppointments.length,
    thisMonth: appointments.filter(a => {
      const appointmentDate = new Date(a.date);
      const currentDate = new Date();
      return appointmentDate.getMonth() === currentDate.getMonth() && 
             appointmentDate.getFullYear() === currentDate.getFullYear();
    }).length
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">My Appointments</h1>
            <p className="text-teal-50">Manage your upcoming and past sessions</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Appointments</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Upcoming</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.upcoming}</p>
                </div>
                <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.completed}</p>
                </div>
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.thisMonth}</p>
                </div>
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">View:</span>
              <div className="flex space-x-2">
                {[
                  { key: 'upcoming', label: 'Upcoming', count: upcomingAppointments.length },
                  { key: 'past', label: 'Past', count: pastAppointments.length },
                  { key: 'all', label: 'All', count: appointments.length }
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setFilter(tab.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                      filter === tab.key
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Appointments List */}
          {filter === 'upcoming' && upcomingAppointments.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingAppointments.map(appointment => (
                  <AppointmentCard key={appointment._id} appointment={appointment} userType="therapist" />
                ))}
              </div>
            </div>
          )}

          {filter === 'past' && pastAppointments.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Appointments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastAppointments.map(appointment => (
                  <AppointmentCard key={appointment._id} appointment={appointment} userType="therapist" />
                ))}
              </div>
            </div>
          )}

          {filter === 'all' && appointments.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All Appointments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {appointments.map(appointment => (
                  <AppointmentCard key={appointment._id} appointment={appointment} userType="therapist" />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {(filter === 'upcoming' && upcomingAppointments.length === 0) || 
           (filter === 'past' && pastAppointments.length === 0) || 
           (filter === 'all' && appointments.length === 0) ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Appointments Found</h3>
              <p className="text-gray-600 mb-6">
                {filter === 'upcoming' ? "You don't have any upcoming appointments." : 
                 filter === 'past' ? "You don't have any past appointments." : 
                 "You don't have any appointments yet."}
              </p>
              <Link
                to="/therapist/dashboard"
                className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 font-medium"
              >
                Go to Dashboard
              </Link>
            </div>
          ) : null}

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/therapist/requests"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center group"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition duration-300">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Requests</h3>
              <p className="text-gray-600 text-sm">View appointment requests</p>
            </Link>

            <Link
              to="/therapist/earnings"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Earnings</h3>
              <p className="text-gray-600 text-sm">View your earnings</p>
            </Link>

            <Link
              to="/therapist/settings"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center group"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition duration-300">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Settings</h3>
              <p className="text-gray-600 text-sm">Manage your settings</p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TherapistAppointments;
