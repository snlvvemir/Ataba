'use client'

import React, {useState, useEffect} from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import CaretLeft from '@/components/img/svg/CaretDown.svg'
import Link from 'next/link'
import OTPInput from './OTPinput'
import timer from '@/components/img/svg/TimerSilver.svg'

function PhoneCode() {
    const [otp, setOtp] = useState<string>('');


    const [timeLeft, setTimeLeft] = useState<number>(60);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    useEffect(() => {
    if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    } else {
        setIsDisabled(false);
    }
    }, [timeLeft]);

    const handleResend = () => {
    setTimeLeft(60);
    setIsDisabled(true);
    // Логика для повторной отправки кода
    };

  return (
    <div className='container'>
      <div className={style.BlockWrapper}>
        <div className={style.Block}>
            <Link href={'/sign_in'} className={style.BackBtn}>
                <Image className={style.caretLeft} src={CaretLeft} alt=''/>
                <span className={style.textBack}>Назад</span>
            </Link>
            <h1 className={style.mainText}>Смс код</h1>
            <p className={style.description}>На ваш номер отправили код, введите для входа</p>
            <div className={style.otp}>
                <OTPInput length={4} onChange={setOtp} />
            </div>
            <div className={style.timerContainer}>
                <div className={style.timerWrapper}>
                    <Image src={timer} alt=''/>
                    <p className={style.timer}>
                        Повторный запрос через: <span>{timeLeft > 0 ? `${timeLeft} сек` : '0'}</span>
                    </p>
                </div>
                <Link href={''} className={style.submitButton}>
                    Далее
                </Link>
                {!isDisabled && (
                    <button onClick={handleResend} className={style.resendButton}>
                        ⟳ Отправить повторно
                    </button>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneCode
