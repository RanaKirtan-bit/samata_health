import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TherapistRequests = () => {
  const [requests, setRequests] = useState([
    {
      _id: '1',
      userName: 'John Doe',
      userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      email: 'john.doe@email.com',
      phone: '+91 98765 43210',
      specialization: 'Anxiety & Stress',
      date: 'Feb 25, 2026',
      time: '10:00 AM',
      sessionType: 'online',
      notes: 'I have been feeling anxious lately and would like to discuss coping strategies.',
      price: 590,
      status: 'pending',
      requestedAt: 'Feb 20, 2026'
    },
    {
      _id: '2',
      userName: 'Emily Smith',
      userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      email: 'emily.smith@email.com',
      phone: '+91 87654 32109',
      specialization: 'Depression',
      date: 'Feb 26, 2026',
      time: '02:00 PM',
      sessionType: 'in-person',
      notes: 'Looking for someone to talk to about my feelings.',
      price: 650,
      status: 'pending',
      requestedAt: 'Feb 19, 2026'
    },
    {
      _id: '3',
      userName: 'Michael Brown',
      userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      email: 'michael.b@email.com',
      phone: '+91 76543 21098',
      specialization: 'Relationship Issues',
      date: 'Feb 27, 2026',
      time: '04:00 PM',
      sessionType: 'online',
      notes: 'Need help with relationship communication.',
      price: 590,
      status: 'pending',
      requestedAt: 'Feb 18, 2026'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleApprove = (id) => {
    setRequests(prev => prev.map(req => 
      req._id === id ? { ...req, status: 'approved' } : req
    ));
    alert('Appointment approved! The client has been notified.');
  };

  const handleReject = (id) => {
    setRequests(prev => prev.map(req => 
      req._id === id ? { ...req, status: 'rejected' } : req
    ));
    alert('Appointment rejected.');
  };

  const filteredRequests = filter === 'all' 
    ? requests 
    : requests.filter(r => r.status === filter);

  const pendingCount = requests.filter(r => r.status === 'pending').length;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Appointment Requests</h1>
                <p className="text-teal-50">Review and manage incoming appointment requests</p>
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-4">
                <p className="text-3xl font-bold">{pendingCount}</p>
                <p className="text-teal-50">Pending</p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Filter:</span>
              <div className="flex space-x-2">
                {['all', 'pending', 'approved', 'rejected'].map(status => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                      filter === status
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                    {status === 'pending' && ` (${pendingCount})`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Requests List */}
          {filteredRequests.length > 0 ? (
            <div className="space-y-4">
              {filteredRequests.map(request => (
                <div key={request._id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
                  <div className="flex items-start justify-between">
                    {/* User Info */}
                    <div className="flex items-start space-x-4">
                      <img
                        src={request.userImage}
                        alt={request.userName}
                        className="w-16 h-16 rounded-full object-cover border-2 border-teal-200"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{request.userName}</h3>
                        <p className="text-sm text-gray-600">{request.email}</p>
                        <p className="text-sm text-gray-600">{request.phone}</p>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      request.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      request.status === 'approved' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>

                  {/* Appointment Details */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{request.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{request.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="capitalize">{request.sessionType}</span>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600"><span className="font-medium">Client Notes:</span> {request.notes}</p>
                  </div>

                  {/* Price and Date */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-semibold text-teal-700">₹{request.price}</span>
                      <span className="text-sm text-gray-500">Requested: {request.requestedAt}</span>
                    </div>

                    {/* Action Buttons */}
                    {request.status === 'pending' && (
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleReject(request._id)}
                          className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition duration-300 font-medium"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleApprove(request._id)}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 font-medium"
                        >
                          Approve
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Requests Found</h3>
              <p className="text-gray-600">There are no appointment requests matching your filter.</p>
            </div>
          )}

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/therapist/dashboard"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center group"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition duration-300">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dashboard</h3>
              <p className="text-gray-600 text-sm">Go to dashboard</p>
            </Link>

            <Link
              to="/therapist/appointments"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center group"
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition duration-300">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Appointments</h3>
              <p className="text-gray-600 text-sm">View all appointments</p>
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TherapistRequests;
