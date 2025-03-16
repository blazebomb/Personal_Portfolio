import { serviceData } from '@/assets/assets'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[8%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg '>What I Offer</h4>
        <h2 className='text-center text-5xl '>My Services</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
          As a passionate full-stack developer, I am eager to contribute to web development projects through an internship. I have hands-on experience with React, Next.js, Node.js, Express, and MongoDB, allowing me to build responsive UIs, develop REST APIs, and manage databases. I am also skilled in authentication, debugging, and optimizing performance. With a strong problem-solving mindset and willingness to learn, I am ready to collaborate and grow in a professional environment.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {serviceData.map(({ title, description, link }, index) => (
                <div key={index} className='p-5 border rounded-lg shadow-md hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500'>
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5 text-blue-600 hover:underline'>
                        Read More
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services
