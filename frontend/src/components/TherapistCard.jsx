import React from 'react';
import { Link } from 'react-router-dom';

const TherapistCard = ({ therapist }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <img
          src={therapist.image || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'}
          alt={therapist.name}
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-teal-100"
        />

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
          {therapist.name}
        </h3>

        {/* Specialization */}
        <p className="text-gray-600 text-center mb-3">
          {therapist.specialization}
        </p>

        {/* Qualifications */}
        <p className="text-sm text-gray-500 text-center mb-4">
          {therapist.qualifications}
        </p>

        {/* Rating and Experience */}
        <div className="flex items-center justify-center space-x-4 mb-4 w-full">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 font-semibold text-gray-900">{therapist.rating || '4.8'}</span>
          </div>
          <div className="text-sm text-gray-600">
            {therapist.experience} years exp.
          </div>
        </div>

        {/* Session Info */}
        <div className="flex items-center justify-between w-full mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            {therapist.sessionModes?.includes('online') && (
              <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                Online
              </span>
            )}
            {therapist.sessionModes?.includes('in-person') && (
              <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
                In-person
              </span>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between w-full mb-4">
          <span className="text-2xl font-bold text-teal-600">
            ₹{therapist.rate}
          </span>
          <span className="text-sm text-gray-500">per session</span>
        </div>

        {/* Action Button */}
        <Link
          to={`/user/therapist/${therapist._id}`}
          className="w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 text-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default TherapistCard;
