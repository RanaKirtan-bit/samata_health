import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TherapistCard from '../../components/TherapistCard';

const SearchTherapists = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    specialization: '',
    priceRange: '',
    sessionType: ''
  });

  const therapists = [
    {
      _id: '1',
      name: 'Dr. Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      specialization: 'Clinical Psychology',
      qualifications: 'PhD in Psychology',
      experience: 8,
      rating: 4.9,
      rate: 590,
      sessionModes: ['online', 'in-person']
    },
    {
      _id: '2',
      name: 'Dr. Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      specialization: 'Anxiety & Stress',
      qualifications: 'Licensed Therapist',
      experience: 5,
      rating: 4.8,
      rate: 650,
      sessionModes: ['online']
    },
    {
      _id: '3',
      name: 'Dr. Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      specialization: 'Depression & Mood Disorders',
      qualifications: 'MD Psychiatry',
      experience: 12,
      rating: 4.9,
      rate: 800,
      sessionModes: ['online', 'in-person']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Your Therapist</h1>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="md:col-span-4 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
              />
              
              <select
                value={filters.specialization}
                onChange={(e) => setFilters({...filters, specialization: e.target.value})}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
              >
                <option value="">All Specializations</option>
                <option value="clinical">Clinical Psychology</option>
                <option value="anxiety">Anxiety & Stress</option>
                <option value="depression">Depression</option>
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
              >
                <option value="">All Prices</option>
                <option value="0-500">₹0 - ₹500</option>
                <option value="500-700">₹500 - ₹700</option>
                <option value="700+">₹700+</option>
              </select>

              <select
                value={filters.sessionType}
                onChange={(e) => setFilters({...filters, sessionType: e.target.value})}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
              >
                <option value="">All Session Types</option>
                <option value="online">Online</option>
                <option value="in-person">In-person</option>
              </select>

              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{therapists.length}</span> therapists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapists.map((therapist) => (
              <TherapistCard key={therapist._id} therapist={therapist} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchTherapists;
