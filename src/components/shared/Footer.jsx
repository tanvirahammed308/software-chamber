import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import footer_img from '../../assets/images/footer-img.png'

const Footer = () => {
  return (
    <div className='bg-linear-to-r from-[#090B0F] to-[#0c1f20] mt-10'>
      <footer className='text-white container mx-auto py-8 px-5 md:px-0'>
        <div>
 <h1 className='text-5xl font-bold'>LET'S TALK</h1>
        </div>
       
        <div className='mt-10 md:mt-2 '>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className=''>
            <p className='w-full md:w-[300px] text-sm text-gray-400'>A new era of energy, elegance, and elite competition begins here. Where passion meets performance on the court like never before.</p>
            <div className='mt-5'>
              <h5 className='font-semibold mb-3'>Social media</h5>
              <div className='grid grid-cols-3'>
                <div className='flex items-center text-sm text-gray-400'>
                  <h5>Instagram</h5>
                  <MdArrowOutward />

                </div>
                <div className='flex items-center text-sm text-gray-400'>
                  <h5>Twitter</h5>
                  <MdArrowOutward />

                </div>
                <div className='flex items-center text-sm text-gray-400'>
                  <h5>Tiktok</h5>
                  <MdArrowOutward />

                </div>
                <div className='flex items-center text-sm text-gray-400'>
                  <h5>Facebook</h5>
                  <MdArrowOutward />

                </div>
                <div className='flex items-center text-sm text-gray-400'>
                  <h5>Linkedin</h5>
                  <MdArrowOutward />

                </div>
                <div className='flex items-center text-sm text-gray-400'>
                  <h5>Youtube</h5>
                  <MdArrowOutward />

                </div>
              </div>
            </div>
          </div>
          <div className='mt-16'>
            <div>
              <h5 className='font-semibold'>Address</h5>
              <p className='text-sm text-gray-400 my-3 w-32'>1901 thornridge Cir, 
Shiloh, Hawaii 81063</p>
            </div>
            <div>
              <h5 className='font-semibold'>Phone</h5>
              <p className='text-sm text-gray-400 my-3'>[+1] 872-298-3989</p>
            </div>
            <div>
              <h5 className='font-semibold'>Email</h5>
              <p className='text-sm text-gray-400 my-3'>hello@tranzit. com</p>
            </div>
          </div>
          <div className='mt-16'>
            <img src={footer_img} alt="" className='h-52'/>
          </div>

          </div>
          
        </div>

        <div className='mt-16 border border-gray-500 border-dashed mb-2'></div>

        <div className='flex flex-col space-y-3 md:flex-row md:justify-between md:items-center pt-2 text-gray-400 text-sm'>
          <p className='text-center md:text-left'>2024 Software Chamber All Right Reserved</p>
          <div className='flex justify-between items-center gap-10 text-sm text-gray-400'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
        
    </div>
  )
}

export default Footer