import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminDoctor from "./AdminDoctor";
import AdminSchedule from "./AdminSchedule";
import AdminPatient from "./AdminPatients";
import AdminAppointment from "./AdminAppointment";
import AdminLogin from "./AdminLogin";

const AdminLayout = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const renderContent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <AdminDashboard />;
      case "Doctors":
        return <AdminDoctor />;
      case "Schedule":
        return <AdminSchedule />;
      case "Patients":
        return <AdminPatient />;
      case "Appointments":
        return <AdminAppointment />;
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin-login");
  };

  const [formData, setFormData] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col font-bold">
        <div className="p-4 border-b flex flex-col items-center">
          {/* Profile Info */}

          <div className="flex items-center mb-4">

            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">A</span>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-green-600">Administrator</h4>
              <p className="text-sm text-irisBlueColor">mail@example.com</p>
            </div>

          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full mt-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-300"
          >
            Log out
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-4 p-4">
          {[
            { name: "Dashboard", icon: "fas fa-tachometer-alt", path: "/admin-dashboard" },
            { name: "Doctors", icon: "fas fa-user-md", path: "/admin-doctors" },
            { name: "Schedule", icon: "fas fa-clock", path: "/admin-schedule" },
            { name: "Appointments", icon: "fas fa-calendar-check", path: "/admin-appointments" },
            { name: "Patients", icon: "fas fa-users", path: "/admin-patients" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveComponent(item.name)}
              className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors ${activeComponent === item.name
                ? "  text-irisBlueColor"
                : "text-gray-700 hover:bg-irisBlueColor hover:text-red-500"
                }`}
            >
              <i className={`${item.icon} mr-3`} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">{renderContent()}</main>
    </div>
  );
};

export default AdminLayout;
