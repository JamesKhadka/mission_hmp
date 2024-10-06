import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial'

const Doctors = () => {
  return (
    <>
      {/* ========== search bar section start ============= */}
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center'>
            <input type="search" placeholder="Search for a doctor" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" />
            <button className="btn mt-0 rounded-[5px] rounded-r-md transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl">Search</button>
          </div>
        </div>
      </section>
      {/* ========== search bar section end ============= */}

      {/* ========== doctor list section start ============= */}
      <section>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>
            {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
          </div>
        </div>
      </section>
      {/* ==========doctor list  section end ============= */}


      {/* ==========testimonial  section end ============= */}
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center '>What patiens says</h2>
            <p className='text__para text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, molestiae facere! Maiores deleniti explicabo officiis omnis dicta ullam optio.</p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* ==========testimonial  section end ============= */}
    </>
  )
}

export default Doctors
