import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TherapistEarnings = () => {
  const [filter, setFilter] = useState('all');
  
  const [transactions, setTransactions] = useState([
    {
      _id: '1',
      clientName: 'John Doe',
      sessionDate: 'Feb 20, 2026',
      sessionTime: '10:00 AM',
      sessionType: 'online',
      amount: 590,
      platformFee: 59,
      netEarnings: 531,
      status: 'completed',
      paymentDate: 'Feb 20, 2026'
    },
    {
      _id: '2',
      clientName: 'Emily Smith',
      sessionDate: 'Feb 18, 2026',
      sessionTime: '02:00 PM',
      sessionType: 'in-person',
      amount: 650,
      platformFee: 65,
      netEarnings: 585,
      status: 'completed',
      paymentDate: 'Feb 18, 2026'
    },
    {
      _id: '3',
      clientName: 'Michael Brown',
      sessionDate: 'Feb 15, 2026',
      sessionTime: '11:00 AM',
      sessionType: 'online',
      amount: 590,
      platformFee: 59,
      netEarnings: 531,
      status: 'completed',
      paymentDate: 'Feb 15, 2026'
    },
    {
      _id: '4',
      clientName: 'Sarah Wilson',
      sessionDate: 'Feb 12, 2026',
      sessionTime: '04:00 PM',
      sessionType: 'online',
      amount: 590,
      platformFee: 59,
      netEarnings: 531,
      status: 'completed',
      paymentDate: 'Feb 12, 2026'
    },
    {
      _id: '5',
      clientName: 'David Lee',
      sessionDate: 'Feb 10, 2026',
      sessionTime: '10:00 AM',
      sessionType: 'in-person',
      amount: 650,
      platformFee: 65,
      netEarnings: 585,
      status: 'completed',
      paymentDate: 'Feb 10, 2026'
    },
    {
      _id: '6',
      clientName: 'Lisa Anderson',
      sessionDate: 'Feb 25, 2026',
      sessionTime: '03:00 PM',
      sessionType: 'online',
      amount: 590,
      platformFee: 59,
      netEarnings: 531,
      status: 'pending',
      paymentDate: 'Feb 25, 2026'
    }
  ]);

  const stats = {
    totalEarnings: transactions.reduce((sum, t) => sum + t.netEarnings, 0),
    thisMonth: transactions
      .filter(t => {
        const paymentDate = new Date(t.paymentDate);
        const currentDate = new Date();
        return paymentDate.getMonth() === currentDate.getMonth() && 
               paymentDate.getFullYear() === currentDate.getFullYear();
      })
      .reduce((sum, t) => sum + t.netEarnings, 0),
    lastMonth: 4250,
    pendingPayments: transactions
      .filter(t => t.status === 'pending')
      .reduce((sum, t) => sum + t.netEarnings, 0),
    totalSessions: transactions.length
  };

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(t => t.status === filter);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Earnings & Payments</h1>
            <p className="text-teal-50">Track your earnings and payment history</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                  <p className="text-3xl font-bold text-gray-900">{formatCurrency(stats.totalEarnings)}</p>
                </div>
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm text-green-600">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                +12% from last month
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-3xl font-bold text-gray-900">{formatCurrency(stats.thisMonth)}</p>
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
                  <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                  <p className="text-3xl font-bold text-gray-900">{formatCurrency(stats.pendingPayments)}</p>
                </div>
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalSessions}</p>
                </div>
                <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Withdraw Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Available for Withdrawal</h3>
                <p className="text-3xl font-bold text-teal-600 mt-1">{formatCurrency(stats.pendingPayments)}</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition duration-300 font-medium">
                Withdraw Funds
              </button>
            </div>
          </div>

          {/* Filter */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Transaction History</span>
              <div className="flex space-x-2">
                {['all', 'completed', 'pending'].map(status => (
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
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          {filteredTransactions.length > 0 ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Client</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Session Date</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Type</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Amount</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Fee (10%)</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Net Earnings</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredTransactions.map(transaction => (
                      <tr key={transaction._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                              <span className="text-teal-600 font-medium">{transaction.clientName.charAt(0)}</span>
                            </div>
                            <span className="ml-3 font-medium text-gray-900">{transaction.clientName}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          <div>{transaction.sessionDate}</div>
                          <div className="text-sm text-gray-500">{transaction.sessionTime}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.sessionType === 'online' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {transaction.sessionType}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-900 font-medium">{formatCurrency(transaction.amount)}</td>
                        <td className="px-6 py-4 text-gray-500">-{formatCurrency(transaction.platformFee)}</td>
                        <td className="px-6 py-4 text-green-600 font-semibold">{formatCurrency(transaction.netEarnings)}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.status === 'completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Transactions Found</h3>
              <p className="text-gray-600">There are no transactions matching your filter.</p>
            </div>
          )}

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

export default TherapistEarnings;
