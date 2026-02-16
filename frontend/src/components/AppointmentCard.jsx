import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCard = ({ appointment, userType = 'user' }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'approved':
        return 'bg-green-100 text-green-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return '⏳';
      case 'approved':
        return '✅';
      case 'completed':
        return '🎉';
      case 'rejected':
        return '❌';
      default:
        return '📅';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={appointment.therapistImage || appointment.userImage || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'}
            alt={appointment.therapistName || appointment.userName}
            className="w-16 h-16 rounded-full object-cover border-2 border-teal-200"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {userType === 'user' ? appointment.therapistName : appointment.userName}
            </h3>
            <p className="text-sm text-gray-600">
              {userType === 'user' ? appointment.specialization : 'Client'}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
          {getStatusIcon(appointment.status)} {appointment.status}
        </span>
      </div>

      <div className="space-y-3">
        {/* Date and Time */}
        <div className="flex items-center text-gray-700">
          <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">{appointment.date}</span>
          <span className="mx-2">•</span>
          <span>{appointment.time}</span>
        </div>

        {/* Session Type */}
        <div className="flex items-center text-gray-700">
          <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="capitalize">{appointment.sessionType}</span>
        </div>

        {/* Price */}
        <div className="flex items-center text-gray-700">
          <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold text-teal-700">₹{appointment.price}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-3">
        <Link
          to={`/${userType}/appointment/${appointment._id}`}
          className="flex-1 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300 text-center font-medium"
        >
          View Details
        </Link>
        {appointment.status === 'approved' && appointment.sessionType === 'online' && (
          <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 font-medium">
            Join Session
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
