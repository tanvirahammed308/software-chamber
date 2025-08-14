import React from 'react'
import img from '../assets/images/Star.png'
import frame from '../assets/images/Frame.png';
import development from '../assets/images/development.png'

const Development = () => {
  return (
    <div className="bg-linear-to-r from-[#090B0F] to-[#0c1f20] text-white  w-full  px-5 md:px-0 mt-20 pt-10">
        <div className=' container mx-auto  mt-5  px-5 md:px-0 flex flex-col justify-center items-center'>
          <div className='text-white flex justify-center items-center gap-2 bg-gradient-to-r from-[#0b3833] to-[#0d3e38] px-2 py-1 rounded-full w-[260px] shadow-md'>
                         <img src={img} alt="" />
                         <p>Smarter Idea, instant solutions</p>
                     </div>
                     <div className='flex flex-col justify-center items-center space-y-5 mt-5 font-bold'>
                        <h1 className='text-4xl flex flex-col text-center '>Our Software 
<span className='mt-2 text-[#A5A5A5] '>Development Process</span></h1>
<p className='text-sm text-[#808080] flex flex-col  text-center'>Deliver personalized experiences to your customers with AI-powered recommendation <span>engines and dynamic content generation.</span> </p>
<button className='bg-[#5a5b61] text-white p-2 rounded-lg flex items-center gap-1'>
                    contact us
                    <img src={frame} alt="" className='h-6'/>
                </button>
                     </div>
                     <div className='mt-10'>
                        <img src={development} alt="" className='w-full md:w-5xl'/>
                     </div>

        </div>
    </div>
  )
}

export default Development