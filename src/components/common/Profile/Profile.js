import "./Profile.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";

function Profile(props) {
    return (
        <div className={`${props.className} profile`}>
            <div className="profile__image-container">
                <img src={props.avatar} alt="Avatar" className="profile__image-item"/>
            </div>
            {
                props.isOnline
                    ?
                    <div className="profile__status">
                        <FontAwesomeIcon icon={faCircleCheck}/>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default Profile