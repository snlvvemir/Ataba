'use client'


import React, { useState } from 'react'
import CaretDown from '@/components/img/svg/CaretDownBlack.svg'
import style from './style.module.scss'
import Image from 'next/image'
import BrandItems from './BrandItems'
import clsx from 'clsx'

function Brand() {
    const [showIcon, setIcon] = useState(false);

    const handleClick = () => {
        setIcon(!showIcon);
    }
  return (
    <div className={style.Brand}>
        <div className={style.text}>
            <h2 className={style.MainText}>Бренд</h2>
            <button className={style.Icon} onClick={handleClick}>
                <Image src={CaretDown} alt='' className={clsx(style.caretDownIcon, showIcon && style.translate)} />
            </button>
        </div>
        <BrandItems isOpen={showIcon} onClose={handleClick} />
    </div>
  )
}

export default Brand
