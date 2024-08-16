'use client'


import React, {useState} from 'react'
import CaretDown from '@/components/img/svg/CaretDownBlack.svg'
import style from './style.module.scss'
import Image from 'next/image'
import clsx from 'clsx'
import ModelItems from './items'

function ModelBlock() {
    const [showIcon, setIcon] = useState(false);

    const handleClick = () => {
        setIcon(!showIcon);
    }
  return (
    <div className={style.model}>
        <div className={style.text}>
            <h2 className={style.MainText}>Модель</h2>
            <button className={style.icon} onClick={handleClick}>
                <Image src={CaretDown} alt='' className={clsx(style.caretDownIcon, showIcon && style.translate)}/>
            </button>
        </div>
        <ModelItems isOpen={showIcon} onClose={handleClick}/>
    </div>
  )
}

export default ModelBlock
