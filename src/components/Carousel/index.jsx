'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerPhoto from '@/components/img/png/slider.png'
import Image from 'next/image';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

import './style.scss'

// import required modules
import { Pagination } from 'swiper/modules';

const BannerSlider = () => {
  return (
    <div className='BannerWrapper'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={`mySwiper`}
      >
        <SwiperSlide><Image src={BannerPhoto} alt='' /></SwiperSlide>
        <SwiperSlide><Image src={BannerPhoto} alt='' /></SwiperSlide>
        <SwiperSlide><Image src={BannerPhoto} alt='' /></SwiperSlide>
        <SwiperSlide><Image src={BannerPhoto} alt='' /></SwiperSlide>
      </Swiper>
    </div>
  );
}
export default BannerSlider