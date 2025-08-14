import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCog, FaSnowflake, FaChartLine, FaBullseye } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import frame from '../assets/images/Frame.png';

const Carousel = () => {
  const swiperRef = useRef(null);

  const cardData = [
    {
      title: "Efficiency",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
      icon: <FaCog size={24} className="text-[#2CCEBA] mb-2" />,
    },
    {
      title: "Adaptability",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
      icon: <FaSnowflake size={24} className="text-[#2CCEBA] mb-2" />,
    },
    {
      title: "Scalability",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
      icon: <FaChartLine size={24} className="text-[#2CCEBA] mb-2" />,
    },
    {
      title: "Precision",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
      icon: <FaBullseye size={24} className="text-[#2CCEBA] mb-2" />,
    },
  ];

  return (
    <div className="container mx-auto mt-5 px-5 md:px-0">
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-[#0C0C0C] text-4xl md:text-5xl font-semibold flex flex-col text-center">
          Why Choose <span>Softwarechamber</span>
        </h1>
        <p className="text-[#494949] flex flex-col text-center mt-5">
          Deliver personalized experiences to your customers with AI-powered{" "}
          <span>recommendation engines and dynamic content generation.</span>
        </p>
        <button className="bg-[#2CCEBA] text-white p-2 rounded-lg flex items-center gap-1 mt-8">
          Let's Discuss
          <img src={frame} alt="" className="h-6" />
        </button>
      </div>

      <div className="w-full max-w-4xl mx-auto py-10 relative ">
        {/* Custom Buttons */}
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-lg bg-[#0C0C0C]"
        >
          <IoIosArrowBack size={10} />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#0C0C0C] p-3 rounded-full shadow-lg text-white"
        >
          <IoIosArrowForward size={10} />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
        >
          {cardData.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className={`p-5 rounded-xl shadow-lg bg-[#F3F3F3] transition-transform duration-500
                  ${i % 2 === 0 ? "mt-5 md:mt-10" : "mb-5 md:mb-10"}`}
              >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold mb-3">{card.title}</h2>
 {card.icon}
                </div>
               
               <div className="border border-[#A5A5A5] mt-2"></div>
                
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;