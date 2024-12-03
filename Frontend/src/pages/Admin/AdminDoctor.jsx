import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminDoctor = () => {

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };


  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/admin");
  };

  return (
    <div className="flex flex-col p-6 bg-gray-50 w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={handleBack} className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
          <i className="fas fa-arrow-left mr-2"></i>
          Back
        </button>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Doctor name or Email"
              className="w-96 px-4 py-3 border text-irisBlueColor rounded-full"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-irisBlueColor">
              <i className="fas fa-search text-2xl"></i>
            </button>
          </div>
          <button className="relative p-3 rounded-full text-gray-600 hover:text-irisBlueColor">
            <i className="fas fa-bell text-3xl"></i>
            <span className="absolute top-1 right-0 bg-red-600 text-black text-xs font-bold rounded-full px-1.5">
              5+
            </span>
          </button>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Today's Date</p>
          <p className="text-lg font-bold">{getTodayDate()}</p>
        </div>

      </div>

      {/* Add New Doctor Button */}
      <button className="self-start px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-6">
        + Add New Doctor
      </button>

      {/* Doctor List Table */}
      <div className="bg-white rounded-md shadow-md">
        <h1>All Doctors(1)</h1>
        <table className="min-w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-6 py-3 border-b border-gray-200 font-medium text-gray-600">
                Doctor Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 font-medium text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 border-b border-gray-200 font-medium text-gray-600">
                Specialties
              </th>
              <th className="px-6 py-3 border-b border-gray-200 font-medium text-gray-600">
                Events
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 border-b border-gray-200">Test Doctor</td>
              <td className="px-6 py-4 border-b border-gray-200">
                doctor@edoc.com
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                Accident and emergency
              </td>
              <td className="px-6 py-4 border-b border-gray-200 flex gap-4">
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  <i className="fas fa-edit mr-2"></i> Edit
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                  <i className="fas fa-eye mr-2"></i> View
                </button>
                <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                  <i className="fas fa-trash mr-2"></i> Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default AdminDoctor
