import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'
import Shoes from '@/components/img/svg/shoes.svg'
import Bag from '@/components/img/svg/bag.svg'
import TShirt from '@/components/img/svg/shirt.svg'
import Socks from '@/components/img/svg/socks.svg'
import Fertilizers from '@/components/img/svg/fertilizers.svg'
import Backpacks from '@/components/img/svg/backpacks.svg'


function PopularCategories() {
  return (
    <div className={styles.CardsWrapper}>
      <Link href={''}>
        <div  className={styles.card}>
            <span className={styles.Title}>Мужская обувь</span>
            <Image src={Shoes} alt='' className={styles.ShoesIcon} />
        </div>
      </Link>
      <Link href={''}>
        <div  className={styles.card}>
            <span className={styles.Title}>Сумки</span>
            <Image src={Bag} alt='' className={styles.BagIcon} />
        </div>
      </Link>
      <Link href={''}>
        <div  className={styles.card}>
            <span className={styles.Title}>Майки и футболки</span>
            <Image src={TShirt} alt='' className={styles.TShirt} />
        </div>
      </Link>
      <Link href={''}>
        <div  className={styles.card}>
            <span className={styles.Title}>Веселые носочки</span>
            <Image src={Socks} alt='' className={styles.Socks} />
        </div>
      </Link>
      <Link href={''}>
        <div  className={styles.card}>
            <span className={styles.Title}>Удобрения</span>
            <Image src={Fertilizers} alt='' className={styles.Fertilizers} />
        </div>
      </Link>
      <Link href={''}>
        <div  className={styles.card}>
            <span className={styles.Title}>Школьные рюкзаки</span>
            <Image src={Backpacks} alt='' className={styles.Backpacks} />
        </div>
      </Link>
    </div>
  )
}

export default PopularCategories
