import React from 'react'
import style from './style.module.scss'
import Logo from './FooterComponents/Icon'
import Image from 'next/image'
import SocialNetwork from './FooterComponents/SocialNetwork'
import FooterLinks from './FooterComponents/FooterLinks'

function Footer() {
  return (
    <footer className={style.Footer}>
        <div className='container'>
          <div className={style.TopFooter}>
          <Logo />
          <SocialNetwork />
          </div>
        </div>
          <hr className={style.hr}/>
          <div className='container'>
            <div className={style.MiddleFooter}>
              <FooterLinks />
            </div>
            <span className={style.BottomFooter}>Copyright © 2021 Ataba Company S.L. All rights reserved.</span>
          </div>
    </footer>
  )
}

export default Footer
