import React, { useState } from 'react';
import style from './style.module.scss';
import icon from '@/components/img/svg/User.svg'; 
import LoginModal from './LoginModal';
import Image from 'next/image';

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className={style.login_button} onClick={handleOpenModal}>
        <Image src={icon} alt="Войти" />
        <span>Войти</span>
      </div>
      <LoginModal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default LoginButton;