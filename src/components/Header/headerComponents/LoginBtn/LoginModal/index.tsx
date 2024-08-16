import React from 'react';
import style from './style.module.scss';
import Link from 'next/link';

interface LoginModalProps {
    show: boolean;
    onClose: () => void;
  }


const LoginModal: React.FC<LoginModalProps>= ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={style.modal_overlay}>
      <div className={style.modal_content}>
        <button className={style.close_button} onClick={onClose}>
          &times;
        </button>
        {/* Добавьте формы или кнопки для входа и регистрации */}
        <div className={style.btn_wrapper}>
          <Link href={'/sign_in'} className={style.btn}>Войти</Link>
          <Link href={''} className={style.btn1}>Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;