import React from 'react'
import { hospitals } from '../assets/data/hospitals'
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>
          {hospitals.map((hospital) => <HospitalCard key={hospital.id} hospital={hospital} />)}
        </div>
      </div>
    </section>
  )
}

export default Hospital
