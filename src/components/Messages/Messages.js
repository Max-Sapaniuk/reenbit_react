import "./Messages.scss"
import Profile from "../common/Profile/Profile";
import avatar from "../Header/avatar.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Incoming from "./Incoming/Incoming";
import Outcoming from "./Outcoming/Outcoming";

function Messages(props) {
    return (
        <div className="messages">
            <div className="messages__header">
                <Profile avatar={avatar} isOnline={true} className="messages__header-profile"/>
                <div className="messages__header-name">Josefina</div>
            </div>
            <div className="messages__body">
                <Incoming/>
                <Outcoming/>
                <Incoming/>
                <Outcoming/>
                <Incoming/>
                <Outcoming/>
            </div>
            <div className="messages__footer">
                <input type="text"
                       placeholder="Type your message"
                       className="messages__footer-input"/>
                <FontAwesomeIcon icon={faPaperPlane} className="messages__footer-icon"/>
            </div>
        </div>
    )
}

export default Messages