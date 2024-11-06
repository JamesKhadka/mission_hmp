import React from 'react'
import { useContext, useState } from 'react'
import { authContext } from '../../context/AuthContext'
import MyBookings from './MyBookings'
import Profile from './Profile'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import Loading from '../../components/Loader/Loading'
// import Error from '../../components/Error/Error'

const MyAccount = () => {

  const { dispatch } = useContext(authContext);

  const [tab, setTab] = useState('bookings');

  const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`) || {}
  console.log(userData, "userdata")



  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <section>
      <div className='max-w-[1170px] px-5 max-auto'>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}
        {
          !loading && !error && (

            <div className="grid md:grid-cols-3 gap-10">
              <div className='pb-[50px] px-[30px] rounded-md'>

                {/* ================ user image ========== */}
                <div className='flex items-center justify-center'>
                  <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-irisBlueColor'>
                    <img src={userData.photo} alt="profile icon" className='w-full h-full rounded-full' />
                  </figure>
                </div>

                {/* =================== user description =============== */}
                <div className='text-center mt-4'>
                  <h3 className='text-[18px] leading-[30px] text-headingColor font-bold '>{userData.name}</h3>
                  <p className='text-textColor text-[15px] leading-6 font-medium'>{userData.email}</p>
                  <p className='text-textColor text-[15px] leading-6 font-medium'>Blood Type :
                    <span className=' ml-2 text-headingColor text-[22px] leading-8'>{userData.bloodType}</span>
                  </p>
                </div>

                {/* ================== action button of account  ================= */}
                <div className='mt-[50px] md:mt-[100px]'>
                  <button className='w-full bg-green-600 p-3 text-[16px] leading-7 rounded-md text-black font-bold transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl' onClick={handleLogout}>Logout Account</button>
                  <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-black font-bold transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>Delete Account</button>

                </div>
              </div>

              <div className='md:col-span-2 md:px-[30px]'>
                {/* ==================== profile setting and appointments of user =========== */}
                <div>
                  <button className={`${tab === 'bookings' && 'bg-irisBlueColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-irisBlueColor `}
                    onClick={() => setTab('bookings')}>
                    My Bookings</button>

                  <button className={` ${tab === 'settings' && 'bg-irisBlueColor text-white font-normal'} py-2  px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-irisBlueColor`}
                    onClick={() => setTab('settings')}>
                    Profile Settings</button>
                </div>

                {/* rendering component acc to its condition */}
                {tab === 'bookings' && <MyBookings />}

                {tab === 'settings' && <Profile user={userData} />}

              </div>
            </div>
          )
        }
      </div>
    </section>

  )
}

export default MyAccount
