import React from 'react';
import style from './style.module.scss';
import OrderIcon from '@/components/img/svg/ShoppingCartSimple.svg'
import Link from 'next/link';
import Image from 'next/image';

const MyOrdersBtn = () => {
  return (
    <div>
    <Link href={''} className={style.order_button}>
      <Image src={OrderIcon} alt="Notification Icon" className={style.icon} />
      Мои заказы
    </Link>
    </div>
  );
};

export default MyOrdersBtn;