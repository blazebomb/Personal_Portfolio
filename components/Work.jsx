import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[8%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg '>My Portfolio</h4>
      <h2 className='text-center text-5xl '>My Latest Work</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        Welcome to my web development portfolio! Explore a collection of my projects showcasing my expertise in full-stack development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workData.map((project, index) => (
          <div 
            key={index} 
            className="relative p-6 rounded-lg bg-cover bg-center text-white shadow-lg hover:shadow-xl transition duration-300"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-black bg-opacity-50 p-4 rounded-lg">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm mt-2">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 flex items-center gap-2 text-blue-400 hover:underline"
              >
                View Project
                <Image src={assets.send_icon} alt="send icon" width={20} height={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
