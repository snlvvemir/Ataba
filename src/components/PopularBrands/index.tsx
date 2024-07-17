import React from 'react'
import Image from 'next/image'
import TvoeIcon from '@/components/img/svg/tvoe.svg'
import CrocsIcon from '@/components/img/svg/CrocsIcon.svg'
import TrussardiIcon from '@/components/img/svg/Trussardicon.svg'
import LoveRepublicIcon from '@/components/img/svg/LovePublicicon.svg'
import DefenderIcon from '@/components/img/svg/DefenderIcon.svg'
import LacosteIcon from '@/components/img/svg/LacosteIcon.svg'
import Estelicon from '@/components/img/svg/EstelIcon.svg'
import MayBellineIcon from '@/components/img/svg/MaybellineIcon.svg'
import MangoIcon from '@/components/img/svg/Mangoicon.svg'
import LevisIcon from '@/components/img/svg/Leviicon.svg'
import HilfigerIcon from '@/components/img/svg/HilfigerIcon.svg'
import AsicsIcon from '@/components/img/svg/AsicsIcon.svg'
import KeddoIcon from '@/components/img/svg/KeddoIcon.svg'
import BefreeIcon from '@/components/img/svg/BefreeIcon.svg'
import ReebokIcon from '@/components/img/svg/ReebokIcon.svg'
import BarbieIcon from '@/components/img/svg/BarbieIcon.svg'
import LarinaIcon from '@/components/img/svg/LarinaIcon.svg'
import OodjiIcon from '@/components/img/svg/OodjiIcon.svg'

import style from './style.module.scss'


function PopularBrands() {
  return (
    <div className={style.PopularBrand}>
    <div className={style.PopularBrands}>
        <div className={style.Icons}>

       
            <ul className={style.IconsWrapper}>
                <li><Image src={TvoeIcon} alt=''/></li>
                <li><Image src={MangoIcon} alt=''/></li>
                <li><Image src={LevisIcon} alt=''/></li>
                <li><Image src={HilfigerIcon} alt=''/></li>
                <li><Image src={AsicsIcon} alt=''/></li>
                <li><Image src={KeddoIcon} alt=''/></li>
            </ul>
            <ul className={style.IconsWrapper}>
                <li><Image src={CrocsIcon} alt=''/></li>
                <li><Image src={BefreeIcon} alt=''/></li>
                <li><Image src={ReebokIcon} alt=''/></li>
                <li><Image src={BarbieIcon} alt=''/></li>
                <li><Image src={LarinaIcon} alt=''/></li>
                <li><Image src={OodjiIcon} alt=''/></li>
            </ul>
            <ul className={style.IconsWrapper}>
                <li><Image src={TrussardiIcon} alt=''/></li>
                <li><Image src={LoveRepublicIcon} alt=''/></li>
                <li><Image src={DefenderIcon} alt=''/></li>
                <li><Image src={LacosteIcon} alt=''/></li>
                <li><Image src={Estelicon} alt=''/></li>
                <li><Image src={MayBellineIcon} alt=''/></li>
            </ul>
            </div>
    </div>
    </div>
  )
}

export default PopularBrands
