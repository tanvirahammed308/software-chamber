import React from 'react'
import logo from '../../assets/images/logo.png'
import frame from '../../assets/images/Frame.png'
import frame2 from '../../assets/images/frame2.png'

const Header = () => {
  return (
    <div className=' container mx-auto  mt-5  px-5 md:px-0'>
        <nav className='flex justify-between items-center'>
            <div>
                <img src={logo} alt="logo" className='h-10'/>
            </div>
            <div className='flex items-center gap-2'>
                <button className='bg-[#5a5b61] text-white p-2 rounded-lg flex items-center gap-1'>
                    contact us
                    <img src={frame} alt="" className='h-6'/>
                </button>
                <button>
                    <img src={frame2} alt="" className='h-10'/>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Header