import React from 'react'
import style from './style.module.scss'
import StarLogo from '@/components/img/svg/Star.svg'
import Link from 'next/link'
import Image from 'next/image'
import StoreIcon from '@/components/img/svg/Storefront.svg'
import FireIcon from '@/components/img/svg/FireSimple.svg'
import NewIcon from '@/components/img/svg/NewIcon.svg'

function BottomMenu() {
  return (
    <div className={style.bottomMenuWrapper}>
      <Link href={''} className={style.starWrapper}>
        <Image src={StarLogo} alt='' width={20} height={20}/>
        <span>TOP Бренды</span>
      </Link>
      <Link href={''} className={style.starWrapper}>
        <Image src={StoreIcon} alt='' width={20} height={20}/>
        <span>Магазины</span>
      </Link>
      <Link href={''} className={style.starWrapper}>
        <Image src={FireIcon} alt='' width={20} height={20}/>
        <span>Горящие товары</span>
      </Link>
      <Link href={''} className={style.starWrapper}>
        <Image src={NewIcon} alt='' width={20} height={20}/>
        <span>Новинки</span>
      </Link>
      <Link href={''} className={style.starWrapper}>
        <span>Детям</span>
      </Link>
      <Link href={''} className={style.starWrapper}>
        <span>Обувь</span>
      </Link>
      <Link href={''} className={style.starWrapper}>
        <span>Аксессуары</span>
      </Link>
      <Link href={''} className={style.starWrapper}>
        <span>Электроника</span>
      </Link>
      <Link href={''} className={style.starWrapper}>
        <span>Спорт</span>
      </Link>
      <Link href={''} className={style.starWrapper}>
        <span>Красота</span>
      </Link>
    </div>
  )
}

export default BottomMenu;
