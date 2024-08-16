import NotificationList from "@/modules/Articeles/ui/NotificationList"
import clsx from 'clsx';
import styles from './styles.module.scss'

const NotificationPage = () => {
    return (
        <main className={clsx("container", styles.container)}>
            <h1 className={styles.MainText}>Уведедомление</h1>
            <NotificationList />
        </main>
    )
}

export default NotificationPage