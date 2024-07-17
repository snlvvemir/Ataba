import React from 'react'
import style from './style.module.scss'
import PhoneImg from '@/components/img/png/phone.png'
import Image from 'next/image'
import QR from '@/components/img/svg/QR.svg'
import Link from 'next/link'
import AppStore from '@/components/img/svg/AppStoreBtn.svg'
import GooglePlay from '@/components/img/svg/GooglePlayBtn.svg'

function PhoneBlock() {
  return (
    <div className={style.PhoneBlock}>
        <div >
            <div className={style.PhoneImg}>
                <Image fill src={PhoneImg} alt=''/>
                <Image src={QR} className={style.QRImg} alt=''/>
            </div>
        </div>
        <div className={style.Text}>
            <h2 className={style.MainText}>Скачивайте приложение <span className={style.Ataba}>Ataba</span> и находите выгодные предложение</h2>
            <span className={style.bottomText}>Наведите камеру на QR-код, чтобы скачать</span>
            <div className={style.Btns}>
                <Link href={''}>
                    <Image src={AppStore} alt=''/>
                </Link>
                <Link href={''}>
                    <Image src={GooglePlay} alt='' />
                </Link>
            </div>
        </div>
        <div className={style.QRblock}>
            <Image src={QR} alt=''/>
        </div>
    </div>
  )
}

export default PhoneBlock
