import React, { useState } from 'react'
import doctorImg from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SlidePannel from './SlidePannel'

const DoctorDetails = () => {
  const [tab, setTab] = useState('about')
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              {/*========== doc image sction start ==============*/}
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctorImg} alt="doc image" />
              </figure>
              {/*============= doc image sction end ==============*/}

              {/*============= description sction start =======*/}
              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor pv-1 px-6 lg:py-2 lg:px-2 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Muhibur Rahaman</h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor '>
                    <img src={starIcon} alt='star image' /> 4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>(272)</span>
                </div>
                <p className='text__para text-[14px] leading-5 md:text-[15px] lg:max:w-[390px]' > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nihil ab esse, perspiciatis dignissimos alias a dolore mollitia in nesciunt sequi! Dignissimos porro non fugiat ratione tenetur beatae accusantium sunt.</p>
              </div>
              {/*================= description sction end ==============*/}
            </div>

            {/*============ about and feedback sction start ==========*/}
            <div className='mt-[50px] border-b border-solid border-[#0066ff34]' >
              <button onClick={() => setTab('about')} className={`${tab === 'about' && 'border-b border-solid border-irisBlueColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>About</button>
              <button onClick={() => setTab('feedback')} className={` ${tab === 'feedback' && 'border-b border-solid border-irisBlueColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}> Feedback </button>
            </div>
            {/*=============== about and feedback sction end ================*/}

            {/*============ about and feedback bar sction start ==============*/}
            <div className='mt-[50px]'>
              {tab === 'about' && <DoctorAbout />}
              {tab === 'feedback' && <Feedback />}
            </div>
            {/*=========== about and feedback bar sction end ============*/}
          </div>
          <div>
            <SlidePannel />
          </div>
        </div>
      </div>
    </section >
  )
}

export default DoctorDetails
