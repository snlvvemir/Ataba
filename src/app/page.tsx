import React from 'react'
import BannerSlider from '@/components/Carousel/index'
import '@/styles/global.scss'
import PopularCategories from '@/components/MainPageCards'


function MainPage() {
  return (
    <main className=''>
      <BannerSlider />
      <div className='container'>
        <h1 style={{fontSize: 28, paddingTop: 30}}>Популярные категории</h1>
        <PopularCategories />
      </div>
    </main>
  )
}

export default MainPage

