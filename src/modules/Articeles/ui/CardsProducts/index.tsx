import React from 'react'
import IconFire from '@/components/img/svg/popular-icon.svg'
import Image, { StaticImageData } from 'next/image';
import style from './style.module.scss'
import Link from 'next/link';
import FavoriteIcon from '@/components/img/svg/Heart.svg'
import Star from '@/components/img/svg/StarCard.svg'
import CommentIcon from '@/components/img/svg/CommentIcon.svg'
import Som from '@/components/img/svg/som.svg'
import './style.module.scss'

interface IProps {
    isNew?: boolean;
    img: string;
    price: string | number;
    nameProduct: string;
    like: string | number;
    comment: string | number;
}

function CardsProducts({ 
    isNew,
    comment,
    img,
    like,
    nameProduct,
    price
}: IProps) {
  return (
    <div className={style.PopularProduct}>
    <div className={style.card}>
        <div className={style.IconWrapper}>
        {
            isNew ? <div className='news'>NEW</div> : <Image src={IconFire} alt=''/>
        }
        <button className={style.FavBtn}>
            <div className={style.favIcon}>
                <Image fill src={FavoriteIcon} alt='' />
            </div>
        </button>
        </div>
        <div className={style.productImg}>
            <Image fill className={style.product} src={img} alt=""/>
        </div>
        <div className={style.TextCardWrapper}>
            <div className={style.PriceWrapper}>
            <span className={style.PriceText}>{price}</span>
                <div className={style.amountICon}>
                    <Image fill src={Som} alt=''/>
                </div>
            </div>
            <span className={style.ProductText}>{nameProduct}</span>
            <div className={style.bottomCard}>
                <div className={style.rating}>
                    <div className={style.StarIcon}>
                        <Image fill src={Star} alt=''/>
                    </div>
                    <span className={style.RatingText}>{like}</span>
                </div>
                <div className={style.comment}>
                    <div className={style.commentIcon}>
                        <Image fill src={CommentIcon} alt=''/>
                    </div>
                    <span className={style.CommentText}>{comment}</span>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default CardsProducts
