import React from 'react'
import Image from 'next/image'
import BoxIcon from '@/components/img/svg/boxIcon.svg'
import CartIcon from '@/components/img/svg/CartIcon.svg' 
import BenefitIcon from '@/components/img/svg/benefitIcon.svg'
import style from './style.module.scss'

function BenefitBlock() {
  return (
    <div className={style.BenefitBlock}>
      <div className={style.BlockWrapper}>
        <div className={style.BoxIcon}>
            <Image fill src={BoxIcon} alt=''/>
        </div>
        <span className={style.text}>Товары разных продавцов</span>
      </div>
      <div className={style.BlockWrapper}>
        <div className={style.BoxIcon}>
            <Image fill src={CartIcon} alt=''/>
        </div>
        <span className={style.text}>1232 проверенных продавцов</span>
      </div>
      <div className={style.BlockWrapper}>
        <div className={style.BoxIcon}>
            <Image fill src={BenefitIcon} alt=''/>
        </div>
        <span className={style.text}>Самые выгодные цены</span>
      </div>
      <div className={style.BlockWrapper}>
        <div className={style.BoxIcon}>
            <Image fill src={BoxIcon} alt=''/>
        </div>
        <span className={style.text}>Товары разных продавцов</span>
      </div>
    </div>
  )
}

export default BenefitBlock
