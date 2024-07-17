import React from 'react'
import BannerSlider from '@/components/Carousel/index'
import '@/styles/global.scss'
import PopularCategories from '@/components/MainPageCards'
import styles from './style.module.scss'
import ViewMoreBtn from '@/modules/Articeles/ui/ViewMoreBtn'
import PopularProductCards from '@/components/PopularProduct'
import PurchaseCard from '@/components/PurchaseCard'
import NewProducts from '@/components/NewProducts'
import BenefitBlock from '@/components/Benefitblock'
import ArrowRightIcon from '@/components/img/svg/arrowRight.svg'
import Image from 'next/image'
import Link from 'next/link'
import PopularBrands from '@/components/PopularBrands'
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton'
import ArticleBlock from '@/components/ArticleBlock'
import PhoneBlock from '@/components/PhoneBlock'



function MainPage() {
  return (
    <main >
      <BannerSlider />
      <div className='container'>
        <h1 className={styles.PopularCategoriesText}>Популярные категории</h1>
        <PopularCategories />
        <h1 className={styles.PopularProductText}>Популярные товары</h1>
        <PopularProductCards />
        <h1 className={styles.PopularProductText}>Горящие закупки</h1>
        <PurchaseCard />
        <h1 className={styles.PopularProductText}>Новинки</h1>
        <NewProducts />
        <h1 className={styles.PopularProductText}>Преимущества</h1>
        <BenefitBlock />
        <h1 className={styles.PopularProductText}>Популярные бренды</h1>
        <PopularBrands />
        <div className={styles.ArticelesText}>
          <Link href={''}>
          <div className={styles.TextWrapper}>
            <h1 className={styles.ArticlesTitle}>Статьи</h1>
            <Image src={ArrowRightIcon} alt=''/>
            </div>
          </Link>
        </div>
          <ArticleBlock />
          <PhoneBlock />
        
      </div>
      <ScrollToTopButton />
    </main>
  )
}

export default MainPage