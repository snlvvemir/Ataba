import React from 'react';
import style from './style.module.scss';
import FavIcon from '@/components/img/svg/HeartStraight.svg'
import Link from 'next/link';
import Image from 'next/image';

const FavoritesBtn = () => {
  return (
    <div>
    <Link href={''} className={style.fav_button}>
      <Image src={FavIcon} alt="Notification Icon" className={style.icon} />
      Избранное
    </Link>
    </div>
  );
};

export default FavoritesBtn;