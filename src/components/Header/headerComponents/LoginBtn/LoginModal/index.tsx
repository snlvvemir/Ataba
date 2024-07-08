import React from 'react';
import style from './style.module.scss';

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
          <button className={style.btn}>Войти</button>
          <button className={style.btn1}>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;