'use client'


import React, { useState} from 'react'
import style from './style.module.scss'
import CaretDown from '@/components/img/svg/CaretDownBlack.svg'
import Image from 'next/image'
import clsx from 'clsx'
import CompoundItems from './items'

function Compound() {
    const [showIcon, setIcon] = useState(false);

    const handleClick = () => {
        setIcon(!showIcon);
    }
  return (
    <div className={style.block}>
        <div className={style.MainTextWrapper}>
            <h2 className={style.MainText}>Состав</h2>
            <button className={style.icon} onClick={handleClick}>
                <Image src={CaretDown} alt='' className={clsx(style.caretDownIcon, showIcon && style.translate)}/>
            </button>
        </div>
        <CompoundItems isOpen={showIcon} onClose={handleClick}/>
    </div>
  )
}

export default Compound
