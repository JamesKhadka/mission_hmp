import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { authContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Tabs = ({ tab, setTab }) => {

  const { dispatch } = useContext(authContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  return (
    <div>
      <div>
        <span className='lg:hidden'>
          <BiMenu className="w-6 h-6 cursor-pointer" />
        </span>
        <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>

          <button className={`${tab === 'overview' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`} onClick={() => setTab('overview')} >Overview</button>

          <button className={`${tab === 'appointments' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`} onClick={() => setTab('appointments')}>Appointments</button>

          <button className={`${tab === 'settings' ? 'bg-indigo-100 text-primaryColor' : 'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md`} onClick={() => setTab('settings')}>Profile</button>

          {/* ================== action button of account  ================= */}
          <div className='mt-[50px] w-full'>
            <button className='w-full bg-green-600 p-3 text-[16px] leading-7 rounded-md text-black font-bold transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl' onClick={handleLogout}>Logout Account</button>

            <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-black font-bold transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>Delete Account</button>

          </div>

        </div>
      </div>
    </div >
  )
}

export default Tabs
