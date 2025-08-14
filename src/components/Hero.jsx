import React from "react";


import { TiStarFullOutline } from "react-icons/ti";
import hero2 from '../assets/images/hero2.png';
import frame from '../assets/images/Frame.png';
import hero3 from '../assets/images/hero3.png'

const Hero = () => {
  return (
    <div className="bg-linear-to-r from-[#090B0F] to-[#0c1f20] text-white  w-full pt-10 px-5 md:px-0 -mt-20 py-10">
      <div className="container mx-auto pt-10 text-white">
        <div className="flex justify-center items-center mt-10">
          <button className="flex items-center gap-2 bg-linear-to-r from-[#0d3c36] to-[#0c1f20]  px-5 rounded-full py-2 text-sm text-gray-300 shadow">
            <TiStarFullOutline className="text-linear-to-r from-[#189c91] to-[#0c1f20] bg-clip-text" />
            Smarter Idea, instant soultions
          </button>
          
        </div>
        <div className="text-center mt-5 ">
  <h1 className="font-semibold text-3xl md:text-7xl w-full md:w-[60%] md:mx-auto leading-6 md:leading-14">
    <span className="text-[#16FFE2]">We are your Software</span> Development{" "}
    <span className="inline-flex items-center  relative top-7 md:top-14 mb-5 ">
      <img src={hero2} alt="" className="w-[50px] md:w-[110px]  " />
    </span>{" "}
    Team in The Cloud
  </h1>
</div>
<div className="flex justify-center items-center mt-10">
<button className='bg-[#5a5b61] text-white p-2 rounded-lg flex items-center gap-1'>
                    contact us
                    <img src={frame} alt="" className='h-6'/>
                </button>
</div>
 
{/* bento card */}
<div className="mt-10">
  <div className="bg-[#262c32] w-full md:w-3xl mx-auto p-5 rounded-lg flex flex-col md:flex-row gap-8">
  <div>
    <img src={hero3} alt="" />
  </div>
  <div className="mt-16 space-y-6 ">
    <h3 className="font-semibold text-2xl w-full md:w-48 text-gray-200">Software Service Solutions</h3>
    <p className="w-full md:w-44 text-gray-400">Plan, track, and manage projects with precision tools.</p>
    <button className="bg-[#253337] px-8 py-2 rounded-full shadow-2xl font-semibold text-xl text-gray-300">Discover</button>
  </div>
  </div>

</div>
        
      </div>
    </div>
  );
};

export default Hero;
