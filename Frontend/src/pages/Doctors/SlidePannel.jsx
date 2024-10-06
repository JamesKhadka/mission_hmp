import React from 'react'

const SlidePannel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex  items-center justify-between'>
        <p className='text__para mt-0 font-semibold'>Visiting price</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-irisBlueColor font-bold'>$500</span>
      </div>
      <div className='mt-[30px] '>
        <p className='text__para mt-0 font-semibold text-headingColor'>Available Time Slots :</p>

        <ul className='mt-3'>
          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 text-textColor font-semibold'>Sunday</p>
            <p className='text-[15px] leading-6 text-irisBlueColor font-semibold'>10:00 AM  - 12:00 PM</p>
          </li>

          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 text-textColor font-semibold'>Tuesday</p>
            <p className='text-[15px] leading-6 text-irisBlueColor font-semibold'>10:00 AM  - 12:00 PM</p>
          </li>

          <li className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 text-textColor font-semibold'>Wednesday</p>
            <p className='text-[15px] leading-6 text-irisBlueColor font-semibold'>10:00 AM  - 12:00 PM</p>
          </li>
        </ul>
      </div>

      <button className='btn px-2 w-full rounded-full transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>Book Appointment</button>
    </div>
  )
}

export default SlidePannel
