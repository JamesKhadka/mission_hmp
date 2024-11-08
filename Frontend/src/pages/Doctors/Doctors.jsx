import React, { useEffect, useState } from 'react'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial'

import { BASE_URL } from './../../config'
import useFetchData from './../../hooks/useFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'


const Doctors = () => {


  //searching algorithm
  const [query, setQuery] = useState('')
  const [debounceQuery, setDebounceQuery] = useState('')

  const handleSearch = () => {
    setQuery(query.trim())
    console.log('handle search')
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query)
    }, 700)

    return () => clearTimeout(timeout)
  }, [query])

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)
  return (
    <>
      {/* ========== search bar section start ============= */}
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center'>
            <input type="search" placeholder="Search for a doctor by name or specification" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              value={query} onChange={e => setQuery(e.target.value)} />

            <button className="btn mt-0 rounded-[5px] rounded-r-md" onClick={handleSearch} >Search</button>
          </div>
        </div>
      </section>
      {/* ========== search bar section end ============= */}

      {/* ========== doctor list section start ============= */}
      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>
              {doctors.map((doctor) => <DoctorCard key={doctor._id} doctor={doctor} />)}
            </div>
          )}
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
