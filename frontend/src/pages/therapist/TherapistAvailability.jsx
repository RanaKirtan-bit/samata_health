import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TherapistAvailability = () => {
  const [availability, setAvailability] = useState({
    monday: { enabled: true, slots: ['09:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '02:00 PM - 03:00 PM', '04:00 PM - 05:00 PM'] },
    tuesday: { enabled: true, slots: ['09:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '02:00 PM - 03:00 PM', '04:00 PM - 05:00 PM'] },
    wednesday: { enabled: true, slots: ['09:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '02:00 PM - 03:00 PM'] },
    thursday: { enabled: true, slots: ['09:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '02:00 PM - 03:00 PM', '04:00 PM - 05:00 PM'] },
    friday: { enabled: true, slots: ['09:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '02:00 PM - 03:00 PM'] },
    saturday: { enabled: false, slots: [] },
    sunday: { enabled: false, slots: [] }
  });

  const [sessionDuration, setSessionDuration] = useState(60);
  const [breakTime, setBreakTime] = useState({ start: '01:00 PM', end: '02:00 PM' });

  const timeSlots = [
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
    '08:00 PM - 09:00 PM'
  ];

  const toggleDay = (day) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled
      }
    }));
  };

  const addSlot = (day, slot) => {
    if (!availability[day].slots.includes(slot)) {
      setAvailability(prev => ({
        ...prev,
        [day]: {
          ...prev[day],
          slots: [...prev[day].slots, slot].sort()
        }
      }));
    }
  };

  const removeSlot = (day, slot) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.filter(s => s !== slot)
      }
    }));
  };

  const handleSave = () => {
    // Handle save - API call would go here
    alert('Availability saved successfully!');
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Set Availability</h1>
            <p className="text-teal-50">Manage your working days and time slots</p>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Session Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Duration</label>
                <select
                  value={sessionDuration}
                  onChange={(e) => setSessionDuration(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>60 minutes</option>
                  <option value={90}>90 minutes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Break Time</label>
                <div className="flex space-x-4">
                  <select
                    value={breakTime.start}
                    onChange={(e) => setBreakTime({ ...breakTime, start: e.target.value })}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot.split(' - ')[0]}>{slot.split(' - ')[0]}</option>
                    ))}
                  </select>
                  <span className="flex items-center text-gray-500">to</span>
                  <select
                    value={breakTime.end}
                    onChange={(e) => setBreakTime({ ...breakTime, end: e.target.value })}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot.split(' - ')[1]}>{slot.split(' - ')[1]}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Schedule</h2>
            
            <div className="space-y-4">
              {days.map(day => (
                <div key={day} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={availability[day].enabled}
                          onChange={() => toggleDay(day)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                      </label>
                      <span className="text-lg font-medium text-gray-900 capitalize">{day}</span>
                    </div>
                    <span className={`text-sm ${availability[day].enabled ? 'text-green-600' : 'text-gray-500'}`}>
                      {availability[day].enabled ? `${availability[day].slots.length} slots` : 'Unavailable'}
                    </span>
                  </div>

                  {availability[day].enabled && (
                    <div>
                      {/* Current Slots */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {availability[day].slots.map((slot, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-700"
                          >
                            {slot}
                            <button
                              onClick={() => removeSlot(day, slot)}
                              className="ml-2 text-teal-500 hover:text-teal-700"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </span>
                        ))}
                      </div>

                      {/* Add New Slot */}
                      <div className="flex flex-wrap gap-2">
                        <select
                          onChange={(e) => {
                            if (e.target.value) {
                              addSlot(day, e.target.value);
                              e.target.value = '';
                            }
                          }}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                        >
                          <option value="">+ Add Time Slot</option>
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end space-x-4">
            <Link
              to="/therapist/dashboard"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300 font-medium"
            >
              Cancel
            </Link>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 font-medium"
            >
              Save Availability
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/therapist/profile"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center group"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition duration-300">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Profile</h3>
              <p className="text-gray-600 text-sm">Update your details</p>
            </Link>

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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TherapistAvailability;
