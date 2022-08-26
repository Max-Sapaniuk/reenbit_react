import "./Profile.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";

function Profile(props) {
    return (
        <div className="profile">
            <img src={props.avatar} alt="Avatar" className="profile__image"/>
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