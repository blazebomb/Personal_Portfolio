import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  // Reference for side menu to manipulate its position
  const sideMenuRef = useRef();

  // Function to open mobile menu (brings it into view)
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  // Function to close mobile menu (hides it)
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(scrollY > 50){
        setIsScrolled(true);
      } else{
        setIsScrolled(false);
      }
    })
  }, [])

  return (
    <>
      {/* Background Image for Navbar */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' layout="responsive" width={1920} height={500} className='w-full' />
      </div>

      {/* Main Navbar */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? " bg-opacity-50 backdrop-blur-lg shadow-sm": ""}`}>
        
        {/* Logo */}
        <Link href="#top">
          <Image src={assets.logo} alt="" width={112} height={40} className="w-28 cursor-pointer mr-14" />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li><Link href="#top">Home</Link></li>
          <li><Link href="#about">About me</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#work">My Work</Link></li>
          <li><Link href="#contact">Contact Me</Link></li>
        </ul>

        {/* Right Side Icons & Mobile Menu Button */}
        <div className='flex items-center gap-4'>
          {/* Dark Mode Toggle Button */}


          {/* Contact Button (Visible on Larger Screens) */}
          <Link href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-800 rounded-full ml-4'>
            Contact <Image src={assets.arrow_icon} alt="" width={12} height={12} className="w-3" />
          </Link>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6'/>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul 
          ref={sideMenuRef} 
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-[-16rem] top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500'
        >
          {/* Close Button for Mobile Menu */}
          <div className='absolute top-6 right-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>

          {/* Mobile Menu Links */}
          <li><Link onClick={closeMenu} href="#top">Home</Link></li>
          <li><Link onClick={closeMenu} href="#about">About me</Link></li>
          <li><Link onClick={closeMenu} href="#services">Services</Link></li>
          <li><Link onClick={closeMenu} href="#work">My Work</Link></li>
          <li><Link onClick={closeMenu} href="#contact">Contact Me</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

