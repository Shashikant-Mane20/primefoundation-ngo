"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Autoplay, Pagination } from 'swiper/modules'; // Import the Swiper modules for Autoplay and Pagination
import 'swiper/css';  // Swiper's CSS
import 'swiper/css/pagination';  // Pagination CSS
import bannerImages from '../../../public/data/bannerImages';  // Import dynamic images and content

const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Swiper Section with Autoplay and Pagination */}
      <Swiper
        spaceBetween={50}  // Space between each slide
        slidesPerView={1}  // Only 1 slide is visible at a time
        autoplay={{
          delay: 3000, // 3 seconds for slide transition
          disableOnInteraction: false,  // Autoplay will not stop after user interaction
        }}
        pagination={{
          clickable: true,  // Pagination bullets are clickable
          dynamicBullets: true,  // Dynamic bullets that change size based on current slide
        }}
        loop={true}  // Loop back to the first slide after reaching the last one
        modules={[Autoplay, Pagination]}  // Adding autoplay and pagination modules to Swiper
      >
        {bannerImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}  // Background Image
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-md">
                <h2 className="text-4xl md:text-5xl font-bold">{slide.text}</h2>
                <p className="text-lg md:text-xl mt-4">{slide.subtext}</p>
                <a
                  href="/donate"  // Link to donate page
                  className="mt-6 inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition duration-200"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
