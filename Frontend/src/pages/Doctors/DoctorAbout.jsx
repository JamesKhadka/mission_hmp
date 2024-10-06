import React from 'react'
import { FormateDate } from '../../utils/FormateDate'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Muhibur Rahaman</span>
        </h3>
        <p className='text__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam obcaecati optio deleniti, eaque eveniet adipisci labore inventore exercitationem. Iure perspiciatis dolore delectus nihil ullam, quae, obcaecati placeat aut temporibus illo ex et? Suscipit, explicabo! Quae nisi totam mollitia debitis quos earum, consectetur saepe quasi similique. Alias eius blanditiis placeat adipisci?</p>
      </div>
      {/*============= Education section start ==========*/}
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{FormateDate('7-04-2010')} - {FormateDate('05-18-2014')}</span>
              <p className='text-[16px] leading-5 font-medium text-textColor'>PHD in Surgeon</p>
            </div>

            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>

          </li>

          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{FormateDate('09-10-2015')} - {FormateDate('05-02-2019')}</span>
              <p className='text-[16px] leading-5 font-medium text-textColor'>PHD in Surgeon</p>
            </div>

            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>

          </li>
        </ul>
      </div>
      {/*======= Education section end ========== */}

      {/*========== Exp section start ============*/}
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-irisBlueColor text-[15px] leading-6 fony-semibold'>{FormateDate('7-04-2010')} - {FormateDate('05-18-2014')}</span>
            <p className='text-[16px] leading-5 font-medium text-textColor'>Sr. Surgeon</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>
          </li>

          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-irisBlueColor text-[15px] leading-6 fony-semibold'>{FormateDate('7-04-2010')} - {FormateDate('05-18-2014')}</span>
            <p className='text-[16px] leading-5 font-medium text-textColor'>Sr. Surgeon</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>
          </li>
        </ul>
      </div>
      {/*=========== Exp section end =================*/}
    </div>
  )
}

export default DoctorAbout
