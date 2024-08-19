'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCube, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay'; 
import Service from './Service';
// import Services from './Service';


export default function Slider() {
  return (
    <div className='flex relative content-center justify-center'>
      <div className='h-full w-full p-0' >
        <Swiper
          modules={[EffectCube, Navigation, Autoplay]} 
          speed={1500}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
            pauseOnMouseEnter: true
          }}
          effect="cube" 
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20, 
            shadowScale: 0.94, 
          }}
          spaceBetween={50} 
          slidesPerView={1} 
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide>
            <div className="h-96 flex justify-center content-center md:p-64 p-32 w-full bg-[url('/images/tech.jpg')] bg-no-repeat" >
              <div className='flex flex-col justify-center items-center md:p-64 p-0 '>
              <h1 className="md:text-5xl text-lg text-center font-bold leading-normal text-white">For Your Business Custom IT Solutions</h1>
              <p className="md:text-lg text-md text-center text-white mt-4">We are at your service with all your IT solutions.</p>
              <div class="border-4 border-transparent transition transform hover:-translate-y-1 bg-black p-3 mt-2 text-white">Learn more</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-96 flex justify-center content-center md:p-64 p-32 w-full bg-[url('/images/network_nodes.jpg')] bg-no-repeat">
          <div className='flex flex-col justify-center items-center md:p-64 p-0 '>
              <h1  className="md:text-5xl text-lg text-center font-bold leading-normal text-white">We add value to your Business</h1>
              <p className="md:text-lg text-md text-center text-white mt-4">We meet all the IT infrastucture needs of your Business.</p>
              <div className="border-4 border-transparent transition transform hover:-translate-y-1 bg-black p-3 mt-2 text-white">Learn more</div>
            </div>
            </div>
        
          </SwiperSlide>
        </Swiper>
     
        </div>
        <button className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2  text-white p-3 rounded-full z-10">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" color='white' />
</svg>


        </button>
        <button className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2  text-white p-3 rounded-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
        </button>
      


    </div>
  );
}
