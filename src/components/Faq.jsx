import React, { useState } from 'react'
import group_star from '../assets/images/group-star.png';
import frame3 from '../assets/images/Frame3.png'
import { IoIosArrowDown, IoMdArrowForward } from 'react-icons/io';


const Faq = () => {
     const [openIndex, setOpenIndex] = useState(null);

     const faqs = [
    { question: "What software development services does your company offer?", answer: "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah." },
    { question: "What industries do you specialize in?", answer: "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah." },
    { question: "What sets your company apart from the competition?", answer: "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah." },
    { question: "Is my project idea and information kept confidential?", answer: "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='mt-20'>
        <div className="container mx-auto pt-10 px-5 md:px-0 ">
            <div className='text-xl md:text-5xl font-bold text-[#0C0C0C] text-center w-full md:w-[850px] mx-auto'>
               <h1 className=''>Comprehensive Answers to the Most 
                <img src={group_star} alt="" className='inline-block w-10' /> Common Questions <span className='text-[#A5A5A5]'>About Our</span> <span className='text-[#A5A5A5]'>Service</span>s <span className='text-[#A5A5A5]'>Work <img src={frame3} alt="" className='inline-block w-10' /></span></h1>
            </div>
            <div className='flex justify-between items-center mt-10 '>
                <h1 className='text-4xl font-bold'>FAQ</h1>
                <div className='flex items-center gap-2 '>
                    <h5 className='font-semibold'>All FAQ</h5>
                    <button className='bg-[#2CCEBA] p-2 rounded-full'>
<IoMdArrowForward />

                    </button>
                </div>
               
            </div>
             <div className='border border-[#A5A5A5] border-dashed mt-10'></div>
             <div>
             <div className='mt-20 max-w-5xl mx-auto'>
      

      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-4 border-[#A5A5A5]">
          <button
            className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold text-xl text-[#0C0C0C]">{faq.question}</span>
            <span className={`transform transition-transform px-2 ${openIndex === index ? "rotate-180" : ""}`}>
              <div
  className={`text-white p-2 rounded-full transition-colors duration-300 ${
    openIndex === index ? "bg-[#2CCEBA]" : "bg-[#0C0C0C]"
  }`}
>
  <IoIosArrowDown />
</div>

            </span>
          </button>

          {openIndex === index && (
            <p className="text-[#494949] pb-3 font-semibold text-sm">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
             </div>
           
        </div>
    </div>
  )
}

export default Faq