
import React from 'react'
import style from './style.module.scss'
import BrandFilter from '@/components/filterBrand'

function ShoesPage() {
  return (
    <div className='container'>
        <div className={style.mainTextwrapper}>
          <h1 className={style.MainText}>Обувь</h1>
          <span className={style.numProduct}>79 000 товаров</span>
        </div>
        <BrandFilter />
    </div>
  )
}

export default ShoesPage
