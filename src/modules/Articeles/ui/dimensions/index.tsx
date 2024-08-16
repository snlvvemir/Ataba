'use client'

import React, { useState } from 'react'
import style from './style.module.scss'
import CaretDown from '@/components/img/svg/CaretDownBlack.svg'
import Image from 'next/image'
import DimensionItems from './items'
import clsx from 'clsx'

function Dimensions() {
    const [showIcon, setIcon] = useState(false);

    const handleClick = () => {
        setIcon(!showIcon);
    }
  return (
    <div className={style.block}>
        <div className={style.TextWrapper}>
            <h2 className={style.MainText}>Размеры</h2>
            <button className={style.icon} onClick={handleClick}>
                <Image src={CaretDown} alt='' className={clsx(style.caretDownIcon, showIcon && style.translate)}/>
            </button>
        </div>
        <DimensionItems isOpen={showIcon} onClose={handleClick}/>
    </div>
  )
}

export default Dimensions
