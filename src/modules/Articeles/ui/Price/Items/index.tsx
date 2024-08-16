import React from 'react'
import style from './style.module.scss'

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const PriceItems:React.FC<Props>=({isOpen}) => {
  return isOpen &&
  <div className={style.inputsWrapper}>
    <div className={style.inputWrapper}>
        <span>От</span>
        <input placeholder='200' type="number" className={style.input}/>
    </div>
    <div className={style.inputWrapper}>
        <span>До</span>
        <input placeholder='41 231' type="number" className={style.input}/>
    </div>
</div>
}

export default PriceItems
