import React from 'react'
import News from '@/components/img/png/news.png'
import ArticleCards from '@/modules/Articeles/ui/ArticleCards'
import style from './style.module.scss'

function ArticleBlock() {
  return (
    <div className={style.ArticleBlock}>
      <ArticleCards img={News.src} date='14 апреля, 2021' title='Крутой приз от Samsung Galaxy!' description='Суперприз или Бонусные рубли'/>
      <ArticleCards img={News.src} date='14 апреля, 2021' title='Крутой приз от Samsung Galaxy!' description='Суперприз или Бонусные рубли'/>
      <ArticleCards img={News.src} date='14 апреля, 2021' title='Крутой приз от Samsung Galaxy!' description='Суперприз или Бонусные рубли'/>
      <ArticleCards img={News.src} date='14 апреля, 2021' title='Крутой приз от Samsung Galaxy!' description='Суперприз или Бонусные рубли'/>
    </div>
  )
}

export default ArticleBlock
