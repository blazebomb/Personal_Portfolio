import React from 'react';
import Image from 'next/image';
import { assets, infoList , toolsData} from '@/assets/assets';

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      {/* Section Title */}
      <h4 className='text-center mb-2 text-lg '>Introduction</h4>
      <h2 className='text-center text-5xl '>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        {/* Profile Image */}
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>

        <div className='flex-1'>
          {/* About Me Text */}
          <p className='mb-10 max-w-2xl'>
            I am a <span className='font-bold text-black'>Full Stack Developer</span> from Bhopal, India, passionate about building scalable web applications. While currently pursuing a <span className='font-bold text-black'>B.Tech in Electronics and Communication Engineering</span>, my primary focus is on full-stack development, constantly learning and refining my skills in modern web technologies. I am proficient in <span className='font-bold text-black'>React, Node.js, Express, MongoDB, and Next.js</span>, and always eager to explore new technologies. I also have a solid grasp of <span className='font-bold text-black'>data structures and algorithms</span>.
          </p>

          {/* Information List (Education, Experience, etc.) */}
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li key={index} className='border-[0.5px] border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 duration-500 hover:shadow-lg'>
                {/* Icon */}
                <Image src={icon} alt='' className='w-6 mt-3' />
                <div>
                  {/* Title */}
                  <h3 className='font-semibold text-gray-700 my-4'>{title}</h3>
                  {/* Description */}
                  <p className='text-gray-600 text-small'>{description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className='my-t text-gray-700'>Important Tools I Use</h4>

          <ul className='flex gap-4 mt-4 flex-wrap sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500  hover:shadow-black'>
                <Image src={tool} alt='' className='w-5 sm:w-7' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

