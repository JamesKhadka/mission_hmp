import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Hello!! <span className='text-irisBlueColor'>  Welcome Back User 💓</span>
        </h3>
        <form action="" className='py-4 md:py-0'>
          {/* ====== email form ======= */}
          <div className='mb-5'>
            <input
              type='email'
              placeholder='Enter your Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
              required />
          </div>

          {/* ====== password form ======= */}
          <div className='mb-5'>
            <input
              type='password'
              placeholder='Enter your password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
              required />
          </div>
          {/* ======== submit button ========== */}
          <div className='mt-7'>
            <button type='submit' className='w-full bg-irisBlueColor text-white text-[18px] leading-[30px] rounded-full px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>Login</button>
          </div>

          {/* ===========forgot password ============== */}
          <p className='mt-5 text-textColor text-center'>Don&apos;t Have an Account ? <Link to='/register' className='text-irisBlueColor font-medium ml-1'>Register</Link></p>
          <p className='mt-5 text-textColor  text-center'><Link to='/forgot-password' className='text-irisBlueColor font-medium ml-1'>Forgot Password</Link></p>

        </form>
      </div>

    </section>
  )
}

export default Login
