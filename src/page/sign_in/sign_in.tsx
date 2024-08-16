'use client'


import React, { useState } from 'react'
import style from './style.module.scss'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import eye from '@/components/img/svg/Eye.svg'
import eyeClose from '@/components/img/svg/Eye-no.svg'
import Image from 'next/image';
import Link from 'next/link';
import ModalNumber from './modalNum';

function SignIn() {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validDateForNumber(value));
};

  const validDateForNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  }

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className='container'>
      <div className={style.ModalWrapper}>
        <div className={style.Modal}>
          <div className={style.mainText}>
            <h1>Вход</h1>
          </div>
          <div>
            <span>Телефон</span>
            <div className={style.numberInput}>
              <PhoneInput
              placeholder='777-333-111'
              country={'kg'} 
              value={PhoneNumber}
              onChange={handleChange}
              inputStyle={{
                width: '400px',
                height: '48px',
                fontWeight: '400',
                borderRadius: '5px'
              }}    
              inputProps={{
                required: true,
              }}
              />
            </div>
            <div className={style.password}>
              <span>Пароль</span>
              <div className={style.numberInput}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={style.passwordInput}
                />
                  {showPassword ? <Image alt='' className={style.eyeBtn} src={eyeClose} onClick={togglePasswordVisibility}/> : <Image alt='' onClick={togglePasswordVisibility} src={eye} />}
                
              </div>
            </div>
            <button onClick={openModal} className={style.forgotPasswordBtn}>Забыли пароль?</button>
            <ModalNumber  show={showModal} onClose={closeModal}/>
            <div className={style.SignInBtn}>
              <Link href={'/'} className={style.SignInBtn}>Войти</Link>
            </div>
            <div className={style.LogInBtn}>
              <Link href={''} className={style.LogInText}>Регистрация</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
