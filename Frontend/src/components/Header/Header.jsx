import React, { useEffect, useRef, useContext } from 'react';
import mainlogo from '../../assets/images/mainlogo.png';
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { authContext } from '../../context/AuthContext'

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/hospital',
    display: 'Hospitals'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]


const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext)


  //  all these function are for  the menu toggle and the sticky header functionality

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 60) {
        headerRef.current.classList.add('sticky_header');
      }
      else {
        headerRef.current.classList.remove('sticky_header');
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  });


  const toggleMenu = () => {
    menuRef.current.classList.toggle('show_menu');
  }


  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">

          {/*======== Logo ===========*/}
          <div className="flex items-center">
            <img src={mainlogo} alt="logo" className="w-[24%] h-[30%]  mb-4 " />
            <p className="text-irisBlueColor text-[30px] font-extrabold cursor-pointer flex m-0 p-0">
              Medi<span className="sm:block hidden">Connect</span>
            </p>
          </div>

          {/*======== menu ===========*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[3rem] '>
              {
                navLinks.map((link, index) => <li key={index}>
                  <NavLink
                    to={link.path}
                    className={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]" : "text-textColor text-[16px] leading-7  font-bold  hover:text-irisBlueColor hover:shadow-irisBlueColor hover:shadow-lg"}>
                    {link.display}
                  </NavLink>
                </li>)
              }
            </ul>
          </div>

          {/* ========= profile icon ======== */}
          {/* need to fix */}
          <div className='flex items-center gap-4'>

            {
              token && user ? <div>
                <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                  <figure className='w-[35px] h-[35px] rounded-full '>
                    <img src={user?.photo} className='w-full rounded-full' alt='' />
                  </figure>
                </Link>
              </div> : <Link to='/login'>
                <button className='bg-irisBlueColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl' >Login</button>
              </Link>
            }
          </div>

          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>

        </div>
      </div>
    </header >
  );
}

export default Header;

