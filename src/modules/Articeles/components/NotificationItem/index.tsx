import React, { FC } from 'react'
import styles from './styles.module.scss'

interface Props {
    date: string
    title: string
}

const NotificationItem: FC<Props> = ({date, title}) => {
    return (
        <div className={styles.top_wrapper}>
            <div className={styles.wrapper_container}>
                <span className={styles.date}>{date}</span>
                <span className={styles.title}>{title}</span>
            </div>
        </div>
    )
}

export default NotificationItem
