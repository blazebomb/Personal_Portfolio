import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useState } from 'react';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d102cdce-db36-4ddf-96e9-8967e1d2ac8f");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div id='contact' className='w-full px-[8%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg'>Connect With Me</h4>
      <h2 className='text-center text-5xl'>Get In Touch</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700'>
        Interested in working together or have any questions? Feel free to reach out! I'm always open to discussing new projects, opportunities, or collaborations.
      </p>

      <form onSubmit={onSubmit} className='max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md'>
        <div className='flex flex-col sm:flex-row gap-4'>
          <input 
            type='text' 
            placeholder='Enter Your Name' 
            required 
            className='w-full sm:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
            name='name'
          />
          <input 
            type='email' 
            placeholder='Enter Your Email' 
            required 
            className='w-full sm:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
            name='email'
          />
        </div>
        <textarea 
          rows="6" 
          placeholder='Enter your message' 
          required 
          className='w-full mt-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none'
          name='message'
        />
        <button 
          type='submit' 
          className='w-full mt-5 p-3 bg-gray-950 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer flex justify-center items-center gap-2'
        >
          Submit Your Query
          <Image src={assets.right_arrow_white} alt='Arrow' width={20} height={20} />
        </button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  );
};

export default Contact;
