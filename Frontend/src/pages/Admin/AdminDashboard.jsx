import React from 'react'
import pic1 from "../../assets/images/pic.png";
import pic2 from "../../assets/images/pic2.png";
//import AdminLayout from './AdminLayout';

const AdminDashboard = () => {
  return (
    <section>
      {/* Main Content */}
      <div className=" p-4 mt-0">
        {/* Header */}
        <header className="flex items-center justify-center mb-6">
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
        </header>

        {/* Status Summary */}
        <section className="grid grid-cols-4 gap-4">
          {[
            { title: "Doctors", icon: "fas fa-user-md", count: 1, },
            { title: "Patients", icon: "fas fa-users", count: 2 },
            { title: "New Booking", icon: "fas fa-calendar-check", count: 1 },
            { title: "Today Revenue", icon: "fas fa-dollar-sign", count: 0 },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-4 flex items-center  hover:bg-cyan-300">
              <div>
                <h4 className="text-lg font-bold">{item.count}</h4>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
              <div className="ml-auto w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-irisBlueColor">
                <i className={`${item.icon} text-green-700`} />
              </div>
            </div>
          ))}
        </section>

        {/* Tables */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold mb-4">
              Upcoming Appointments until Next Friday
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Here's quick access to upcoming appointments. More details in the Appointment section.
            </p>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Appointment</th>
                  <th className="px-4 py-2">Patient Name</th>
                  <th className="px-4 py-2">Doctor</th>
                  <th className="px-4 py-2">Session</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="text-center">
                    <img src={pic1} alt="No Appointments" />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="w-full mb-9 py-2 bg-blue-500 text-white rounded-md">
              Show all Appointments
            </button>
          </div>

          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold mb-4">
              Upcoming Sessions until Next Friday
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Here's quick access to scheduled sessions. Manage more in the Schedule section.
            </p>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Session Title</th>
                  <th className="px-4 py-2">Doctor</th>
                  <th className="px-4 py-2">Scheduled Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3" className="text-center">
                    <img src={pic2} alt="No Sessions" />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="w-full mt-9 py-2 bg-blue-500 text-white rounded-md">
              Show all Sessions
            </button>
          </div>
        </section>
      </div>
    </section>

  )
}

export default AdminDashboard
