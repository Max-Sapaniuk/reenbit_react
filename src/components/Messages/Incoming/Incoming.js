import "./Incoming.scss"
import Profile from "../../common/Profile/Profile";

function Incoming(props) {
    return (
        <div className={`incoming`}>
            <div className="incoming__data">
                <Profile avatar={props.avatar} isOnline={false} className="incoming__profile"/>
                <div className="incoming__message">{props.message}</div>
            </div>
            <div className="incoming__date">{props.date}</div>
        </div>
    )
}

export default Incoming