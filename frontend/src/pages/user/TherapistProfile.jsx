import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TherapistProfile = () => {
  const { id } = useParams();
  
  const therapist = {
    _id: id,
    name: 'Dr. Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    specialization: 'Clinical Psychology',
    qualifications: 'PhD in Clinical Psychology, Licensed Therapist',
    experience: 8,
    rating: 4.9,
    totalReviews: 156,
    rate: 590,
    sessionModes: ['online', 'in-person'],
    languages: ['English', 'Hindi', 'Gujarati'],
    address: '123 Wellness Street, Ahmedabad, Gujarat',
    bio: 'Dr. Sarah Johnson is a dedicated clinical psychologist with over 8 years of experience helping individuals overcome anxiety, depression, and stress-related issues. She uses evidence-based therapeutic approaches including CBT and mindfulness techniques.',
    education: [
      'PhD in Clinical Psychology - Stanford University (2015)',
      'Masters in Psychology - University of California (2012)',
      'Bachelor of Science - UCLA (2010)'
    ],
    specialties: [
      'Anxiety Disorders',
      'Depression',
      'Stress Management',
      'Relationship Issues',
      'Work-Life Balance'
    ],
    availability: {
      monday: ['9:00 AM', '10:00 AM', '2:00 PM', '4:00 PM'],
      tuesday: ['10:00 AM', '11:00 AM', '3:00 PM'],
      wednesday: ['9:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'],
      thursday: ['10:00 AM', '2:00 PM', '4:00 PM'],
      friday: ['9:00 AM', '11:00 AM', '2:00 PM']
    }
  };

  const [selectedDay, setSelectedDay] = useState('monday');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <Link to="/user/therapists" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Search
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile */}
            <div className="lg:col-span-2">
              {/* Profile Header */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-6">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-teal-100"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{therapist.name}</h1>
                    <p className="text-xl text-teal-600 mb-3">{therapist.specialization}</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold">{therapist.rating}</span>
                        <span className="text-gray-600 ml-1">({therapist.totalReviews} reviews)</span>
                      </div>
                      <div className="text-gray-600">
                        <span className="font-semibold">{therapist.experience}</span> years experience
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {therapist.sessionModes.includes('online') && (
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                          📹 Online
                        </span>
                      )}
                      {therapist.sessionModes.includes('in-person') && (
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                          🏢 In-person
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">{therapist.bio}</p>
              </div>

              {/* Education */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Education & Qualifications</h2>
                <div className="space-y-3">
                  {therapist.education.map((edu, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      <span className="text-gray-700">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {therapist.specialties.map((specialty, index) => (
                    <span key={index} className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-8">
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <div className="text-4xl font-bold text-teal-600 mb-2">₹{therapist.rate}</div>
                  <div className="text-gray-600">per session</div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {therapist.languages.map((lang, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/user/book/${therapist._id}`}
                  className="block w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 font-semibold text-center"
                >
                  Book Appointment
                </Link>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-4">Available Slots</h3>
                <div className="mb-4">
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {therapist.availability[selectedDay]?.map((time, index) => (
                    <div key={index} className="px-3 py-2 bg-teal-50 text-teal-700 rounded-lg text-center text-sm font-medium">
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TherapistProfile;
