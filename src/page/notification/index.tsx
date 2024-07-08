import NotificationList from "@/modules/Articeles/ui/NotificationList"
import clsx from 'clsx';
import styles from './styles.module.scss'

const NotificationPage = () => {
    return (
        <main className={clsx("container", styles.container)}>
            <div>Уведедомление</div>
            <NotificationList />
        </main>
    )
}

export default NotificationPage