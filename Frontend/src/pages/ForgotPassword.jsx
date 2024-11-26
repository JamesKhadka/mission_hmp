import React from 'react'
import { useState } from 'react';

const ForgotPassword = () => {

  const [email, setEmail] = useState(''); // State to handle the email input
  const [message, setMessage] = useState(''); // State to handle success/error messages
  const [isError, setIsError] = useState(false); // State to differentiate success and error messages

  const handlePasswordReset = async () => {
    if (email.trim() === '') {
      setMessage('Please enter your email address');
      setIsError(true);
      return;
    }

    // Simulate password reset email logic (replace this with your backend call)
    try {
      // Simulate a successful email send
      setTimeout(() => {
        setMessage('Password reset email sent successfully. Check your email!');
        setIsError(false);
      }, 500);
    } catch (error) {
      // Simulate an error
      setMessage('Error: Unable to send the password reset email');
      setIsError(true);
    }
  };

  return (
    <section className='px-5 lg:px-0'>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <div className=' max-w-[500px] bg-white px-10 py-10 rounded-3xl  '>
          <h1 className="text-4xl font-bold text-cyan-500">Reset Password</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Enter your email to receive password reset instructions</p>

          <div className='mt-8'>
            <div>
              <label className='text-lg font-medium'>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                placeholder='Enter your email'
                type="email" />
            </div>

            <div className='mt-8'>
              <button
                onClick={handlePasswordReset}
                className='w-full py-3 bg-cyan-500 text-white text-lg rounded-xl font-bold transition-all duration-300 ease-in-out hover:scale-105  hover:shadow-black hover:shadow-xl'> Reset Password
              </button>
            </div>

            {message && (
              <p className='mt-4 text-center font-medium text-green-700'>{message}</p>
            )}

            <div className='mt-8 flex justify-center items-center'>
              <button
                onClick={() => setAuthState('login')} // Back to login
                className='text-cyan-500 text-base font-medium' > Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default ForgotPassword
