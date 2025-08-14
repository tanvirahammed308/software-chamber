import React from 'react'
import company from '../assets/images/company.png'
import star from '../assets/images/Star.png';
import banner_logo from '../assets/images/banner-logo.png';
import frame from '../assets/images/Frame.png';
import group from '../assets/images/group.png'

const Company = () => {
  return (
    <div className="bg-linear-to-r from-[#090B0F] to-[#0c1f20] text-white  w-full  px-5 md:px-0 mt-20 pt-10">
        <div className="container mx-auto py-10 ">
            <div className='flex flex-col-reverse items-center md:flex-row gap-3 justify-between'>
                <h1 className='text-4xl md:text-6xl  font-semibold flex flex-col md:leading-15'>Our Stack Powers of <span>the <span className='text-[#A5A5A5]'>World’s</span>  Most</span> <span className='text-[#A5A5A5]'>Beloved Companies</span>  </h1>
                <img src={company} alt="" className='w-[250px] md:w-[400px]'/>
            </div>
            {/* card */}
            <div className='bg-linear-to-r from-[#0d1418] to-[#0c1f20] flex flex-col justify-center items-center py-10 border-2 border-[#22C1AD99] rounded-lg mt-10'>
                <div className='text-white flex justify-center items-center gap-2 bg-gradient-to-r from-[#0b3833] to-[#0d3e38] px-2 py-1 rounded-full w-[260px] shadow-md'>
                                         <img src={star} alt="" />
                                         <p>Smarter Idea, instant solutions</p>
                                     </div>

                                     <img src={banner_logo} alt="" className='w-14 mt-10'/>
                                     <h1 className='text-4xl font-semibold flex flex-col text-center leading-10 mt-8 text-[#E9E9E9]'>Uncover the Design and Development Projects <span className='text-[#A5A5A5]'>That Set Us Apart</span> </h1>

                                     <button className='bg-[#5a5b61] text-white p-2 rounded-lg flex items-center gap-1 mt-10'>
                                                         contact us
                                                         <img src={frame} alt="" className='h-6'/>
                                                     </button>

            </div>
            <div className='mt-20 flex  flex-col items-center justify-center'>
                 <div className='text-white flex justify-center items-center gap-2 bg-gradient-to-r from-[#0b3833] to-[#0d3e38] px-2 py-1 rounded-full w-[260px] shadow-md'>
                                         <img src={star} alt="" />
                                         <p>Smarter Idea, instant solutions</p>
                                     </div>

                                     <div className='mt-10'>
                                        <img src={group} alt="" />
                                     </div>


            </div>

        </div>
    </div>
  )
}

export default Company