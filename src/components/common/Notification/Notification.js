import "./Notification.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {removeNotification} from "../../../store/mainSlice";

function Notification() {
    const notificationStatus = useSelector(state => state.main.notification.status)
    const notificationSender = useSelector(state => state.main.notification.sender)
    const dispatch = useDispatch()
    useEffect(() => {
        if (notificationStatus)
            setTimeout(() => dispatch(removeNotification()), 2000)
    })

    return (
        <div className={`notification ${notificationStatus ? 'notification_visible' : 'notification_hidden'}`}>
            <div className="notification__title">Notification</div>
            <div className="notification__body">Yoy got new message from {notificationSender}</div>
        </div>
    )
}

export default Notification