import React from 'react'
import Image from 'next/image'
import img  from '../../../public/drivelink-icon.png'
import menu  from '../../../public/menu.png'
import Link from 'next/link'
import { useSectionRef } from '@/context/SectionRefContext'

// type HeaderProps = {
//   scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
//   heroSectionRef: React.RefObject<HTMLDivElement>;
//   aboutSectionRef: React.RefObject<HTMLDivElement>;
//   howSectionRef: React.RefObject<HTMLDivElement>;
//   downloadAppSectionRef: React.RefObject<HTMLDivElement>;
// };
// : React.FC<HeaderProps> 

const Header= ()=> {
  const { heroSectionRef, aboutSectionRef, howSectionRef, downloadAppSectionRef, scrollToSection } = useSectionRef();
  return (
    // fixed top-0 left-0 w-full z-[99]
    <div className=' header bg-[rgba(235,241,255,0.3)]   ' >
      <div className="header-content min-h-[10vh] max-w-[1200px] mx-[auto] flex justify-between items-center  p-[20px] sm:p-0  ">
        <div 
        
         className="logo w-[135px] flex items-center justify-between cursor-pointer ">
          <Link href={'/'}>
          <div className="drivelink-img w-[42px] ">
          
          <Image src={img} alt='Drivelink icon' />
          
          </div>
          </Link>
          <Link href={'/'}>
          <span className='text-[20px] text-[#2E396D] font-[500]'>
          
            Drivelink
          
            </span>
          </Link>
        </div>
        <nav className='hidden sm:block' >
            <ul className='flex text-[16px] w-[200px] justify-between font[400]   ' >
              <li
              onClick={() => scrollToSection(aboutSectionRef)}
               className='cursor-pointer hover:underline '>About us</li>
              <li 
               onClick={() => scrollToSection(howSectionRef)}
              className='font-[400] cursor-pointer hover:underline'>How it Works</li>
              {/* <li className='cursor-pointer hover:underline'>Services</li> */}
            </ul>
        </nav>
        <div className="nav-btn font-[400] flex gap-[16px] hidden sm:flex  ">
        <Link href={'/contact'}>
          <button className='bg-white w-[120px] h-[44px] text-[#101f91] font-[400] p-[16px] flex justify-center items-center d-block  rounded-[8px] cursor-pointer '>
          Contact us
            </button>
        </Link>
          <button 
          onClick={() => scrollToSection(downloadAppSectionRef)}
           className='bg-[#101f91] text-white w-[128px] h-[44px] font-[400] p-[16px] rounded-[8px] flex justify-center items-center d-block cursor-pointer '>Download</button>
        </div>
        <div  className="mobile-icon w-[15px] h-[13px] sm:hidden  ">
          <Image className='w-[100%]' src={menu} alt='menu-icon' />
        </div>
      </div>
    </div>
  )
}

export default Header