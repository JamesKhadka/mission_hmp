import React from 'react'
import starIcon from '../../assets/images/Star.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'


const HospitalCard = ({ hospital }) => {
  const { id, name, location, specialization, avgRating, totalRating, photo, totalPatients, doctorsAvailable } = hospital
  return (
    <Link to={`/hospital/${id}`} className='block'>
      <div className='p-3 lg:p-5 rounded-xl transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl cursor-pointer'>
        <div> <img src={photo} alt={name} className='w-full h-[200px] object-cover rounded-lg' /> </div>

        <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>{name}</h2>

        <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>{location}</h2>

        <div className="mt-2 lg:mt-4 flex items-center justify-between">

          <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[14px] leading-4 lg:text-[16px]lg:leading-7 font-bold rounded'>{specialization}</span>

          <div className='flex items-center gap-[6px]'>

            <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-bold text-headingColor'>

              <img src={starIcon} alt='star icon' />{avgRating}
            </span>

            <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>({totalRating})</span>
          </div>
        </div>
        <div className="mt-[18px] lg:mt-5 flex items-centers justify-between">
          <div>
            <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-bold text-headingColor'>+{totalPatients} patients</h3>
            <p className='text-[15px] leading-6 font-[400] text-textColor'> Doctor Available {doctorsAvailable}</p>
          </div>

          <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E]  flex items-center justify-center group hover:border-none transition-all duration-300 ease-in-out hover:scale-105  hover:bg-irisBlueColor hover:shadow-black hover:shadow-xl '>
            <BsArrowRight className='group-hover:text-white w-6 h-5' />
          </Link>
        </div>
      </div>
    </Link>
  )
}



export default HospitalCard
