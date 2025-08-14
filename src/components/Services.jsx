import React from 'react'
import img from '../assets/images/services.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { GoArrowUpRight } from 'react-icons/go'

const Services = () => {
  return (
    <div className='mt-20 container mx-auto   px-5 md:px-0'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
                <h1 className='text-[#0C0C0C] font-semibold text-2xl md:text-6xl'>Services</h1>
                <img src={img} alt="" className='w-5 md:w-12'/>
            </div>
            <div >
                <button className='flex gap-2 items-center'>
                    <h5>All Services</h5>
                <div className=' bg-[#F3F3F3] px-2 py-2 rounded-full'>
 <IoIosArrowRoundForward />

                </div>

                </button>
                
               
            </div>
        </div>
        {/* card */}

        <div className='mt-10 flex flex-col justify-between md:flex-row gap-5'>
            <div className='bg-[#F3F3F3] p-5 space-y-10 rounded-md w-full md:w-[500px]'>
                <h1 className='text-[#0C0C0C] text-2xl font-bold'>Web & Mobile App Devolopment</h1>
                <p className='text-sm text-[#808080]'>Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                <button className='bg-[#FFFFFF] p-2 rounded-full'>
                    <GoArrowUpRight />


                </button>

            </div>
            <div className='bg-[#27B4A3] p-5 space-y-10 rounded-md w-full md:w-[500px] '>
                <h1 className='text-[#ffffff] text-2xl font-bold flex flex-col'>Application <span>Software Services</span></h1>
                <p className='text-sm text-[#ffffff]'>Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                <button className='bg-[#FFFFFF] p-2 rounded-full'>
                    <GoArrowUpRight />


                </button>

            </div>
            <div className='bg-[#F3F3F3] p-5 space-y-10 rounded-md w-full md:w-[500px]'>
                <h1 className='text-[#0C0C0C] text-2xl font-bold flex flex-col'>Software Coding <span>& Optimuation</span> </h1>
                <p className='text-sm text-[#808080]'>Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                <button className='bg-[#FFFFFF] p-2 rounded-full'>
                    <GoArrowUpRight />


                </button>

            </div>
        </div>
    </div>
  )
}

export default Services