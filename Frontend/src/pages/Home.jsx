import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'
const Home = () => {
  return (
    <>
      {/* ============= home section ========== */}

      <section className='hero__section pt-[60px] 2xl:h-[800px]'>

        <div className="container">

          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
            {/* ========== home content=============== */}
            <div>

              <div className='lg:w-[570px] '>

                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]  md:leading-[70px]'>We Help Patients Live a Healthy, Longer Life</h1>

                <p className='text__para'>

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro dicta earum eos doloremque omnis officia doloribus quas numquam, cupiditate veniam dolorum magni delectus tempora nulla, accusamus, beatae aliquid asperiores!
                </p>

                <button className='btn transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>Request an Appointment</button>

              </div>
              {/* ============= home counter ============ */}

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap[30px] ">

                <div className=' rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-400 shadow-md'>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor  '>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px'></span>
                  <p className='text__para text-yellow-500'>Years of Experience</p>
                </div>

                <div className=' rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-400 shadow-md'>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor  '>15+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px'></span>
                  <p className='text__para text text-purple-400'>Hospitals Location</p>
                </div>

                <div className=' rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-400 shadow-md'>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor  '>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px'></span>
                  <p className='text__para text-cyan-400'>Patients Satisfaction</p>
                </div>

                {/* <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor  '>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px'></span>
                  <p className='text__para'>Years of Experience</p>
                </div> */}

              </div>

            </div>
            {/* ======= home image ======== */}
            <div className="flex gap-[30px]  justify-end">
              <div><img className='w-full' src={heroImg01} alt='home image' /> </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={heroImg02} alt='home image' />
                <img className='w-full' src={heroImg03} alt='home image' />
              </div>
            </div>

          </div>
        </div>

      </section>
      {/* =========== home section end =========== */}

      {/* =========== help  section start =========== */}
      <section>
        <div className="container">

          <div className="lg:w-[470px] mx-auto ">
            <h2 className='heading text-center'>Providing the Best Medical Service</h2>
            <p className='text__para text-center'>World class care for everyone. Our health system offers unmatched, expert health care.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]   ' >
            <div className='py-[30px] px-5'>

              <div className='flex items-center justify-center rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-irisBlueColor shadow-md '> <img className='' src={icon01} alt='' /> </div>
              <div className='mt-[30px] '>

                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>

                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:text-irisBlueColor'>
                  World class care for everyone. Our health system offers
                  unmatched, expert health care.From the lab to the  hospital</p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:border-none transition-all duration-300 ease-in-out hover:scale-105  hover:bg-irisBlueColor hover:shadow-black hover:shadow-xl '>

                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>

              <div className='flex items-center justify-center rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-irisBlueColor shadow-md'> <img className='' src={icon02} alt='' /> </div>
              <div className='mt-[30px] '>

                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Hospital</h2>

                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:text-irisBlueColor'>

                  World class care for everyone. Our health system offers
                  unmatched, expert health care.From the lab to the  hospital</p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group  hover:border-none transition-all duration-300 ease-in-out hover:scale-105  hover:bg-irisBlueColor hover:shadow-black hover:shadow-xl '>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>

              <div className='flex items-center justify-center rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-irisBlueColor shadow-md'> <img className='' src={icon03} alt='' /> </div>
              <div className='mt-[30px] '>

                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>

                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:text-irisBlueColor'>
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the  hospital</p>

                {/* ======== Arrow icon ======== */}
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group  hover:border-none transition-all duration-300 ease-in-out hover:scale-105  hover:bg-irisBlueColor hover:shadow-black hover:shadow-xl '>

                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* =========== help  section end =========== */}

      {/* ============ About section start ================  */}
      <About />
      {/* ============ About section end ================  */}

      {/* ============ Services section start ================  */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center '>Our Services</h2>
            <p className='text__para text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, molestiae facere! Maiores deleniti explicabo officiis omnis dicta ullam optio.</p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* ============ Services section end ================  */}

      {/* =========== features  section start =========== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ======== Features content ========== */}
            <div className="xl:w-[670px]">
              <h2 className='heading'>
                Get Virtual Treatment <br /> Anytime
              </h2>
              <ul className="pl-4 ">
                <li className='text__para transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-400 shadow-md'>1. Shedule the appointment directly</li>

                <li className='text__para transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-400 shadow-md'>2. Search for your doctors and contacnt their office</li>

                <li className='text__para transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-400 shadow-md'>3. View our doctors who accepting new patients, use the online sheduling tool to select an Appointment time</li>

                <li className='text__para transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-400 shadow-md' >4. Find hospital where  your doctor is located</li>

              </ul>
              <Link to='/'><button className='btn transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>Know More</button></Link>
            </div>
            {/* ========= Features images ========== */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} alt='feature image' className='w-3/4' />

              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[5px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] ld:leading-5 text-headingColor fomt-[600]  '>Tue, 24 </p>

                    <p className='text-[10px] leading-[10px] lg:text-[14px] ld:leading-5 text-headingColor fomt-[600]  '> 10:00AM</p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} alt='video icon' />

                  </span>

                </div>
                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]  leading-[8px] lg:text-[15px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-black hover:shadow-xl'>Consulation</div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} alt='avatar icon' />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>James Musk</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========== features  section end =========== */}

      {/* =========== our doc  section start =========== */}
      <section>
        <div className="container">

          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center '>Our Great Doctors</h2>
            <p className='text__para text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, molestiae facere! Maiores deleniti explicabo officiis omnis dicta ullam optio.</p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* =========== our doc  section end =========== */}

      {/* =========== FAQ  section start =========== */}
      <section>
        <div className="container">
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt='Faq  image' />
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='heading font-bold'>Question Raised by Users</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* =========== FAQ  section end =========== */}

      {/*=============== testimonials section start ================*/}
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
      {/*=============== testimonials section start ===============*/}
    </>

  )
}

export default Home
