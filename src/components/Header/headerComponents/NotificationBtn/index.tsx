import React from 'react';
import style from './style.module.scss';
import notificationIcon from '@/components/img/svg/Bell.svg';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTER_PATHS } from '@/components/constants/routerPathLink';

const NotificationButton = () => {
  return (
    <div className={style.NotificationWrapper}>
    <Link href={ROUTER_PATHS.notification} className={style.notification_button}>
      <Image src={notificationIcon} alt="Notification Icon" className={style.icon} />
      Уведомле...
    </Link>
    </div>
  );
};

export default NotificationButton;