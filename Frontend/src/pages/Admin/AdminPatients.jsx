import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPatients = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 34,
      gender: "Male",
      phone: "9876543210",
      address: "New York, USA",
    },
    {
      id: 2,
      name: "Jane Roe",
      age: 28,
      gender: "Female",
      phone: "9876541234",
      address: "Los Angeles, USA",
    },
  ]);

  const handleEdit = (id) => {
    console.log("Edit patient with ID:", id);
    // Add your edit logic here
  };

  const handleView = (id) => {
    console.log("View patient with ID:", id);
    // Add your view logic here
  };

  const handleRemove = (id) => {
    const filteredPatients = patients.filter((patient) => patient.id !== id);
    setPatients(filteredPatients);
    console.log("Removed patient with ID:", id);
  };


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
    <div className="p-6 bg-white shadow-md rounded-lg">
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
        + Add New Patients
      </button>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left text-sm uppercase tracking-wider">
            <th className="px-6 py-3 border-b">Name</th>
            <th className="px-6 py-3 border-b">Age</th>
            <th className="px-6 py-3 border-b">Gender</th>
            <th className="px-6 py-3 border-b">Phone</th>
            <th className="px-6 py-3 border-b">Address</th>
            <th className="px-6 py-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 border-b">{patient.name}</td>
              <td className="px-6 py-4 border-b">{patient.age}</td>
              <td className="px-6 py-4 border-b">{patient.gender}</td>
              <td className="px-6 py-4 border-b">{patient.phone}</td>
              <td className="px-6 py-4 border-b">{patient.address}</td>
              <td className="px-6 py-4 border-b flex gap-4">
                <button
                  onClick={() => handleEdit(patient.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                >
                  <i className="fas fa-pen mr-2"></i>Edit
                </button>
                <button
                  onClick={() => handleView(patient.id)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 flex items-center"
                >
                  <i className="fas fa-eye mr-2"></i>View
                </button>
                <button
                  onClick={() => handleRemove(patient.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center"
                >
                  <i className="fas fa-trash mr-2"></i>Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPatients;
