import React from 'react'
import Photo from '/public/trash/photo.png'
import Image from 'next/image'
import ShareNetwork from '@/components/img/svg/ShareNetwork.svg'
import style from './style.module.scss'

const Detail = ({params: {notificationDetail}}: any) => {
  return (
    <div className='container'>
      {notificationDetail}
      <div className={style.DetailPageWrapper}>
        <div className={style.DetailPage}>
          <div>
            <Image src={Photo} alt=''/>
          </div>
          <div className={style.PageText}>
            <span className={style.date}>14 апреля, 2021</span>
            <h2 className={style.title}>Самые ожидаемые игры апреля 2021</h2>
            <p className={style.firstDecription}>Вы отправитесь на планету Енох — расчищать место для будущих колонистов. Планета с этим не согласилась и спровоцировала аномалии. В результате большинство бойцов-первопроходцев погибли. Выжившие получили мутации — различные сверхспособности. Полезная добавка к арсеналу, учитывая, что вся флора и фауна Еноха жаждет вас убить. Открытого мира здесь нет. Кооператив — по желанию, можете пройти игру в одиночку. Микротранзакции в планах разработчиков не значатся, как и соревновательный мультиплеер.
            </p>
            <p className={style.secondDecription}>Вы отправитесь на планету Енох — расчищать место для будущих колонистов. Планета с этим не согласилась и спровоцировала аномалии. В результате большинство бойцов-первопроходцев погибли. Выжившие получили мутации — различные сверхспособности. Полезная добавка к арсеналу, учитывая, что вся флора и фауна Еноха жаждет вас убить. Открытого мира здесь нет. Кооператив — по желанию, можете пройти игру в одиночку. Микротранзакции в планах разработчиков не значатся, как и соревновательный мультиплеер.
            </p>
            <button className={style.Btn}>
              <Image src={ShareNetwork} alt=''/>
              <span className={style.BtnText}>Поделиться</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail