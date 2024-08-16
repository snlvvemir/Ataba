import React from 'react'
import style from './style.module.scss'
import RusIcon from '@/components/img/svg/RusMaskGroup.svg'
import ChIcon from '@/components/img/svg/ChMaskGroup.svg'
import Image from 'next/image'

interface Props {
    isOpen: boolean;
    onClose: () => void
}

const DimensionItems:React.FC<Props> = ({isOpen}) => {
  return isOpen &&
  <form className={style.items}>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check'  className={style.checkbox} type="checkbox" />
          <label className={style.dimension} htmlFor='check'>34</label>
      </div>
      <Image src={RusIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check1'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check1' className={style.dimension} >36</label>
      </div>
      <Image src={RusIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check2'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check2' className={style.dimension} >38</label>
      </div>
      <Image src={RusIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check3'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check3' className={style.dimension} >41</label>
      </div>
      <Image src={RusIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check4'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check4' className={style.dimension} >42</label>
      </div>
      <Image src={RusIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check5'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check5' className={style.dimension} >41</label>
      </div>
      <Image src={ChIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check6'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check6' className={style.dimension} >42</label>
      </div>
      <Image src={RusIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check7'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check7' className={style.dimension} >44</label>
      </div>
      <Image src={ChIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check8'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check8' className={style.dimension} >45</label>
      </div>
      <Image src={RusIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check9'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check9' className={style.dimension} >46</label>
      </div>
      <Image src={RusIcon} alt=''/>
  </div>
  <div className={style.blockWrapper}>
      <div className={style.inputWrapper}>
          <input id='check10'  className={style.checkbox} type="checkbox" />
          <label htmlFor='check10' className={style.dimension} >47</label>
      </div>
      <Image src={ChIcon} alt=''/>
  </div>
</form>
}

export default DimensionItems
