import React from 'react'
import img1 from '../assets/images/digital-solution.png'
import img2 from '../assets/images/digital.png'

const Digital = () => {
  return (
    <div className='container mx-auto  mt-20  px-5 md:px-0'>
        <div>
            <img src={img1} alt="" className=''/>
        </div>
    {/* content */}
    <div className='mt-8 flex flex-col md:flex-row gap-5 justify-around  '>
        <div  className='text-center md:text-start'>
            <div>
                <h1 className='font-semibold text-3xl'>20+</h1>
                <p className='font-semibold text-gray-400 mt-2'>Tech Partners</p>
            </div>
            <div className='mt-5'>
                <h1 className='font-semibold text-3xl'>150+</h1>
                <p className='font-semibold text-gray-400 mt-2'>Project Completed</p>
            </div>
            <div className='mt-5'>
                <h1 className='font-semibold text-3xl'>1K+</h1>
                <p className='font-semibold text-gray-400 mt-2'>Satisfied Customers</p>
            </div>
        </div>
        <div>
            <img src={img2} alt="" className='h-80'/>
        </div>
        <div className=' space-y-5'>
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-[#27B4A3] px-2 rounded-full w-[50px] h-[50px] flex justify-center items-center
'>
                    <h5 className=' font-semibold bg-white px-2 rounded-full  text-[#436255]'>1</h5>
                </div>
                <div>

                <h1 className='font-bold'>Your Team in the cloud</h1>
                <p className='text-gray-400 text-sm w-[250px] ' >We Hire Best and brightest Talents to build world class technology</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-[#27B4A3] px-2 rounded-full w-[50px] h-[50px] flex justify-center items-center
'>
                    <h5 className=' font-semibold bg-white px-2 rounded-full  text-[#436255]'>2</h5>
                </div>
                <div>

                <h1 className='font-bold'>Grow more with less</h1>
                <p className='text-gray-400 text-sm w-[250px] ' >We have a competitive pricing structure</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-[#27B4A3] px-2 rounded-full w-[50px] h-[50px] flex justify-center items-center
'>
                    <h5 className=' font-semibold bg-white px-2 rounded-full  text-[#436255]'>3</h5>
                </div>
                <div>

                <h1 className='font-bold'>Weekly sprint and reviews</h1>
                <p className='text-gray-400 text-sm w-[250px] ' >Our fast review and feedback loop is designed to keep in you in the driver's seat</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-[#27B4A3] px-2 rounded-full w-[50px] h-[50px] flex justify-center items-center
'>
                    <h5 className=' font-semibold bg-white px-2 rounded-full  text-[#436255]'>4</h5>
                </div>
                <div>

                <h1 className='font-bold'>Communication First</h1>
                <p className='text-gray-400 text-sm w-[250px] ' >We use modem tools and services to collaborate</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Digital