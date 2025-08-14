import React from 'react'
import img from '../assets/images/conatact.png'
import { GoArrowUpRight } from 'react-icons/go'

const Contact = () => {
  return (
    <div className='container mx-auto mt-10 md:mt-20  px-5 md:px-0 '>
        <div className='flex flex-col justify-center items-center  '>
            <h1 className='text-2xl md:text-5xl font-bold md:flex flex-col text-center'>Let’s talk about your next
                <span> project. <span className='text-[#A5A5A5]'>We’re here to help.</span> </span></h1>
            <p className='text-[#A5A5A5] md:flex flex-col text-center mt-3'>Deliver personalized experiences to your customers <span>with AI-powered recommendation engines and</span>  dynamic content generation.</p>
        </div>
        <div className='mt-16 flex flex-col md:flex-row gap-10'>
            {/* picture */}
            <div className='w-full md:w-2/5'>
<img src={img} alt="" className='h-[550px]'/>
            </div>
            {/* form */}
            <div className='w-full md:w-3/5'>
                <form action="" className='space-y-7'>
                    <div className=' w-full'>
                        <input type="text" placeholder='First Name' className='bg-[#F3F3F3] outline-none w-full p-2 rounded-md'/>
                    </div>
                    <div className=' w-full mt-3'>
                        <input type="text" placeholder='Last Name' className='bg-[#F3F3F3] outline-none w-full p-2 rounded-md'/>
                    </div>
                    <div className=' w-full mt-3'>
                        <input type="email" placeholder='Email' className='bg-[#F3F3F3] outline-none w-full p-2 rounded-md'/>
                    </div>
                    <div className=' w-full mt-3 flex gap-2 '>
                        <select name="" id="" className='bg-[#F3F3F3] rounded-md text-gray-500'>
                            <option value="880">+880</option>
                            <option value="880">+980</option>
                        </select>
                        <input type="text" placeholder='Phone' className='bg-[#F3F3F3] outline-none w-full p-2 rounded-md'/>
                    </div>
                    <div className=' w-full mt-3'>
                        <input type="text" placeholder='Job Title' className='bg-[#F3F3F3] outline-none w-full p-2 rounded-md'/>
                    </div>
                    <div className=' w-full mt-3'>
                        <textarea type="text" placeholder='Your Message' className='bg-[#F3F3F3] outline-none w-full p-2 rounded-md' rows="4" cols="50"/>
                      
                    </div>
                    <button type='submit' className='bg-gradient-to-r from-[#2CCEBA] to-[#16AD71] px-5 py-2 rounded-full text-white flex justify-between items-center gap-2 w-36'>Submit
                        <div className='p-1 rounded-full bg-white text-gray-400'>
                            <GoArrowUpRight />

                        </div>
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact