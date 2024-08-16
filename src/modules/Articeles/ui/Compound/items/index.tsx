import React from 'react'
import style from './style.module.scss'

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const CompoundItems:React.FC<Props> = ({isOpen}) => {
  return isOpen &&
    <div>
      <div className={style.inputWrapper}>
            <input id='compound' type="checkbox" className={style.input} />
            <label htmlFor='compound'>Акрил (4)</label>
        </div>
        <div className={style.inputWrapper}>
            <input id='compound1' type="checkbox" className={style.input} />
            <label htmlFor='compound1'>Вискоза (4)</label>
        </div>
        <div className={style.inputWrapper}>
            <input id='compound2' type="checkbox" className={style.input} />
            <label htmlFor='compound2'>Кашемир (4)</label>
        </div>
        <div className={style.inputWrapper}>
            <input id='compound3' type="checkbox" className={style.input} />
            <label htmlFor='compound3'>Лен (4)</label>
        </div>
    </div>
}

export default CompoundItems
