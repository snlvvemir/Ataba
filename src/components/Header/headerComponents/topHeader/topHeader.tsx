
import style from './topHeader.module.scss'

const TopHeader = () => {
  return (
    <div className={style.container}> 
        <ul className={style.top_list}>
            <li><a href="">О компании</a></li>
            <li><a href="">Контакты</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Система скидок</a></li>
            <li><a href="">Реквизиты</a></li>
            <li><a href="">Стать партнером</a></li>
        </ul>
    </div>
  )
}

export default TopHeader