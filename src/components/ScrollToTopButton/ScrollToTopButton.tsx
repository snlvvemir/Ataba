'use client'

import React from 'react';
import style from './style.module.scss'
import ArrowUp from '@/components/img/svg/ArrowUp.svg'
import Image from 'next/image';

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // плавная прокрутка
    });
  };

  return (
    <button onClick={scrollToTop} className={style.buttonStyle}>
        <div className={style.ArrowUpIcon}>
        <Image fill src={ArrowUp} alt=''/>
        </div>
        
    </button>
  );
};
export default ScrollToTopButton