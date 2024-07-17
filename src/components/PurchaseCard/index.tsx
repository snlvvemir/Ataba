import PurchaseCards from '@/modules/Articeles/ui/PurchaseCards'
import React from 'react'
import Product from '@/components/img/png/Shirt.png'
import style from './style.module.scss'
import ViewMoreBtn from '@/modules/Articeles/ui/ViewMoreBtn'

function PurchaseCard() {
  return (
    <div >
        <div className={style.CardsWrapper}>
      <PurchaseCards img={Product.src} price={'1 440'} nameProduct={'Поло Atlas for Men'} like={3.5} users={56}/>

        </div>
        <ViewMoreBtn />
    </div>
    
  )
}

export default PurchaseCard