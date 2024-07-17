'use client';

import React, { useState } from 'react';
import style from './BtnCategory.module.scss';
import clsx from 'clsx';
import CategoryMenu from './CategoryMenu';

const HamburgerButton = () => {
  const [showIcon, setIcon] = useState(false);

  const handleClick = () => {
    setIcon(!showIcon);
  };

  return (
    <div>
      <button className={style.header__burger_btn} onClick={handleClick}>
        <div className={clsx(style.openCategory, showIcon ? style.open : '')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Категории</p>
      </button>
      <CategoryMenu IsOpen={showIcon} onClose={handleClick} />
    </div>
  );
};

export default HamburgerButton;
