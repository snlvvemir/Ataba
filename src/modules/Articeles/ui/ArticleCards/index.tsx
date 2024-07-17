import React from 'react'
import style from './style.module.scss'
import Image from 'next/image';


interface Props {
    img: string;
    date: string;
    title: string;
    description: string;
}

function ArticleCards({
    img,
    date,
    title,
    description
}: Props) {
  return (
    <div className={style.card}>
      <div className={style.Img}>
        <Image fill src={img} alt=''/>
        </div>
        <div className={style.cardText}>
            <span className={style.date}>{date}</span>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
        </div>
        
    </div>
  )
}

export default ArticleCards
