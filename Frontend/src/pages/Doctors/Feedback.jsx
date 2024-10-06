import React, { useState } from 'react'
import { FormateDate } from '../../utils/FormateDate'
import avatar from '../../assets/images/avatar-icon.png'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'


const Feedback = () => {
  const [showFeedbackForm, setshowFeedbackForm] = useState(false);


  return (
    <div>
      <div className=' mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All Reviews (272)</h4>
        <div className='flex gap10 justify-between mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'><img className='w-full' src={avatar} alt="avatar-icon" /></figure>
            <div>
              <h5 className='text-[16px] leading-6 text-irisBlueColor font-bold'>Ali Ahmed</h5>
              <p className='text-[14px] leading-6 text-textColor'>{FormateDate('05-18-2014')}</p>
              <p className='text__para mt-3 font-medium text-[15px]'>Good services , highly recommended❤️‍🩹</p>
            </div>
          </div>
          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_, index) => <AiFillStar keys={index} color='#0067FF' />)}
          </div>
        </div>
      </div>

      {!showFeedbackForm &&
        <div className='text-center'>
          <button className='btn transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl' onClick={() => setshowFeedbackForm(true)}>Your's Comment</button>
        </div>}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  )
}

export default Feedback
