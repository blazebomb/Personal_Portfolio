import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Link from 'next/link';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className='relative text-center px-4 sm:px-8 lg:px-16 pt-24 pb-12'>
      
      {/* Profile Image */}
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className='flex justify-center'>
        <Image 
          src={assets.profile_img} 
          alt='' 
          className='rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg' 
        />
      </motion.div>

      {/* Greeting Text */}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        className='flex justify-center items-center gap-2 text-xl md:text-2xl mb-6 mt-4'
      >
        Hey There! It's Me Ashish Kumar
        <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>

      {/* Main Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, delay: 0.4 }}
        className='text-3xl sm:text-5xl lg:text-6xl font-bold mb-8'
      >
        Fullstack Developer based in India
      </motion.h1>

      {/* Description with Highlighted Text */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, delay: 0.6 }}
        className='max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed'
      >
        I am a Full Stack Developer from Bhopal, India, skilled in React, Node.js, Express, MongoDB, and Next.js, passionate about building scalable web apps.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.8 }}
        className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-8'
      >
        <Link href='#contact' className='px-8 py-3 border border-black rounded-full bg-black text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2'>
          Contact Me 
          <motion.div 
            whileHover={{ x: 5 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image src={assets.right_arrow_white} alt='' className='w-4' />
          </motion.div>
        </Link>

        <Link href='/ashish-PortFolio.pdf' download className='px-8 py-3 border border-gray-500 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2'>
          My Resume 
          <motion.div 
            whileHover={{ y: -3 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image src={assets.download_icon} alt='' className='w-4' />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
