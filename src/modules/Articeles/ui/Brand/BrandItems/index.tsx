import React from 'react'
import style from './style.module.scss'
import Image from 'next/image';
import SearchIcon from '@/components/img/svg/search.svg'

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const BrandItems: React.FC<Props> = ({isOpen}) => {
  return isOpen &&
    <div className={style.block}>
       <div className={style.inputWrapper}>
            <input className={style.searchInput} type="text" placeholder='Поиск'/>
            <Image className={style.SearchIcon} src={SearchIcon} alt=''/>
        </div>
        <form className={style.Items}>
            <div className={style.chekboxWrapper}>
                <input id="form" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form1" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form1">Tommy Hilfeger (21)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form2" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form2">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form4" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form4">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form5" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form5">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form6" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form6">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form7" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form7">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form8" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form8">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form12" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form12">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form9" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form9">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form10" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form10">GUCCI (2)</label>
            </div>
            <div className={style.chekboxWrapper}>
                <input id="form11" type="checkbox" className={style.input} name='form'/>
                <label htmlFor="form11">GUCCI (2)</label>
            </div>
        </form>
    </div>
  
}

export default BrandItems
