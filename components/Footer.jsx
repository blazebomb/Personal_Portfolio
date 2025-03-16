import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
  return (
    
    <>
    <div className='mt-20 bg-gray-700 text-white py-10'>
      {/* Logo and Email */}
      <div className='text-center'>
        <Image src={assets.logo} alt='Logo' width={144} height={50} className='mx-auto mb-4' />
        
        <div className='w-max flex items-center gap-2 mx-auto text-gray-300'>
          <Image src={assets.mail_icon} alt='Mail Icon' width={24} height={24} />
          <span className='text-sm'>ashishkumar850601@gmail.com</span>
        </div>
      </div>

      {/* Divider */}
      <div className='w-full h-[1px] bg-gray-950 my-6'></div>

      {/* Social Links */}
      <div className='flex justify-center gap-6 mb-6'>
        <a href='https://github.com/blazebomb' target='_blank' rel='noopener noreferrer'>
          <Image src={assets.github_icon} alt='GitHub' width={30} height={30} className='hover:opacity-75 transition duration-300' />
        </a>
        <a href='https://www.linkedin.com/in/ashish-kumar-11a03125a/' target='_blank' rel='noopener noreferrer'>
          <Image src={assets.linkedin_icon} alt='LinkedIn' width={30} height={30} className='hover:opacity-75 transition duration-300' />
        </a>
      </div>

      {/* Copyright Section */}
      <div className='text-center text-gray-400 text-sm'>
        <p>© {new Date().getFullYear()} Ashish Kumar. All rights reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
