import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL, token } from '../../config'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'
import { useEffect } from 'react'

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    bloodType: '',
  })

  const navigate = useNavigate();



  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    })
  }, [user])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async event => {
    const file = event.target.files[0];
    // we use cloudinary to upload  the image
    const data = await uploadImageToCloudinary(file);
    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })


  }

  const handleSubmit = async (e) => {
    // console.log(formData);
    e.preventDefault();
    setLoading(true);

    try {
      //fetching register  endpoint from  backend
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      })

      const { message } = await res.json()

      if (!res.ok) {
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate('/users/profile/me')

    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }
  return (
    <div className='mt-10'>
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
            aria-readonly
            readOnly />
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
          />
        </div>

        {/* ========= blood type  =========== */}
        <div className='mb-5'>
          <input
            type='text'
            placeholder='Blood Type '
            name='bloodType'
            value={formData.bloodType}
            onChange={handleChange}
            className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-irisBlueColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
            required />
        </div>

        <div className='mb-5 flex items-center justify-between'>
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
          {formData.photo && (
            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-irisBlueColor flex items-center justify-center'>
              <img src={formData.photo} alt="doc image" className='w-full rounded-full' />
            </figure>
          )}

          <div className='relative w-[130px] h-[50px]'>
            <input type="file"
              name='photo'
              id='customFile'
              onChange={handleFileInputChange}
              accept='.jpg , .png, .jpeg'
              className='text-irisBlueColor absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />

            <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] text-[15px] leading-6 overflow-hidden bg-irisBlueColor text-headincolor font-semibold rounded-lg truncate cursor-pointer transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>
              {selectedFile ? selectedFile.name : ' Upload Photo'}

            </label>
          </div>
        </div>

        <div className='mt-7'>
          <button disabled={loading && true} type='submit' className='w-full bg-irisBlueColor text-black text-[18px] leading-[30px] rounded-full px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>
            {loading ? <HashLoader size={25} color='#ffffff' /> : 'Update Changes'}

          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
