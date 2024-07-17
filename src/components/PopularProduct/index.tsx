import CardsProducts from '@/modules/Articeles/ui/CardsProducts'
import React from 'react'
import Product from '@/components/img/png/product.png'
import style from './style.module.scss'
import ViewMoreBtn from '@/modules/Articeles/ui/ViewMoreBtn'

function PopularProductCards() {
  return (
    <div >
        <div className={style.CardsWrapper}>
            <CardsProducts img={Product.src} price={'1 440'} nameProduct={'Брюки Лори'} like={3.5} comment={7}/>
        </div>
        
        <ViewMoreBtn />
    </div>
  )
}

export default PopularProductCards
