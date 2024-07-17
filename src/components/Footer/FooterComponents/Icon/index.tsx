import React from 'react'
import style from './style.module.scss'
import MainLogo from '@/components/img/svg/MainIconWhite.svg'
import Image from 'next/image'

function Icon() {
  return (
    <div className={style.LogoWrapper}>
                <div className={style.MainIcon}>
                    <Image fill src={MainLogo} alt=''/>
                </div>
                <span className={style.line}></span>
                <span className={style.Title}>Интернет магазин оптовых товаров</span>
    </div>
  )
}

export default Icon
