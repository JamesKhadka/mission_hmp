import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AdminAppointment = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      doctorName: "Dr. Smith",
      date: "2024-12-03",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Jane Roe",
      doctorName: "Dr. Adams",
      date: "2024-12-05",
      time: "2:30 PM",
      status: "Confirmed",
    },
  ]);

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

  const [editingStatusId, setEditingStatusId] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    const updatedAppointments = appointments.map((appt) =>
      appt.id === id ? { ...appt, status: newStatus } : appt
    );
    setAppointments(updatedAppointments);
    setEditingStatusId(null); // Close the dropdown after selection
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Header Section with Search and Notification */}
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

      {/* Appointments Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left text-sm uppercase tracking-wider">
            <th className="px-6 py-3 border-b">Patient Name</th>
            <th className="px-6 py-3 border-b">Doctor Name</th>
            <th className="px-6 py-3 border-b">Date</th>
            <th className="px-6 py-3 border-b">Time</th>
            <th className="px-6 py-3 border-b">Status</th>
            <th className="px-6 py-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 border-b">{appointment.patientName}</td>
              <td className="px-6 py-4 border-b">{appointment.doctorName}</td>
              <td className="px-6 py-4 border-b">{appointment.date}</td>
              <td className="px-6 py-4 border-b">{appointment.time}</td>
              <td className="px-6 py-4 border-b">
                {editingStatusId === appointment.id ? (
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => handleStatusChange(appointment.id, "Pending")}
                      className="px-2 py-1  text-yellow-600 rounded-md hover:bg-yellow-200"
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => handleStatusChange(appointment.id, "Confirmed")}
                      className="px-2 py-1  text-green-600 rounded-md hover:bg-green-200"
                    >
                      Confirmed
                    </button>
                    <button
                      onClick={() => handleStatusChange(appointment.id, "Canceled")}
                      className="px-2 py-1  text-red-600 rounded-md hover:bg-red-200"
                    >
                      Canceled
                    </button>
                  </div>
                ) : (
                  <span
                    onClick={() => setEditingStatusId(appointment.id)}
                    className={`cursor-pointer font-semibold ${appointment.status === "Pending"
                      ? "text-yellow-500"
                      : appointment.status === "Confirmed"
                        ? "text-green-500"
                        : "text-red-500"
                      }`}
                  >
                    {appointment.status}
                  </span>
                )}
              </td>
              <td className="px-6 py-4 border-b flex gap-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                >
                  <i className="fas fa-pen mr-2"></i>Edit
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 flex items-center"
                >
                  <i className="fas fa-eye mr-2"></i>View
                </button>
                <button
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

export default AdminAppointment;
