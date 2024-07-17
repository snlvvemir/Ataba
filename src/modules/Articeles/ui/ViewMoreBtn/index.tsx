import React from 'react'
import styles from './style.module.scss'
import ArrowDown from '@/components/img/svg/ArrowDown.svg'
import Image from 'next/image'

function ViewMoreBtn() {
  return (
    <div className={styles.ViewMoreBtnWrapper}>
            <button className={styles.ViewMoreBtn}>
                <div className={styles.textWrapper}>
                    <span>Показать еще</span>
                    <div className={styles.ArrowDownIcon}>
                        <Image fill src={ArrowDown} alt=''/>
                    </div>
                </div>
            </button>
          </div>
  )
}

export default ViewMoreBtn
