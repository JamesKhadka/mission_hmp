import React from 'react'
import FounderList from '../components/Founder/FounderList'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>Any Suggestion or  Query? Feel free to contact us.</p>
        <form action="#" className='space-y-8'>
          {/*==================== for email ================== */}
          <div>
            <label htmlFor="email" className='form__label '>Your Email</label>
            <input type="email" id="email" placeholder='example@gmail.com' className='form__input mt-1 rounded-full' />
          </div>

          {/*==================== for Subject ================== */}
          <div>
            <label htmlFor="subject" className='form__label '>Subject</label>
            <input type="text" id="subject" placeholder='Let Us Know How Can We help.' className='form__input mt-1 rounded-full' />
          </div>

          {/*==================== for Subject ================== */}
          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form__label '>Your  Message</label>
            <textarea rows='6' type="text" id="message" placeholder='Express here......' className='form__input mt-1 rounded-md' />
          </div>

          {/*==================== submit  button ================== */}
          <button type='submit' className='btn rounded-full sm:w-fit transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>Submit</button>
        </form>

        {/* =======  Founder List section start ======= */}

        <section>
          <div className="container">
            <div className='xl:w-[600px] mx-auto'>
              <h2 className='heading text-center '> Meet Our Developers </h2>
              <p className='text__para text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, molestiae facere! Maiores deleniti explicabo officiis omnis dicta ullam optio.</p>
            </div>
            <FounderList />
          </div>
        </section>
        {/* =======  Founder List section end ======= */}
      </div>

    </section>
  )
}

export default Contact
