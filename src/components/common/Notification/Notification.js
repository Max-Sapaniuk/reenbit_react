import "./Notification.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {removeNotification} from "../../../store/mainSlice";

function Notification(props) {
    const notification = useSelector(state => state.main.notification)
    const dispatch = useDispatch()
    useEffect(() => {
        if (notification.status)
            setTimeout(() => dispatch(removeNotification()), 2000)
    }, [dispatch, notification])

    return (
        <div className={`notification ${notification.status ? 'notification_visible' : 'notification_hidden'} notification_${notification.type}`}>
            <div className="notification__title">{notification.title}</div>
            <div className="notification__body">{notification.body}</div>
        </div>
    )
}

export default Notification