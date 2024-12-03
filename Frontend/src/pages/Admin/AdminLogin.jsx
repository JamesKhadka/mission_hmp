import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import { BASE_URL } from '../../config';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fetching admin login endpoint from backend
      const res = await fetch(`${BASE_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      // Navigate to admin dashboard on success
      toast.success(result.message);
      setLoading(false);
      navigate('/admin');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: "url('https://github.com/HashenUdara/edoc-doctor-appointment-system/blob/main/Screenshots/Screenshot%20(1).png?raw=true')", // Replace with your image path

      }}
    >
      <div className="w-full max-w-[570px] bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h3 className="text-headingColor text-[27px] leading-9 font-bold mb-10 text-center">
          Welcome, <span className="text-irisBlueColor">Admin 💼</span>
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-irisBlueColor text-white text-[18px] leading-[30px] rounded-full px-4 py-3 "
            >
              {loading ? <HashLoader size={25} color="#fff" /> : 'Login'}
            </button>
          </div>


        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
