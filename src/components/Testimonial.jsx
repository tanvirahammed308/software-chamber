import React from 'react'
import img from '../assets/images/Star.png'
import logo from '../assets/images/logo2.png'
import avatar from '../assets/images/avatar.png'

const Testimonial = () => {
  return (
    
      
 <div className='bg-gradient-to-r from-[#0a1316] to-[#090b0f] py-12 mt-20'>
        <div  className=' container mx-auto  mt-5  px-5 md:px-0 flex flex-col items-center justify-center w-full'>
            <div className='text-white flex justify-center items-center gap-2 bg-gradient-to-r from-[#0b3833] to-[#0d3e38] px-2 py-1 rounded-full w-[260px] shadow-md'>
                <img src={img} alt="" />
                <p>Smarter Idea, instant solutions</p>
            </div>
            <h1 className='text-[#E9E9E9] mt-5 text-4xl font-bold md:flex flex-col justify-center items-center text-center'>Don’t just take our word for it. Hear <span>what our clients say </span> </h1>

            {/* card */}

            <div className='mt-16 bg-[#090B0F] py-8 px-8 rounded-lg border-2 shadow-lg w-full md:w-[800px]'>
              <p className='text-[#E9E9E9] flex flex-col'>"Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus <span>phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet </span><span>commodo."</span> </p>

              <div className='flex justify-between items-center mt-8'>
                <div className='flex gap-3 items-center text-[#E9E9E9]'>
                  <div className='w-12'>
                  <img src={avatar} alt="" className=''/>

                  </div>
                  <div>
<h3 className='text-sm'>Alex Larkins</h3>
                  <p className='text-xs text-[#A5A5A5]'>Art director at Airbnb</p>
                  </div>
                  
                  <div>

                  </div>
                </div>
                <div>
                  <img src={logo} alt="" className='w-21'/>
                </div>
              </div>
            </div>

        </div>
    </div>

   
  )
}

export default Testimonial