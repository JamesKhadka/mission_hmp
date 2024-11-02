import React from 'react'
import { useState } from 'react'
import SignupImg from '../assets/images/signup.gif'
import { Link, useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../utils/uploadCloudinary'
import { BASE_URL } from '../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'


const Signup = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const [previewURL, setPreviewURL] = useState('');

  const [loading, setLoading] = useState(false);




  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient'
  })

  const nevigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    //laater we use cloudinary to upload  the image

    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const { message } = await res.json()

      if (!res.ok) {
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      nevigate('/login')

    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }


  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* =========== image box =========== */}
          <div className="hidden lg:block  rounded-l-lg">
            <figure className='rounded-l-lg'>
              <img src={SignupImg} alt="signup image" className='w-full rounded-l-lg' />
            </figure>
          </div>

          {/* ============ signup form  start ============*/}
          <div className="rounded-l-lg lg:pl-16 py-10 ">
            <h3 className='text-textColor text-[22px] leading-9 font-bold mb-10'>Register <span className='text-irisBlueColor'>Yourself To Utilize Services</span></h3>

            <form onSubmit={handleSubmit}>
              {/* ========= name =========== */}
              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                  required />
              </div>

              {/* ========= email =========== */}
              <div className='mb-5'>
                <input
                  type='email'
                  placeholder='Enter your Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                  required />
              </div>

              {/* ========= password  =========== */}
              <div className='mb-5'>
                <input
                  type='password'
                  placeholder='Enter your password '
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                  required />
              </div>
              {/* ======= your role =========== */}
              <div className='mb-5 flex items-center justify-between'>
                <label className='text-textColor font-bold text-[15px] leading-7 '>Are You a :
                  <select name='role'
                    value={formData.role}
                    onChange={handleChange}
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value=''>Select</option>
                    <option value='patient'>Patient</option>
                    <option value='doctor'>Doctor</option>
                  </select>
                </label>

                {/* ========= your gender =========== */}
                <label className='text-textColor font-bold text-[15px] leading-7 '>Gender
                  <select name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value=''>Select</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='lgbtq'>LGBTQ</option>
                  </select>
                </label>
              </div>

              {/*============== photo fild ============== */}
              <div className='mb-5 flex items-center gap-3'>
                {selectedFile && (
                  <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-irisBlueColor flex items-center justify-center'>
                    <img src={previewURL} alt="doc image" className='w-full rounded-full' />
                  </figure>
                )}

                <div className='relative w-[130px] h-[50px]'>
                  <input type="file"
                    name='photo'
                    id='customFile'
                    onChange={handleFileInputChange}
                    accept='.jpg , .png, .jpeg'
                    className='text-irisBlueColor absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />

                  <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] text-[15px] leading-6 overflow-hidden bg-irisBlueColor text-headincolor font-semibold rounded-lg truncate cursor-pointer transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>Upload Photo</label>
                </div>
              </div>

              {/*============ google svg code ===============*/}
              <button
                className="w-full flex items-center justify-center text-cyan-800 text-[18px] leading-[30px] rounded-full px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-black hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="50"
                  height="50"
                  className="mr-2"
                >
                  <path
                    fill="#4285F4"
                    d="M44.5 20H24v8.5h11.9C34.4 33.3 30 36.5 24 36.5c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.6 1.1 7.6 2.9l5.9-5.9C33.8 6 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10.3 0 19.4-7.5 19.4-20 0-1.3-.1-2.7-.3-4z"
                  />
                  <path
                    fill="#34A853"
                    d="M6.3 14.7l6.6 4.8C14.4 16.3 18.9 13.5 24 13.5c3 0 5.6 1.1 7.6 2.9l5.9-5.9C33.8 6 29.2 4 24 4c-7.6 0-14.2 4.3-17.7 10.7z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M24 44c5.3 0 9.9-1.7 13.5-4.6l-6.2-4.9c-2.1 1.4-4.7 2.2-7.4 2.2-5.9 0-10.9-3.8-12.7-9.1l-6.6 5.1C9.5 39.6 16.2 44 24 44z"
                  />
                  <path
                    fill="#EA4335"
                    d="M44.5 20H24v8.5h11.9c-.8 2.5-2.3 4.6-4.3 6.1l6.2 4.9C40.7 36.3 44 30.7 44 24c0-1.3-.1-2.7-.3-4z"
                  />
                </svg>
                Sign in with Google
              </button>


              <div className='mt-7'>
                <button disabled={loading && true} type='submit' className='w-full bg-irisBlueColor text-white text-[18px] leading-[30px] rounded-full px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>
                  {loading ? <HashLoader size={35} color='#ffffff' /> : 'Sign Up'}

                </button>
              </div>

              <p className='mt-5 text-textColor text-center'>Already Have an Account ? <Link to='/login' className='text-irisBlueColor font-medium ml-1'>Login</Link></p>
            </form>
          </div>
          {/* ============ signup form  end ============*/}
        </div>
      </div>
    </section>
  )
}

export default Signup
