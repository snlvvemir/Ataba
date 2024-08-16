import Link from 'next/link'
import React from 'react'
import style from './style.module.scss'




function CategoryNav() {
  return (
    <div className={style.container}>
        <h2 className={style.MainText}>Категории</h2>
        <ul className={style.navList}>
            <li className={style.NavActive}>
            <Link href={''}>Обувь</Link>
            </li>
            <li className={style.Nav}>
            <Link href={''}>Детская</Link>
            </li>
            <li className={style.Nav}>
            <Link href={''}>Для новорожденных</Link>
            </li>
            <li className={style.Nav}>
            <Link href={''}>Женская</Link>
            </li>
            <li className={style.Nav}>
            <Link href={''}>Мужская</Link>
            </li>
            <li className={style.Nav}>
            <Link href={''}>Ортопедическая обувь</Link>
            </li>
            <li className={style.Nav}>
            <Link href={''}>Аксессуары для обуви</Link>
            </li>
        </ul>
    </div>
  )
}

export default CategoryNav
