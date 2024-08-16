'use client'


import React, { useState } from 'react'
import CaretDown from '@/components/img/svg/CaretDownBlack.svg'
import Image from 'next/image'
import style from './style.module.scss'
import PriceItems from './Items'
import clsx from 'clsx'

function Price() {
    const [showIcon, setIcon] = useState(false);

    const handleClick = () => {
        setIcon(!showIcon);
    }
  return (
    <div className={style.PriceBlock}>
        <div className={style.TextWrapper}>
            <h2 className={style.MainText}>Цена, сом</h2>
            <button className={style.icon} onClick={handleClick} >
                <Image src={CaretDown} alt='' className={clsx(style.caretDownIcon, showIcon && style.translate)}/>
            </button>
            
        </div>
        <PriceItems isOpen={showIcon} onClose={handleClick}/>
    </div>
  )
}

export default Price
