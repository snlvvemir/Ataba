import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'


function FooterLinks() {
  return (
    <div className={style.FooterLinks}>
      <Link href={''} className={style.link}>О компании</Link>
      <Link href={''} className={style.link}>Контакты</Link>
      <Link href={''} className={style.link}>FAQ</Link>
      <Link href={''} className={style.link}>Система скидок</Link>
      <Link href={''} className={style.link}>Реквизиты</Link>
      <Link href={''} className={style.link}>Соглашение о конфиденциальности</Link>
      <Link href={''} className={style.link}>Условия использования</Link>
    </div>
  )
}

export default FooterLinks
