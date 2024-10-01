import React from 'react'
import { Link } from 'react-router-dom'
import mainlogo from '../../assets/images/mainlogo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineInstagram, AiFillFacebook, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.instagram.com/james_khadka__/ ",
    icon: <AiOutlineInstagram className='group-hover:text-[#E1306C] w-6 h-6 ' />
  },
  {
    path: "https://www.facebook.com/Bheshraj.Beshraz?mibextid=ZbWKwL",
    icon: <AiFillFacebook className='group-hover:text-blue-600 w-6 h-6' />,

  },

  {
    path: "https://github.com/JamesKhadka",
    icon: <AiFillGithub className='group-hover:text-black w-6 h-6' />
  },
  {
    path: "https://www.linkedin.com/in/james-khadka-26b100236/",
    icon: <RiLinkedinFill className='group-hover:text-[#0A66C2] w-6 h-6' />
  },
  {
    path: "https://x.com/James_khadka__",
    icon: <AiFillTwitterCircle className='group-hover:text-blue-500 w-6 h-6' />
  },
]

const quickLinks01 = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/",
    display: "About Us"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/",
    display: "Blog"
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor"
  },
  {
    path: "/",
    display: "Request an Appointment"
  },
  {
    path: "/",
    display: "Fina a Hospital Location"

  },
  {
    path: "/",
    display: "Get a Opinion"
  },
]

const quickLinks03 = [
  {
    path: "/",
    display: "Donate"
  },
  {
    path: "/contact",
    display: "ontact Us"
  },
]

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div >
            <img src={mainlogo} alt='footor logo' className="w-[24%] h-[30%] bg-cyan-500 rounded-full object-contain" />
            <p className='text-[16px] leading-7 font-[400] text-cyan-500 mt-4'>
              copyright @ {year}. Deployed by team MediConnect. All rights reserved.
            </p>
            <div className='flex items-center gap-3 mt-4 '>
              {socialLinks.map((link, index) =>
                <Link to={link.path} key={index} className='w-10 h-10 border border-solid border-cyan-400 rounded-full flex items-center justify-center group  hover:border-none transition-all duration-300 ease-in-out hover:scale-105  hover:bg-cyan-300 hover:shadow-black hover:shadow-xl'>
                  {link.icon}
                </Link>
              )}
            </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Quick Links</h2>
            <ul>
              {quickLinks01.map((item, index) => <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-cyan-500 transition-all duration-300 ease-in-out hover:scale-105  hover:bg-white hover:shadow-black hover:shadow-xl'>{item.display}
                </Link>
              </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>I Want To</h2>
            <ul>
              {quickLinks02.map((item, index) => <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-cyan-500 transition-all duration-300 ease-in-out hover:scale-105  hover:bg-white hover:shadow-black hover:shadow-xl'>{item.display}
                </Link>
              </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>Support</h2>
            <ul>
              {quickLinks03.map((item, index) => <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-cyan-500 transition-all duration-300 ease-in-out hover:scale-105  hover:bg-white hover:shadow-black hover:shadow-xl'>{item.display}
                </Link>
              </li>
              )}
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
