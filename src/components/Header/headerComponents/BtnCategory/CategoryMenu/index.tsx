import React from 'react'
import style from './style.module.scss'
import CloseBtn from '@/components/img/svg/CloseBtn.svg'
import Image from 'next/image'
import Woman from '@/components/img/svg/woman.svg'
import Man from '@/components/img/svg/man.svg'
import BabyStroler from '@/components/img/svg/baby-stroller-of-rounded-design-side-view.svg'
import Snaker from '@/components/img/svg/sneaker.svg'
import Necklace from '@/components/img/svg/necklace.svg'
import Radio from '@/components/img/svg/radio.svg'
import Ball from '@/components/img/svg/basketball-ball.svg'
import Cosmetics from '@/components/img/svg/cosmetics.svg'
import Pencil from '@/components/img/svg/pencil.svg'
import Book from '@/components/img/svg/book.svg'
import caretRight from '@/components/img/svg/CaretRight.svg'
import MenuLeft from '../CategoryMenuLeft'
import AppIcon from '@/components/IconSprite'
import { AllIcons } from '@/components/IconSprite/all-icons'

interface LoginModalProps {
    IsOpen: boolean;
    onClose: () => void;
}

const  CategoryMenu: React.FC<LoginModalProps>=({IsOpen, onClose})=> {
    
    return IsOpen &&
        <div className={style.ModalWindow}>
        <hr className={style.Line}/>
        <div className={style.Modal}>
            <div className='container'>
                <div className={style.Wrapper}>
                    <div>
                        <nav className={style.Nav}>
                        <h1 className={style.Category}>Категории</h1>
                            <ul className={style.RightBlock}>
                                <li className={style.Block}>
                                    <button className={style.RightBlockWrapper_Active}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={Woman} alt=''/>
                                        <span className={style.RightText}>Женщинам</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={Man} alt=''/>
                                        <span className={style.RightText}>Мужчинам</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={BabyStroler} alt=''/>
                                        <span className={style.RightText}>Детям</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={Snaker} alt=''/>
                                        <span className={style.RightText}>Обувь</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <AppIcon id={AllIcons.APPLE}/>
                                        <span className={style.RightText}>Продукты</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={Necklace} alt=''/>
                                        <span className={style.RightText}>Аксессуары</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={Radio} alt=''/>
                                        <span className={style.RightText}>Электроника</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={Ball} alt=''/>
                                        <span className={style.RightText}>Спорт</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={Cosmetics} alt=''/>
                                        <span className={style.RightText}>Красота</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={Pencil} alt=''/>
                                        <span className={style.RightText}>Канцтовары</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                                <li className={style.Block} >
                                    <button className={style.RightBlockWrapper}>
                                    <div className={style.BlockWrapper}>
                                        <Image src={Book} alt=''/>
                                        <span className={style.RightText}>Книги</span>
                                    </div>
                                    <Image src={caretRight} alt=''/>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <MenuLeft />
                    </div>
                    <div>
                        <button className={style.CloseBtn} onClick={onClose}>
                            <div className={style.CloseBtnIcon}>
                                <Image fill src={CloseBtn} alt=''/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CategoryMenu
