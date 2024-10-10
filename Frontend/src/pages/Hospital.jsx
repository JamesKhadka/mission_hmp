import React from 'react'
import { mockHospitalData } from '../assets/data/hospitals'
import HospitalCard from '../components/Hospital/HospitalCard'
const Hospital = () => {
  return (
    <section>
      <div className="container">

        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center '>Our Association Hospitals</h2>
          <p className='text__para text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, molestiae facere! Maiores deleniti explicabo officiis omnis dicta ullam optio.</p>
        </div>
        {/* search  bar */}

        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center'>
          <input type="search" placeholder="Search for a doctor" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" />
          <button className="btn mt-0 rounded-[5px] rounded-r-md transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl">Search</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>
          {mockHospitalData.map((hospital) => <HospitalCard key={hospital.id} hospital={hospital} />)}
        </div>
      </div>
    </section>
  )
}

export default Hospital
