import React from 'react'
import style from './style.module.scss'
import faceBookIcon from '@/components/img/svg/FaceBookIcon.svg'
import InstIcon from '@/components/img/svg/Instagram.svg'
import TgIcon from '@/components/img/svg/TgIcon.svg'
import WkIcon from '@/components/img/svg/WkIcon.svg'
import Link from 'next/link'
import Image from 'next/image'
import PartnerBtn from './PartnerBtn'

function SocialNetwork() {
  return (
    <div className={style.SocialNetworkWrapper}>
        <div className={style.icons}>
            <Link href={''}>
                <div className={style.icon}>
                    <Image fill src={faceBookIcon} alt='' />
                </div>
            </Link>
            <Link href={''}>
                <div className={style.icon}>
                    <Image fill src={TgIcon} alt='' />
                </div>
            </Link>
            <Link href={''}>
                <div className={style.icon}>
                    <Image fill src={InstIcon} alt='' />
                </div>
            </Link>
            <Link href={''}>
                <div className={style.icon}>
                    <Image fill src={WkIcon} alt='' />
                </div>
            </Link>
        </div>
            <PartnerBtn />
    </div>
  )
}

export default SocialNetwork
