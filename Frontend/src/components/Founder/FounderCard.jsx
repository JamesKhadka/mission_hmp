import { Link } from "react-router-dom"
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';


const FounderCard = ({ founder }) => {

  const { name, specialization, photo } = founder

  const socialLinks = [
    {
      path: "https://www.instagram.com/james_khadka__/ ",
      icon: <AiOutlineInstagram className='group-hover:text-[#E1306C] w-6 h-6 ' />
    },

    {
      path: "https://github.com/JamesKhadka",
      icon: <AiFillGithub className='group-hover:text-black w-6 h-6' />
    },
    {
      path: "https://www.linkedin.com/in/james-khadka-26b100236/",
      icon: <RiLinkedinFill className='group-hover:text-[#0A66C2] w-6 h-6' />
    },
  ]

  return (
    <div className='p-5 lg:p-5 rounded-xl transition-all duration-300 ease-in-out hover:scale-105  hover:shadow-black hover:shadow-xl'>
      <div> <img src={photo} alt='' className='w-full' /> </div>

      <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 '>{name}</h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">

        <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[14px] leading-4 lg:text-[16px]lg:leading-7 font-bold rounded'>{specialization}</span>
      </div>
      <div className='flex items-center gap-3 mt-4 '>
        {socialLinks.map((link, index) =>
          <Link to={link.path} key={index} className='w-10 h-10 border border-solid border-cyan-400 rounded-full flex items-center justify-center group  hover:border-none transition-all duration-300 ease-in-out hover:scale-105  hover:bg-cyan-300 hover:shadow-black hover:shadow-xl'>
            {link.icon}
          </Link>
        )}
      </div>

    </div>
  )
}




export default FounderCard