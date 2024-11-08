import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useParams } from 'react-router-dom';

import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const FeedbackForm = () => {

  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);

  const [reviewText, setReviewText] = useState('')

  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {

      if (!rating || !reviewText) {
        setLoading(false)
        return toast.error('Rating & Review fields are required')
      }

      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ rating, reviewText })
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.message)
      }
      setLoading(false)
      toast.success(result.message)

    } catch (err) {
      setLoading(false)
      toast.error(err.message)
    }
  }


  return (
    <form action="">
      {/*================ rating  system  section start ==================*/}
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold  mb-4 mt-0'>How Would You Rate The Overall Experience ?</h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type='button'
                className={`${index <= ((rating && hover) || hover) ? 'text-yellowColor' : 'text-gray-400'} bg-transparent  border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}>
                <span>
                  <AiFillStar />
                </span>
              </button>
            )
          })}
        </div>
      </div>
      {/*================== rating  system  section end ==================*/}

      {/*================ rextarea section start ===============*/}
      <div className='mt-[30px]'>
        <h3 className='text-irisBlueColor text-[16px] leading-6 font-semibold  mb-4 mt-0'>Share your feedback suggestions*</h3>

        <textarea className='border border-solid border-irisBlueColor focus:outline outline-primaryColor w-full px-4 py-3 rounded-md' rows='5' placeholder='Write your experience ' onChange={e => setReviewText(e.target.value)}>
        </textarea>

        <button type='submit' className='btn font-[600] transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl' onClick={handleSubmitReview}>
          {loading ? <HashLoader size={25} color='#fff' /> : 'Submit Feedback'}
        </button>
      </div>
      {/*============== textarea  section end =============*/}
    </form >
  )
}

export default FeedbackForm
