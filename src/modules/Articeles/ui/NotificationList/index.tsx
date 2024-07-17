import React from 'react'
import NotificationItem from '../../components/NotificationItem'
import Link from 'next/link'

const NotificationList = () => {
    const notificationArray = [
        {date: 'Сегодня',
            title: 'В честь открытие мы дарим плюс 200 бонусов на ваш счет!'
        },
        {date: '14 октября',
            title: 'Virtus.pro и Team Spirit гарантировали себе участие на втором мейджоре DPC-сезона 2021'
        },
        {date: '14 октября',
            title: 'INSaNiA: «Мои партнеры могут сыграть практически на любом герое»'
        }
        ,{date: '14 октября',
            title: 'NS: «В СНГ только два тега смогли создать вокруг себя фан-базу»'
        },
        {date: '14 октября',
            title: 'HellRaisers обыграла Team Unique в рамках Pinnacle Cup'
        },
        {date: '14 октября',
            title: 'NS: «В СНГ только два тега смогли создать вокруг себя фан-базу»'
        },
    ]
  return (
    <div>
        {notificationArray.map((item, id) => (
            <Link key={id} className='linkStyle' href={`/articles/${id}`}>
                <NotificationItem date={item.date} title={item.title} />
            </Link>
        ))}
    </div>
  )
}

export default NotificationList
