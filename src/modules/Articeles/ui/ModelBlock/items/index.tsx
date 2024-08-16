import React from 'react'
import style from './style.module.scss'

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const ModelItems:React.FC<Props> = ({isOpen}) => {
  return isOpen &&
  <form className={style.Items}>
  <div className={style.chekboxWrapper}>
      <input id="model" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model">Тапочки (1 449)</label>
  </div>
  <div className={style.chekboxWrapper}>
      <input id="model1" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model1">Топсайдеры (14)</label>
  </div>
  <div className={style.chekboxWrapper}>
      <input id="model2" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model2">Туфли (5 204)</label>
  </div>
  <div className={style.chekboxWrapper}>
      <input id="model3" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model3">Топсайдеры (14)</label>
  </div>
  <div className={style.chekboxWrapper}>
      <input id="model4" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model4">Угги (659)</label>
  </div>
  <div className={style.chekboxWrapper}>
      <input id="model5" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model5">Унты (92)</label>
  </div>
  <div className={style.chekboxWrapper}>
      <input id="model6" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model6">Шлепанцы (1 449)</label>
  </div>
  <div className={style.chekboxWrapper}>
      <input id="model7" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model7">Тапочки (1 449)</label>
  </div>
  <div className={style.chekboxWrapper}>
      <input id="model8" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model8">Топсайдеры (14)</label>
  </div>
  <div className={style.chekboxWrapper}>
      <input id="model9" type="checkbox" className={style.input} name='form'/>
      <label htmlFor="model9">Туфли (5 204)</label>
  </div>
</form>
}

export default ModelItems
