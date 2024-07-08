'use client';

import React, { useState } from 'react';
import style from './BtnCategory.module.scss';
import CloseBtn from '@/components/img/svg/CloseModalCategory.svg';
import clsx from 'clsx';

interface ButtonProps {
  onClick: () => void;
}

const HamburgerButton: React.FC<ButtonProps> = ({ onClick }) => {
  const [showIcon, setIcon] = useState(true);

  const handleClick = () => {
    setIcon(!showIcon);
    onClick();
  };

  return (
    <button className={style.header__burger_btn} onClick={handleClick}>
      <div className={clsx(style.openCategory, !showIcon ? style.open : '')}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Категории</p>
    </button>
  );
};

export default HamburgerButton;
