import React from 'react'
import style from './style.module.scss'
import Product from '@/components/img/png/shoes.png'
import NewProductCards from '@/modules/Articeles/ui/NewProductsCard'
import ViewMoreBtn from '@/modules/Articeles/ui/ViewMoreBtn'

function NewProducts() {
  return (
    <div>
        <div className={style.CardsWrapper}>
            <NewProductCards isNew img={Product.src} price={'2 480'} nameProduct={'Кроссовки КОТОФЕЙ'} like={3.5} comment={7}/>
        </div>
        <ViewMoreBtn />
    </div>
  )
}

export default NewProducts
