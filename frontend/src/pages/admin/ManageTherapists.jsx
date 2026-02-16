import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ManageTherapists = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const therapists = {
    pending: [{_id: '1', name: 'Dr. Sarah Johnson', specialization: 'Clinical Psychology', email: 'sarah@example.com', experience: 8}],
    approved: [{_id: '2', name: 'Dr. Michael Chen', specialization: 'Anxiety & Stress', email: 'michael@example.com', experience: 5}],
    rejected: []
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Therapists</h1>
          <div className="mb-6">
            <div className="flex space-x-4 border-b">
              {['pending', 'approved', 'rejected'].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 font-medium capitalize ${activeTab === tab ? 'border-b-2 border-teal-600 text-teal-600' : 'text-gray-600'}`}>
                  {tab} ({therapists[tab].length})
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {therapists[activeTab].map((therapist) => (
              <div key={therapist._id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold">{therapist.name}</h3>
                    <p className="text-gray-600">{therapist.specialization}</p>
                    <p className="text-sm text-gray-500">{therapist.email} • {therapist.experience} years exp.</p>
                  </div>
                  {activeTab === 'pending' && (
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Approve</button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Reject</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ManageTherapists;
